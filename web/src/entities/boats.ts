// Life on the Mandovi: fishermen's canoes, the Betim ferry, and the big casino boats that light up at night.
// Each wanders the open water, turning away before it reaches the bank.
import * as THREE from 'three';
import type { Ground } from '../world/data';
import { WATER_Y } from '../world/data';

type Kind = 'canoe' | 'ferry' | 'casino';
interface Boat { kind: Kind; obj: THREE.Group; x: number; z: number; h: number; v: number; turn: number; t: number; lights?: THREE.Mesh[] }

const lam = (c: number) => new THREE.MeshLambertMaterial({ color: c });
function block(parent: THREE.Object3D, l: number, h: number, w: number, c: number | THREE.Material, x: number, y: number) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(l, h, w), typeof c === 'number' ? lam(c) : c); m.position.set(x, y, 0); m.castShadow = true; parent.add(m); return m;
}

function make(kind: Kind): { obj: THREE.Group; lights: THREE.Mesh[] } {
  const g = new THREE.Group(), lights: THREE.Mesh[] = [];
  if (kind === 'canoe') {
    const hull = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.5, 9, 8, 1, false, 0, Math.PI).rotateZ(Math.PI / 2).rotateX(Math.PI), lam(0x6b3a22));
    hull.scale.set(1, 1, 1.1); hull.position.y = 0.6; g.add(hull);
    block(g, 7, 0.15, 0.15, 0x5a3a20, 0, 0.9).position.z = 2.2;            // the outrigger float and its arms
    for (const x of [-1.5, 1.5]) { const a = block(g, 0.12, 0.12, 2.4, 0x5a3a20, x, 1.0); a.position.z = 1.1; }
    block(g, 0.6, 1.4, 0.6, 0xfdfbf5, 0.5, 1.6); block(g, 0.5, 0.4, 0.5, 0x2a1a10, 0.5, 2.5);   // a fisherman
  } else if (kind === 'ferry') {
    block(g, 22, 2, 7, 0x2f5f9a, 0, 1); block(g, 22.2, 0.5, 7.2, 0xf2efe6, 0, 2.2);
    for (const x of [-9, -3, 3, 9]) for (const z of [-3, 3]) { const p = block(g, 0.25, 3, 0.25, 0xf2efe6, x, 3.8); p.position.z = z; }
    block(g, 20, 0.4, 7.4, 0xf2c230, 0, 5.4);                                   // the yellow roof
    block(g, 3, 2.4, 3, 0xf2efe6, 6, 6.8);                                      // the wheelhouse
  } else {
    // a casino boat: a long white hull with three decks of dark glass, and rows of lights that glow at night
    block(g, 70, 4, 16, 0xf2efe6, 0, 2); block(g, 70.4, 0.8, 16.4, 0x1a2a6a, 0, 4.2);
    for (let k = 0; k < 3; k++) {
      const L = 62 - k * 10, y = 6 + k * 3.6;
      block(g, L, 3.2, 14 - k * 2, 0xe8e2d4, -k * 2, y);
      const glass = new THREE.MeshLambertMaterial({ color: 0x22283a, emissive: 0xff2a8a, emissiveIntensity: 0 });
      const strip = block(g, L + 0.2, 1.2, 14.2 - k * 2, glass, -k * 2, y + 0.2); lights.push(strip);
    }
  }
  return { obj: g, lights };
}

export class Boats {
  readonly group = new THREE.Group();
  list: Boat[] = [];
  private seed = 2024;
  private rnd = () => (this.seed = (this.seed * 16807) % 2147483647) / 2147483647;

  constructor(private g: Ground) {
    this.group.name = 'boats';
    const open = (x: number, z: number, r: number) => { for (let a = 0; a < 6.28; a += 0.8) if (!g.isWet(x + Math.cos(a) * r, z + Math.sin(a) * r)) return false; return g.isWet(x, z); };
    const want: [Kind, number, number][] = [['canoe', 14, 12], ['ferry', 3, 30], ['casino', 4, 60]];
    for (const [kind, n, clear] of want) {
      for (let i = 0, tries = 0; i < n && tries < 4000; tries++) {
        const x = this.rnd() * g.W * 20, z = this.rnd() * g.H * 20;
        if (!open(x, z, clear)) continue;
        const { obj, lights } = make(kind); this.group.add(obj);
        this.list.push({ kind, obj, x, z, h: this.rnd() * 6.28, v: kind === 'canoe' ? 2.5 : kind === 'ferry' ? 4 : 0.6, turn: 0, t: this.rnd() * 9, lights });
        i++;
      }
    }
  }

  update(dt: number, dark: number) {
    for (const b of this.list) {
      b.t += dt;
      const look = b.kind === 'casino' ? 60 : b.kind === 'ferry' ? 30 : 14;
      const ax = b.x + Math.cos(b.h) * look, az = b.z + Math.sin(b.h) * look;
      if (!this.g.isWet(ax, az)) b.turn = 0.6; else if (this.rnd() < dt * 0.05) b.turn = (this.rnd() - 0.5) * 0.3; else b.turn *= 1 - dt;
      b.h += b.turn * dt;
      const nx = b.x + Math.cos(b.h) * b.v * dt, nz = b.z + Math.sin(b.h) * b.v * dt;
      if (this.g.isWet(nx, nz)) { b.x = nx; b.z = nz; }
      b.obj.position.set(b.x, WATER_Y + Math.sin(b.t * 1.4) * 0.15 - 0.4, b.z);
      b.obj.rotation.set(Math.sin(b.t * 1.1) * 0.02, -b.h, Math.sin(b.t * 0.9) * 0.025);
      if (b.lights) b.lights.forEach((m, k) => {
        const mat = m.material as THREE.MeshLambertMaterial;
        mat.emissive.setHSL(((b.t * 0.05 + k * 0.33) % 1), 0.9, 0.5); mat.emissiveIntensity = dark * 1.4;
      });
    }
  }
}
