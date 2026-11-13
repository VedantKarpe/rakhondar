// Scooters and bicycles parked along Panjim's pavements. Stand next to one and press F to ride it (about twice as fast
// as running on foot); press F again to park it wherever you are.
import * as THREE from 'three';
import type { Network } from '../world/network';
import type { Ground } from '../world/data';

interface Bike { obj: THREE.Group; kind: 'scooter' | 'cycle'; x: number; z: number }
const COLS = [0xd0342c, 0x2a5fa8, 0xf2efe6, 0x1d1d22, 0x3f8a5a, 0xe8b23a];

function makeBike(kind: 'scooter' | 'cycle', col: number): THREE.Group {
  const g = new THREE.Group(), m = (c: number) => new THREE.MeshLambertMaterial({ color: c });
  const add = (geo: THREE.BufferGeometry, c: number, x: number, y: number, z = 0) => { const o = new THREE.Mesh(geo, m(c)); o.position.set(x, y, z); o.castShadow = true; g.add(o); return o; };
  const wheel = (x: number, r: number) => add(new THREE.TorusGeometry(r, kind === 'cycle' ? 0.05 : 0.12, 6, 14), 0x151515, x, r);
  if (kind === 'scooter') {
    wheel(0.65, 0.3); wheel(-0.6, 0.3);
    add(new THREE.BoxGeometry(1.0, 0.25, 0.45), col, -0.1, 0.45);                  // the floorboard
    add(new THREE.BoxGeometry(0.75, 0.45, 0.5), col, -0.45, 0.75);                 // the rear body
    add(new THREE.BoxGeometry(0.6, 0.12, 0.38), 0x1d1d22, -0.45, 1.03);            // the seat
    add(new THREE.BoxGeometry(0.25, 0.85, 0.42), col, 0.6, 0.85);                  // the front apron
    add(new THREE.CylinderGeometry(0.03, 0.03, 0.75, 5).rotateX(Math.PI / 2), 0x333333, 0.62, 1.3);   // handlebar
    add(new THREE.SphereGeometry(0.1, 6, 4), 0xfff4c8, 0.75, 1.15);                // headlamp
  } else {
    wheel(0.55, 0.35); wheel(-0.55, 0.35);
    add(new THREE.CylinderGeometry(0.03, 0.03, 1.1, 5).rotateZ(Math.PI / 2), col, 0, 0.6);
    add(new THREE.CylinderGeometry(0.03, 0.03, 0.75, 5).rotateZ(0.5), col, -0.2, 0.55);
    add(new THREE.CylinderGeometry(0.03, 0.03, 0.7, 5).rotateZ(-0.35), col, 0.45, 0.65);
    add(new THREE.BoxGeometry(0.28, 0.06, 0.15), 0x1d1d22, -0.35, 0.95);
    add(new THREE.CylinderGeometry(0.025, 0.025, 0.6, 5).rotateX(Math.PI / 2), 0x333333, 0.55, 1.0);
  }
  g.scale.setScalar(2.2);   // larger than life, like the child
  return g;
}

export class Bikes {
  readonly group = new THREE.Group();
  list: Bike[] = [];
  riding: Bike | null = null;

  constructor(net: Network, private g: Ground, free: (x: number, z: number) => boolean) {
    this.group.name = 'bikes';
    let seed = 515; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    for (let n = 0, tries = 0; n < 220 && tries < 8000; tries++) {
      const e = Math.floor(rnd() * net.edges.length), E = net.edges[e];
      if (E.deck !== null || E.len < 20) continue;
      const p = net.at(e, rnd() * E.len), sd = rnd() < 0.5 ? 1 : -1, off = (E.width / 2 + 2.6) * sd;
      const x = p.x + p.dz * off, z = p.z - p.dx * off;
      if (!free(x, z) || this.list.some(b => Math.hypot(b.x - x, b.z - z) < 14)) continue;
      const kind = rnd() < 0.4 ? 'scooter' : 'cycle', obj = makeBike(kind, COLS[Math.floor(rnd() * COLS.length)]);
      obj.position.set(x, g.heightAt(x, z) + 0.15, z); obj.rotation.y = -Math.atan2(p.dz, p.dx) + Math.PI / 2 + (rnd() - 0.5) * 0.4;   // parked across the kerb
      this.group.add(obj); this.list.push({ obj, kind, x, z }); n++;
    }
  }

  /** The parked bike within reach, if any. */
  near(x: number, z: number): Bike | null { return this.list.find(b => b !== this.riding && Math.hypot(b.x - x, b.z - z) < 7) ?? null; }

  /** How much faster the child goes on what they ride. */
  get boost(): number { return this.riding ? (this.riding.kind === 'scooter' ? 2.2 : 1.6) : 1; }

  mount(b: Bike) { this.riding = b; }
  park(x: number, z: number) { const b = this.riding; if (!b) return; b.x = x; b.z = z; b.obj.position.y = this.g.heightAt(x, z) + 0.15; this.riding = null; }

  /** Keep the ridden bike under the child. */
  follow(x: number, y: number, z: number, heading: number, t: number) {
    const b = this.riding; if (!b) return;
    b.x = x; b.z = z; b.obj.position.set(x, y + Math.sin(t * 20) * 0.03, z); b.obj.rotation.y = -heading;
  }
}
