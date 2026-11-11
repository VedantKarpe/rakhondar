// Traffic on Panjim's real streets: cars, motorcycle pilots and Kadamba buses keep left, turn at junctions, queue
// behind each other, slow for potholes and for the child. Walk into a moving one and there is an accident; stand
// beside one and press F to take a lift, F again to get down.
import * as THREE from 'three';
import type { Network } from '../world/network';
import type { Ground } from '../world/data';

type Kind = 'car' | 'pilot' | 'bus';
interface Vehicle { kind: Kind; obj: THREE.Group; e: number; s: number; v: number; vmax: number; len: number; x: number; z: number; hx: number; hz: number; honk: number }

const CAR_COLS = [0xd8d4c8, 0xb02a2a, 0x2a4c8a, 0x1d1d22, 0x8c8c90, 0xe8e2d0, 0x3b6b45];
const box = (w: number, h: number, l: number, c: number, y: number, x = 0) => {
  const m = new THREE.Mesh(new THREE.BoxGeometry(l, h, w), new THREE.MeshLambertMaterial({ color: c })); m.position.set(x, y, 0); m.castShadow = true; return m;
};

function makeVehicle(kind: Kind, rnd: () => number): THREE.Group {
  const g = new THREE.Group();
  if (kind === 'car') {
    const c = CAR_COLS[Math.floor(rnd() * CAR_COLS.length)];
    g.add(box(2.2, 1.1, 4.6, c, 0.85), box(1.9, 0.8, 2.4, c, 1.8, -0.3), box(1.95, 0.55, 2.2, 0x1b2430, 1.8, -0.3));
    for (const [x, z] of [[1.5, 1.05], [1.5, -1.05], [-1.5, 1.05], [-1.5, -1.05]]) { const w = box(0.3, 0.7, 0.7, 0x111111, 0.35, x); w.position.z = z; g.add(w); }
  } else if (kind === 'bus') {
    // Kadamba: white body, the green and yellow bands, dark windows
    g.add(box(2.6, 2.6, 10.5, 0xf2efe6, 1.9), box(2.62, 0.5, 10.52, 0x2f8a3a, 1.0), box(2.62, 0.2, 10.52, 0xf2c230, 1.35), box(2.64, 0.9, 9.6, 0x1b2430, 2.6, -0.2));
    for (const x of [3.6, -3.4]) for (const z of [1.25, -1.25]) { const w = box(0.3, 0.9, 0.9, 0x111111, 0.45, x); w.position.z = z; g.add(w); }
  } else {
    // a pilot: the yellow-and-black motorcycle taxi, rider in a white shirt
    g.add(box(0.5, 0.6, 1.9, 0xf2c230, 0.75), box(0.6, 0.25, 0.8, 0x1d1d22, 1.1, -0.2), box(0.55, 0.9, 0.45, 0xfdfbf5, 1.75, -0.2), box(0.4, 0.4, 0.4, 0x2a1a10, 2.4, -0.15));
    for (const x of [0.75, -0.75]) g.add(box(0.15, 0.6, 0.6, 0x111111, 0.3, x));
  }
  g.scale.setScalar(1.6);   // vehicles drawn larger than life, as the people are
  return g;
}

export class Traffic {
  readonly group = new THREE.Group();
  list: Vehicle[] = [];
  potholes: { x: number; z: number }[] = [];
  riding: Vehicle | null = null;
  private seed = 99;
  private rnd = () => (this.seed = (this.seed * 16807) % 2147483647) / 2147483647;
  private mids: { e: number; x: number; z: number }[];
  onEvent: (kind: 'crash' | 'honk' | 'hop' | 'drop', text: string) => void = () => {};

  constructor(private net: Network, private g: Ground, private count = 42) {
    this.group.name = 'traffic';
    this.mids = net.edges.map((E, e) => { const m = E.line[Math.floor(E.line.length / 2)]; return { e, x: m[0], z: m[1] }; });
    // potholes: dark patches on a few streets (vehicles slow down for them)
    const potGeo = new THREE.CircleGeometry(1.4, 10).rotateX(-Math.PI / 2), potMat = new THREE.MeshLambertMaterial({ color: 0x1e1c1a, polygonOffset: true, polygonOffsetFactor: -4 });
    for (let i = 0; i < 160; i++) {
      const E = net.edges[Math.floor(this.rnd() * net.edges.length)]; if (E.deck !== null || E.len < 30) continue;
      const p = net.at(net.edges.indexOf(E), this.rnd() * E.len), o = (this.rnd() - 0.5) * E.width * 0.5;
      const x = p.x - p.dz * o, z = p.z + p.dx * o; this.potholes.push({ x, z });
      const m = new THREE.Mesh(potGeo, potMat); m.position.set(x, g.heightAt(x, z) + 0.24, z); m.scale.set(0.7 + this.rnd(), 1, 0.7 + this.rnd()); this.group.add(m);
    }
  }

  private spawn(cx: number, cz: number, far: boolean) {
    const near = this.mids.filter(m => { const d = Math.hypot(m.x - cx, m.z - cz); return far ? d > 180 && d < 320 : d < 300; });
    if (!near.length) return;
    const m = near[Math.floor(this.rnd() * near.length)], E = this.net.edges[m.e];
    const r = this.rnd(), kind: Kind = E.width < 9 ? (r < 0.6 ? 'pilot' : 'car') : r < 0.12 ? 'bus' : r < 0.5 ? 'pilot' : 'car';
    const e = E.oneWay || this.rnd() < 0.5 ? m.e : ~m.e;
    const vmax = (kind === 'pilot' ? 9 : kind === 'bus' ? 6 : 8) * (E.width < 9 ? 0.7 : 1);
    const obj = makeVehicle(kind, this.rnd); this.group.add(obj);
    this.list.push({ kind, obj, e, s: this.rnd() * E.len, v: vmax * 0.6, vmax, len: kind === 'bus' ? 17 : kind === 'car' ? 7.5 : 3.2, x: 0, z: 0, hx: 1, hz: 0, honk: 0 });
  }

  private remove(v: Vehicle) { this.group.remove(v.obj); this.list.splice(this.list.indexOf(v), 1); }

  /** The vehicle within reach of (x, z), for taking a lift. */
  nearbyFor(x: number, z: number): Vehicle | null {
    let best: Vehicle | null = null, bd = 9;
    for (const v of this.list) { const d = Math.hypot(v.x - x, v.z - z); if (d < bd && v.kind !== 'car') { bd = d; best = v; } }
    if (!best) for (const v of this.list) { const d = Math.hypot(v.x - x, v.z - z); if (d < bd) { bd = d; best = v; } }
    return best;
  }

  /** Move everything; returns a knock (direction and strength) if a vehicle hit the child at (cx, cz). */
  update(dt: number, cx: number, cz: number, night: boolean): { kx: number; kz: number } | null {
    while (this.list.length < this.count) this.spawn(cx, cz, this.list.length > this.count / 2 && this.list.length > 0);
    let hit: { kx: number; kz: number } | null = null;
    for (const v of [...this.list]) {
      if (v !== this.riding && Math.hypot(v.x - cx, v.z - cz) > 420 && v.x !== 0) { this.remove(v); continue; }
      // look ahead: a vehicle in front, the child in front, a pothole in front
      let want = v.vmax;
      for (const o of this.list) {
        if (o === v) continue;
        const dx = o.x - v.x, dz = o.z - v.z, ahead = dx * v.hx + dz * v.hz, side = Math.abs(dx * v.hz - dz * v.hx);
        if (ahead > 0 && ahead < v.len + 9 && side < 2.6 && o.hx * v.hx + o.hz * v.hz > 0.3) want = Math.min(want, Math.max(0, (ahead - v.len) * 0.6));
      }
      if (v !== this.riding) {
        const dx = cx - v.x, dz = cz - v.z, ahead = dx * v.hx + dz * v.hz, side = Math.abs(dx * v.hz - dz * v.hx);
        if (ahead > 0 && ahead < 14 && side < 3.5) {
          want = Math.min(want, Math.max(0, (ahead - 6) * 0.5));
          if (v.honk <= 0 && v.v > 2) { v.honk = 4; this.onEvent('honk', ''); }
        }
        // the child walks into a moving vehicle: an accident
        if (Math.hypot(dx, dz) < v.len * 0.5 + 1 && side < 2.4 && v.v > 3 && !hit) {
          hit = { kx: v.hx * v.v * 1.2 + (dx * v.hz - dz * v.hx > 0 ? v.hz : -v.hz) * 4, kz: v.hz * v.v * 1.2 };
          this.onEvent('crash', v.kind === 'pilot' ? 'Aiyo baba! Look where you are going, men!' : v.kind === 'bus' ? 'Arre! The Kadamba driver slams on his brakes.' : 'Screech! Dev borem korum, you are not hurt badly, no?');
          v.v = 0;
        }
      }
      for (const p of this.potholes) {
        const dx = p.x - v.x, dz = p.z - v.z, ahead = dx * v.hx + dz * v.hz;
        if (ahead > 0 && ahead < 12 && Math.abs(dx * v.hz - dz * v.hx) < 2.5) { want = Math.min(want, 3); break; }
      }
      if (night) want *= 0.85;
      v.v += Math.max(-12 * dt, Math.min(3 * dt, want - v.v));
      v.honk -= dt;
      v.s += v.v * dt;
      for (let k = 0; k < 8 && v.s > this.net.edge(v.e).len; k++) { v.s -= this.net.edge(v.e).len; v.e = this.net.next(v.e, this.rnd); }
      const p = this.net.at(v.e, v.s), w = this.net.edge(v.e).width;
      const off = w * (w >= 9 ? 0.24 : 0.2);   // keep left: offset to the left of the direction of travel
      const lx = p.dz, lz = -p.dx;
      v.x = p.x + lx * off; v.z = p.z + lz * off; v.hx += (p.dx - v.hx) * Math.min(1, dt * 8); v.hz += (p.dz - v.hz) * Math.min(1, dt * 8);
      const deck = this.net.edge(v.e).deck;
      v.obj.position.set(v.x, deck !== null ? deck + 0.2 : this.g.heightAt(v.x, v.z) + 0.25, v.z);
      v.obj.rotation.y = -Math.atan2(v.hz, v.hx);
    }
    return hit;
  }

  hopOn(x: number, z: number): boolean {
    const v = this.nearbyFor(x, z); if (!v) return false;
    this.riding = v;
    const line = v.kind === 'pilot' ? 'Boso, boso! Hold tight, men. Where you want to go?' : v.kind === 'bus' ? 'The conductor waves you in. "Panjim-Mapusa, come, come!"' : 'A kind uncle stops. "Get in, baba. I am going that side only."';
    this.onEvent('hop', line);
    return true;
  }
  hopOff(): { x: number; z: number } | null {
    const v = this.riding; if (!v) return null;
    this.riding = null;
    this.onEvent('drop', v.kind === 'pilot' ? '"Here only? Okay baba, go carefully."' : '"Rav, rav, let me stop properly first!"');
    // step off to the left, onto the pavement side
    const w = this.net.edge(v.e).width;
    return { x: v.x + v.hz * (w * 0.4 + 2), z: v.z - v.hx * (w * 0.4 + 2) };
  }
}
