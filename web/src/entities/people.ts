// Townspeople walking the pavements of the real streets. Go up to one and press T: they talk the Goan way and point
// you to where you need to go.
import * as THREE from 'three';
import type { Network } from '../world/network';
import type { Ground } from '../world/data';

interface Person { obj: THREE.Group; legs: THREE.Object3D[]; e: number; s: number; side: number; v: number; x: number; z: number; t: number; pause: number }

const SHIRTS = [0xfdfbf5, 0xc0392b, 0x2e86c1, 0xe67e22, 0x8e44ad, 0x16a085, 0xf2c230, 0x7f8c8d];
const GREET = ['Kitem re, bhurgea? Lost or what?', 'Itlo uxir? So late you are out? Ghara voch, go home, men.', 'Dev borem korum. Careful of the cars, no?', 'Boso, boso, sit a little. Too hot today.', 'Deva re, this pothole they will never fix, I tell you.'];

export class People {
  readonly group = new THREE.Group();
  list: Person[] = [];
  private seed = 4242;
  private rnd = () => (this.seed = (this.seed * 16807) % 2147483647) / 2147483647;

  constructor(private net: Network, private g: Ground, private count = 36) { this.group.name = 'people'; }

  private make(): Person {
    const obj = new THREE.Group(), mat = (c: number) => new THREE.MeshLambertMaterial({ color: c });
    const skin = mat([0x8a5a3a, 0xb8794a, 0x6b4428][Math.floor(this.rnd() * 3)]), shirt = mat(SHIRTS[Math.floor(this.rnd() * SHIRTS.length)]);
    const part = (geo: THREE.BufferGeometry, m: THREE.Material, y: number, p: THREE.Object3D = obj) => { const o = new THREE.Mesh(geo, m); o.position.y = y; o.castShadow = true; p.add(o); return o; };
    const legs = [-0.12, 0.12].map(z => { const p = new THREE.Group(); p.position.set(0, 0.85, z); obj.add(p); part(new THREE.CylinderGeometry(0.08, 0.08, 0.85, 6), mat(0x2b2b33), -0.42, p); return p; });
    part(new THREE.CylinderGeometry(0.22, 0.26, 0.75, 8), shirt, 1.2);
    part(new THREE.SphereGeometry(0.2, 10, 8), skin, 1.8);
    part(new THREE.SphereGeometry(0.21, 10, 8, 0, Math.PI * 2, 0, 1.3), mat(this.rnd() < 0.3 ? 0xbcbcbc : 0x1a1410), 1.86);
    obj.scale.setScalar(2.4);
    this.group.add(obj);
    return { obj, legs, e: 0, s: 0, side: this.rnd() < 0.5 ? 1 : -1, v: 1.2 + this.rnd() * 0.8, x: 0, z: 0, t: this.rnd() * 6, pause: 0 };
  }

  update(dt: number, cx: number, cz: number, night: boolean) {
    const want = night ? Math.floor(this.count / 3) : this.count;
    while (this.list.length < want) {
      const p = this.make(), cand = this.net.edges.map((_, i) => i).filter(i => { const m = this.net.at(i, 0); return Math.hypot(m.x - cx, m.z - cz) < 280; });
      if (!cand.length) { this.group.remove(p.obj); break; }
      p.e = cand[Math.floor(this.rnd() * cand.length)]; p.s = this.rnd() * this.net.edge(p.e).len; p.x = cx + 1e4;
      this.list.push(p);
    }
    for (const p of [...this.list]) {
      if ((Math.hypot(p.x - cx, p.z - cz) > 360 && p.x < 1e4) || this.list.length > want) { this.group.remove(p.obj); this.list.splice(this.list.indexOf(p), 1); continue; }
      const near = Math.hypot(p.x - cx, p.z - cz) < 7;
      if (p.pause > 0) p.pause -= dt; else if (!near) {
        p.s += p.v * 3 * dt; p.t += dt * 7;
        for (let k = 0; k < 8 && p.s > this.net.edge(p.e).len; k++) { p.s -= this.net.edge(p.e).len; p.e = this.net.next(p.e, this.rnd); if (this.rnd() < 0.1) p.pause = 2 + this.rnd() * 3; }
      }
      const a = this.net.at(p.e, p.s), E = this.net.edge(p.e), off = (E.width / 2 + 2.2) * p.side;
      p.x = a.x + a.dz * off; p.z = a.z - a.dx * off;
      p.obj.position.set(p.x, (E.deck ?? this.g.heightAt(p.x, p.z)) + 0.15, p.z);
      p.obj.rotation.y = near ? -Math.atan2(cz - p.z, cx - p.x) : -Math.atan2(a.dz, a.dx);
      const sw = p.pause > 0 || near ? 0 : Math.sin(p.t) * 0.5;
      p.legs[0].rotation.z = sw; p.legs[1].rotation.z = -sw;
    }
  }

  /** The person in talking reach of (x, z), if any. */
  near(x: number, z: number): Person | null {
    for (const p of this.list) if (Math.hypot(p.x - x, p.z - z) < 7) return p;
    return null;
  }

  /** What a townsperson says: a greeting, and where to go for the current task. */
  talk(cx: number, cz: number, target: { x: number; z: number; name: string } | null): string {
    let s = GREET[Math.floor(this.rnd() * GREET.length)];
    if (target) {
      const dx = target.x - cx, dz = target.z - cz, d = Math.hypot(dx, dz);
      const dir = ['east', 'south-east', 'south', 'south-west', 'west', 'north-west', 'north', 'north-east'][((Math.round(Math.atan2(dz, dx) / (Math.PI / 4)) % 8) + 8) % 8];
      s += d < 40 ? ` ${target.name}? Here only, baba!` : ` ${target.name}? Go ${dir}, about ${Math.round(d / 10) * 10} metres. That side only.`;
    }
    return s;
  }
}
