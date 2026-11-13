// The tasks, as in the canvas game: the people of Panjim ask for help one after another through the day, and at
// night the Rakhondar sends you after villagers stranded in the dark.
//   Shantabai's garbage: bags dumped along one named street; pick them all up.
//   Mai's poee: three houses marked for hot poee; reach each door.
//   Anton's letters: three houses with no numbers, only descriptions; find each.
//   Tia Rosa's hen Pinky: the hen runs off when you come near; catch her and walk her home.
//   Night, the stranded: villagers lost in the dark lanes; find each and walk them back to Church Square.
import * as THREE from 'three';
import type { Network } from '../world/network';
import type { Ground, PanjimData } from '../world/data';
import { T, pts } from '../world/data';
import type { Building } from '../world/buildings';

export interface Spot { x: number; z: number; name: string; done: boolean }
type Kind = 'collect' | 'deliver' | 'catch' | 'rescue';
interface Quest { kind: Kind; title: string; giver: string; intro: string; outro: string; spots: Spot[]; pts: number; litter?: boolean; home?: Spot }
interface Follower { obj: THREE.Group; x: number; z: number; spot: Spot }

const DIRS = ['east', 'south-east', 'south', 'south-west', 'west', 'north-west', 'north', 'north-east'];
const dirOf = (dx: number, dz: number) => DIRS[((Math.round(Math.atan2(dz, dx) / (Math.PI / 4)) % 8) + 8) % 8];

function person(shirt: number): THREE.Group {
  const g = new THREE.Group(), m = (c: number) => new THREE.MeshLambertMaterial({ color: c });
  const add = (geo: THREE.BufferGeometry, c: number, y: number) => { const o = new THREE.Mesh(geo, m(c)); o.position.y = y; o.castShadow = true; g.add(o); };
  add(new THREE.CylinderGeometry(0.1, 0.12, 0.85, 6), 0x2b2b33, 0.42); add(new THREE.CylinderGeometry(0.22, 0.26, 0.75, 8), shirt, 1.2); add(new THREE.SphereGeometry(0.2, 10, 8), 0x8a5a3a, 1.8);
  g.scale.setScalar(2.4); return g;
}
function hen(): THREE.Group {
  const g = new THREE.Group(), m = (c: number) => new THREE.MeshLambertMaterial({ color: c });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.35, 10, 8).scale(1.3, 1, 1), m(0xf6f2e8)); body.position.y = 0.45; g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 8, 6), m(0xf6f2e8)); head.position.set(0.42, 0.78, 0); g.add(head);
  const comb = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.05), m(0xd8302a)); comb.position.set(0.44, 0.97, 0); g.add(comb);
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.14, 5).rotateZ(-Math.PI / 2), m(0xf2b030)); beak.position.set(0.6, 0.76, 0); g.add(beak);
  g.scale.setScalar(2.2); return g;
}

export class Quests {
  readonly group = new THREE.Group();
  list: Quest[] = [];
  i = 0;
  night: Quest | null = null;            // the night's rescue, when there is one
  private nightDone = false;
  private marks: THREE.Object3D[] = [];
  private followers: Follower[] = [];
  private henObj: THREE.Group | null = null;
  private henAt = { x: 0, z: 0, caught: false };
  private t = 0;
  private rnd: () => number;

  constructor(private d: PanjimData, private net: Network, private g: Ground, houses: Building[], private sx: number, private sz: number,
    private free: (x: number, z: number) => boolean) {
    this.group.name = 'quests';
    let seed = 77; this.rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const placeName = (x: number, z: number) => { let best = d.places[0], bd = 1e18; for (const p of d.places) { const dd = Math.hypot(p[1] * T - x, p[2] * T - z); if (dd < bd) { bd = dd; best = p; } } return best; };
    const home: Spot = (() => { const p = d.places.find(q => /church square/i.test(q[0])) ?? d.places[0]; return { x: p[1] * T, z: p[2] * T, name: p[0], done: false }; })();

    // garbage: bags along one named street near the start
    const named = d.r.filter(r => r[4] >= 0 && !(r[2] & 1)).map(r => { const q = pts(r[0]); const m = q[Math.floor(q.length / 2)]; return { r, d: Math.hypot(m[0] * T - sx, m[1] * T - sz) }; }).filter(a => a.d < 500).sort((a, b) => a.d - b.d);
    const street = named[0]?.r, streetName = street ? d.names[street[4]] : 'the lane';
    const bags: Spot[] = [];
    if (street) {
      const line = pts(street[0]).map(([x, y]) => [x * T, y * T]); let L = 0; const segs: [number, number, number, number, number][] = [];
      for (let k = 1; k < line.length; k++) { const l = Math.hypot(line[k][0] - line[k - 1][0], line[k][1] - line[k - 1][1]); segs.push([line[k - 1][0], line[k - 1][1], line[k][0], line[k][1], l]); L += l; }
      for (let b = 0; b < 6; b++) {
        let s = (b + 0.5) / 6 * L;
        for (const [ax, az, bx, bz, l] of segs) { if (s <= l) { const side = b % 2 ? 1 : -1, nx = -(bz - az) / l, nz = (bx - ax) / l, off = street[1] * 0.75 + 1.5; bags.push({ x: ax + (bx - ax) * s / l + nx * off * side, z: az + (bz - az) * s / l + nz * off * side, name: 'bag', done: false }); break; } s -= l; }
      }
    }
    // houses for the poee and the letters: real buildings 120-600 m away, each described by where it stands
    const pick = (n: number, minD: number, maxD: number) => {
      const out: Spot[] = [], cand = houses.filter(h => { const cx = (h.bb[0] + h.bb[2]) / 2, cz = (h.bb[1] + h.bb[3]) / 2, dd = Math.hypot(cx - sx, cz - sz); return dd > minD && dd < maxD && (h.bb[2] - h.bb[0]) < 25; });
      for (let k = 0; k < n && cand.length; k++) {
        const h = cand.splice(Math.floor(this.rnd() * cand.length), 1)[0], cx = (h.bb[0] + h.bb[2]) / 2, cz = (h.bb[1] + h.bb[3]) / 2;
        const storeys = Math.max(1, Math.round((h.top - h.base) / 3.4)), p = placeName(cx, cz);
        const dist = Math.round(Math.hypot(cx - p[1] * T, cz - p[2] * T) / 10) * 10;
        out.push({ x: cx, z: cz, name: `the ${storeys === 1 ? 'single-storey' : storeys === 2 ? 'two-storey' : 'tall'} house ${dist < 40 ? 'right in' : `${dist} m ${dirOf(cx - p[1] * T, cz - p[2] * T)} of`} ${p[0]}`, done: false });
      }
      return out;
    };
    const henHome: Spot = { x: sx, z: sz, name: "Tia Rosa's yard", done: false };
    this.list = [
      { kind: 'collect', title: `Clean up ${streetName}`, giver: 'Shantabai', litter: true, spots: bags, pts: 15,
        intro: `Shantabai, sweeping her yard: "Aay deva, plastic everywhere after last night! Collect the bags along ${streetName}, baba."`,
        outro: `Shantabai: "Look how clean ${streetName} is! Dev borem korum, baba. The Rakhondar likes a clean town."` },
      { kind: 'deliver', title: "Mai's poee", giver: 'Mai', spots: pick(3, 120, 450), pts: 40,
        intro: 'Mai the baker, with a basket of hot poee: "Take these to three houses before they go cold, no? I have marked the doors."',
        outro: 'Mai: "All delivered, and still warm! Borem zalem, baba. Here, one poee for you."' },
      { kind: 'deliver', title: "Anton's letters", giver: 'Anton', spots: pick(3, 200, 700), pts: 50,
        intro: 'Anton the postman: "Three letters, and no house numbers on any of them, men! Find each house from its description."',
        outro: 'Anton: "Every letter at the right door! Shabaas, baba, you know Panjim better than I do."' },
      { kind: 'catch', title: "Tia Rosa's hen", giver: 'Tia Rosa', spots: [], pts: 60, home: henHome,
        intro: 'Tia Rosa: "Aay deva, my hen Pinky ran off again! Catch her and bring her home, baba, please."',
        outro: 'Tia Rosa: "Pinky! Naughty girl. Dev borem korum, bhurgea, come for sorpotel on Sunday."' },
    ];
    void home; void this.d; void this.net;
    this.show();
  }

  /** The task now in hand: the night's rescue while it lasts, otherwise the day's next task. */
  get cur(): Quest | null { return this.night ?? this.list[this.i] ?? null; }
  get target(): Spot | null {
    const q = this.cur; if (!q) return null;
    if (q.kind === 'catch') return this.henAt.caught ? q.home! : { x: this.henAt.x, z: this.henAt.z, name: 'Pinky the hen', done: false };
    if (q.kind === 'rescue' && this.followers.length) { const lost = q.spots.find(s => !s.done && !this.followers.some(f => f.spot === s)); return lost ?? q.home!; }
    return q.spots.find(s => !s.done) ?? null;
  }
  get objective(): string {
    const q = this.cur; if (!q) return 'All tasks done. Explore Panjim, and keep the demons away at night.';
    const left = q.spots.filter(s => !s.done).length, done = q.spots.length - left;
    if (q.kind === 'collect') return `${q.title}: ${done}/${q.spots.length} bags picked up`;
    if (q.kind === 'catch') return this.henAt.caught ? `${q.title}: walk Pinky home` : `${q.title}: catch Pinky`;
    if (q.kind === 'rescue') return `Stranded: ${done}/${q.spots.length} safe${this.followers.length ? ` · ${this.followers.length} following you to ${q.home!.name}` : ''}`;
    return `${q.title}: ${this.target?.name ?? ''} (${done}/${q.spots.length})`;
  }
  /** The spots to pin on the minimap. */
  get pins(): Spot[] { const t = this.target, q = this.cur; return q?.kind === 'catch' || q?.kind === 'rescue' ? (t ? [t] : []) : (q?.spots.filter(s => !s.done) ?? []); }

  private show() {
    for (const m of this.marks) this.group.remove(m);
    this.marks = [];
    if (this.henObj) { this.group.remove(this.henObj); this.henObj = null; }
    const q = this.cur; if (!q) return;
    if (q.kind === 'catch') {
      // Pinky starts out in the open ground some way off
      for (let k = 0; k < 400; k++) { const a = this.rnd() * 6.28, r = 150 + this.rnd() * 200, x = this.sx + Math.cos(a) * r, z = this.sz + Math.sin(a) * r; if (this.free(x, z)) { this.henAt = { x, z, caught: false }; break; } }
      this.henObj = hen(); this.group.add(this.henObj);
    }
    for (const s of q.spots) {
      const o = new THREE.Group();
      if (q.kind === 'collect') {
        const bag = new THREE.Mesh(new THREE.SphereGeometry(0.9, 8, 6).scale(1, 0.8, 1), new THREE.MeshLambertMaterial({ color: 0x2b2b2b })); bag.position.y = 0.7; o.add(bag);
        const pap = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.1, 0.6), new THREE.MeshLambertMaterial({ color: 0xf5f0e0 })); pap.position.set(1.1, 0.25, 0.4); o.add(pap);
      } else if (q.kind === 'rescue') {
        const p = person(0x9a8f7a); o.add(p);
        const ex = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.6, 0.5), new THREE.MeshBasicMaterial({ color: 0xf2b441 })); ex.position.y = 7; o.add(ex);
      } else {
        const beam = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 60, 16, 1, true), new THREE.MeshBasicMaterial({ color: 0xf2b441, transparent: true, opacity: 0.25, depthWrite: false, side: THREE.DoubleSide }));
        beam.position.y = 30; o.add(beam);
      }
      o.position.set(s.x, this.g.heightAt(s.x, s.z) + 0.2, s.z); o.userData.spot = s; this.marks.push(o); this.group.add(o);
    }
  }

  /** Night falls: the Rakhondar tells of villagers stranded in the dark lanes (once each night). */
  startNight(cx: number, cz: number): string | null {
    if (this.night || this.nightDone) return null;
    const spots: Spot[] = [];
    for (let k = 0; k < 600 && spots.length < 3; k++) {
      const a = this.rnd() * 6.28, r = 180 + this.rnd() * 300, x = cx + Math.cos(a) * r, z = cz + Math.sin(a) * r;
      if (this.free(x, z) && !spots.some(s => Math.hypot(s.x - x, s.z - z) < 120)) spots.push({ x, z, name: 'a stranded villager', done: false });
    }
    const p = this.d.places.find(q => /church square/i.test(q[0])) ?? this.d.places[0];
    this.night = { kind: 'rescue', title: 'The stranded', giver: 'Rakhondar', spots, pts: 80, home: { x: p[1] * T, z: p[2] * T, name: p[0], done: false },
      intro: 'The Rakhondar whispers: "Three people are stranded out in the dark lanes. Find them, and walk them to Church Square before the shadows take them."',
      outro: 'The Rakhondar: "All safe under the church lights. You did well tonight, little one."' };
    this.show();
    return this.night.intro;
  }
  /** Morning: an unfinished rescue is called off, and the next night can bring a new one. */
  endNight() { if (this.night) { this.night = null; this.followers.forEach(f => this.group.remove(f.obj)); this.followers = []; this.show(); } this.nightDone = false; }

  update(dt: number, cx: number, cz: number): { pts: number; msg: string } | null {
    this.t += dt;
    const q = this.cur; if (!q) return null;
    for (const m of this.marks) if (q.kind === 'deliver') m.children[0].rotation.y = this.t;
    // Pinky: runs from the child, gets caught when cornered or outrun, then trots behind
    if (q.kind === 'catch' && this.henObj) {
      const h = this.henAt, dx = h.x - cx, dz = h.z - cz, dd = Math.hypot(dx, dz) || 1;
      if (!h.caught) {
        if (dd < 3.5) { h.caught = true; return { pts: 10, msg: 'Got her! Pinky clucks and settles in your arms. Now take her home.' }; }
        if (dd < 18) { const sp = 11 * dt, nx = h.x + dx / dd * sp + Math.sin(this.t * 7) * sp * 0.6, nz = h.z + dz / dd * sp + Math.cos(this.t * 5) * sp * 0.6; if (this.free(nx, nz)) { h.x = nx; h.z = nz; } }
      } else if (dd > 2.5) { h.x -= dx / dd * Math.min(dd - 2.5, 30 * dt); h.z -= dz / dd * Math.min(dd - 2.5, 30 * dt); }
      this.henObj.position.set(h.x, this.g.heightAt(h.x, h.z) + 0.2 + Math.abs(Math.sin(this.t * 12)) * 0.15, h.z);
      this.henObj.rotation.y = -Math.atan2(h.caught ? -dz : dz, h.caught ? -dx : dx);
      if (h.caught && Math.hypot(q.home!.x - cx, q.home!.z - cz) < 14) return this.finish(q);
      return null;
    }
    // the stranded: find them, they follow, bring them home
    if (q.kind === 'rescue') {
      for (const s of q.spots) if (!s.done && !this.followers.some(f => f.spot === s) && Math.hypot(s.x - cx, s.z - cz) < 6) {
        const m = this.marks.find(o => o.userData.spot === s); if (m) m.visible = false;
        const obj = person(0x9a8f7a); this.group.add(obj); this.followers.push({ obj, x: s.x, z: s.z, spot: s });
        return { pts: 10, msg: '"Oh, thank God, a light! Take me home, baba, I will stay right behind you."' };
      }
      this.followers.forEach((f, k) => {
        const tx = cx - Math.cos(this.t * 0.3 + k) * (3 + k * 2.5), tz = cz - Math.sin(this.t * 0.3 + k) * (3 + k * 2.5), dd = Math.hypot(tx - f.x, tz - f.z);
        if (dd > 0.5) { const sp = Math.min(dd, 28 * dt); f.x += (tx - f.x) / dd * sp; f.z += (tz - f.z) / dd * sp; }
        f.obj.position.set(f.x, this.g.heightAt(f.x, f.z) + 0.15, f.z); f.obj.rotation.y = -Math.atan2(cz - f.z, cx - f.x);
      });
      if (this.followers.length && Math.hypot(q.home!.x - cx, q.home!.z - cz) < 30) {
        const n = this.followers.length;
        this.followers.forEach(f => { f.spot.done = true; this.group.remove(f.obj); }); this.followers = [];
        if (q.spots.every(s => s.done)) return this.finish(q);
        return { pts: 25 * n, msg: `${n === 1 ? 'One more' : `${n} more`} safe under the church lights. "Dev borem korum, baba!"` };
      }
      return null;
    }
    for (const s of q.spots) {
      if (s.done || Math.hypot(s.x - cx, s.z - cz) > (q.kind === 'collect' ? 4 : 14)) continue;
      s.done = true;
      const m = this.marks.find(o => o.userData.spot === s); if (m) m.visible = false;
      if (q.spots.every(x => x.done)) return this.finish(q);
      return { pts: q.pts, msg: q.kind === 'collect' ? 'Into the bin it goes. Shabaas!' : q.giver === 'Mai' ? 'A warm parcel of poee at the door. "Thank you, baba!"' : 'Letter delivered. "Finally! Who sent it, men?"' };
    }
    return null;
  }

  /** People who need finding are the demons' favourite prey: where are they now? */
  get vulnerable(): { x: number; z: number }[] { return this.followers.map(f => ({ x: f.x, z: f.z })); }

  private finish(q: Quest): { pts: number; msg: string } {
    if (q === this.night) { this.night = null; this.nightDone = true; this.show(); return { pts: q.pts + 50, msg: q.outro }; }
    this.i++; this.show();
    const next = this.list[this.i];
    return { pts: q.pts + 30, msg: q.outro + (next ? `\n\n${next.intro}` : '') };
  }
}
