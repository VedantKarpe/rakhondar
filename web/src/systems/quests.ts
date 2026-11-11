// The tasks the child is given, one after another. Each is a set of spots to reach; reaching one gives points and
// moves the story on. Spots show in the world as a glowing marker and on the minimap as pins.
import * as THREE from 'three';
import type { Network } from '../world/network';
import type { Ground, PanjimData } from '../world/data';
import { T } from '../world/data';

export interface Spot { x: number; z: number; name: string; done: boolean }
interface Quest { title: string; intro: string; outro: string; spots: Spot[]; pts: number; litter?: boolean }

export class Quests {
  readonly group = new THREE.Group();
  list: Quest[] = [];
  i = 0;
  private marks: THREE.Object3D[] = [];
  private t = 0;

  constructor(d: PanjimData, net: Network, private g: Ground, sx: number, sz: number) {
    this.group.name = 'quests';
    let seed = 77; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const place = (want: RegExp, fallbackFar: number): Spot => {
      const p = d.places.find(([n]) => want.test(n)) ?? d.places.slice().sort((a, b) => Math.abs(Math.hypot(a[1] * T - sx, a[2] * T - sz) - fallbackFar) - Math.abs(Math.hypot(b[1] * T - sx, b[2] * T - sz) - fallbackFar))[0];
      return { x: p[1] * T, z: p[2] * T, name: p[0], done: false };
    };
    // litter on the streets near the start
    const litter: Spot[] = [];
    const near = net.edges.map((_, e) => e).filter(e => { const p = net.at(e, 0); return Math.hypot(p.x - sx, p.z - sz) < 160 && net.edges[e].deck === null; });
    for (let k = 0; k < 6 && near.length; k++) { const e = near[Math.floor(rnd() * near.length)], p = net.at(e, rnd() * net.edges[e].len); litter.push({ x: p.x, z: p.z, name: 'litter', done: false }); }
    this.list = [
      { title: 'Clean the street', intro: 'Deva, see all this garbage near the church! Pick it up, baba. Panjim must stay clean, no?', outro: 'Dev borem korum! The street is clean. Now go get the poee, Aunty is waiting.', spots: litter, pts: 10, litter: true },
      { title: 'Bring the poee', intro: 'Go to the Panjim Bazaar and bring fresh poee for Aunty. Run, before it is all sold!', outro: 'Hot poee! Aunty is happy. Now these letters, deliver them, men.', spots: [place(/bazaar|market/i, 500)], pts: 40 },
      { title: 'Deliver the letters', intro: 'Three letters to deliver. Ask people the way if you are lost.', outro: 'All delivered! You know Panjim like a postman now.', spots: [place(/church square/i, 400), place(/campal/i, 700), place(/patto/i, 900)], pts: 30 },
      { title: 'Find the lost hen', intro: 'Mrs. Fernandes\' hen ran off towards Fontainhas. Find it before dark!', outro: 'There she is! Mrs. Fernandes will make you sorpotel for this. Well done, baba.', spots: [place(/fontainhas/i, 800)], pts: 60 },
    ];
    this.show();
  }

  get cur(): Quest | null { return this.list[this.i] ?? null; }
  /** The next spot to go to, for townspeople's directions and the arrow. */
  get target(): Spot | null { return this.cur?.spots.find(s => !s.done) ?? null; }
  get objective(): string {
    const q = this.cur; if (!q) return 'All tasks done. Explore Panjim, and keep the demons away at night.';
    const left = q.spots.filter(s => !s.done).length;
    return q.litter ? `${q.title}: ${q.spots.length - left}/${q.spots.length} picked up` : `${q.title}: go to ${this.target?.name ?? ''}${q.spots.length > 1 ? ` (${q.spots.length - left}/${q.spots.length})` : ''}`;
  }

  private show() {
    for (const m of this.marks) this.group.remove(m);
    this.marks = [];
    const q = this.cur; if (!q) return;
    for (const s of q.spots) {
      const o = new THREE.Group();
      if (q.litter) {
        const bag = new THREE.Mesh(new THREE.SphereGeometry(0.9, 8, 6).scale(1, 0.8, 1), new THREE.MeshLambertMaterial({ color: 0x2b2b2b })); bag.position.y = 0.7; o.add(bag);
        const pap = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.1, 0.6), new THREE.MeshLambertMaterial({ color: 0xf5f0e0 })); pap.position.set(1.1, 0.25, 0.4); o.add(pap);
      } else {
        const beam = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 60, 16, 1, true), new THREE.MeshBasicMaterial({ color: 0xf2b441, transparent: true, opacity: 0.25, depthWrite: false, side: THREE.DoubleSide }));
        beam.position.y = 30; o.add(beam);
      }
      o.position.set(s.x, this.g.heightAt(s.x, s.z) + 0.2, s.z); o.userData.spot = s; this.marks.push(o); this.group.add(o);
    }
  }

  /** Check what the child at (cx, cz) has reached; returns {points, message} when something happened. */
  update(dt: number, cx: number, cz: number): { pts: number; msg: string } | null {
    this.t += dt;
    for (const m of this.marks) if (!this.cur?.litter) m.children[0].rotation.y = this.t;
    const q = this.cur; if (!q) return null;
    for (const s of q.spots) {
      if (s.done || Math.hypot(s.x - cx, s.z - cz) > (q.litter ? 4 : 14)) continue;
      s.done = true;
      const m = this.marks.find(m => m.userData.spot === s); if (m) m.visible = false;
      if (q.spots.every(x => x.done)) { this.i++; this.show(); return { pts: q.pts + 20, msg: q.outro + (this.cur ? `\n\n${this.cur.intro}` : '') }; }
      return { pts: q.pts, msg: q.litter ? 'Into the bin it goes. Shabaas!' : `Reached ${s.name}.` };
    }
    return null;
  }
}
