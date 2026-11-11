// Petrol pumps beside the main streets: a red-and-white canopy on pillars over two dispensers. Walk in and the
// attendant tops up the clay lamp's oil.
import * as THREE from 'three';
import type { Network } from '../world/network';
import type { Ground } from '../world/data';

export class Pumps {
  readonly group = new THREE.Group();
  spots: { x: number; z: number }[] = [];
  private cool = 0;

  constructor(net: Network, g: Ground, canFit: (x: number, z: number) => boolean) {
    this.group.name = 'pumps';
    const mat = (c: number, e = 0) => new THREE.MeshLambertMaterial({ color: c, emissive: e ? c : 0, emissiveIntensity: e });
    const order = net.edges.map((E, i) => ({ E, i })).filter(a => a.E.width >= 12 && a.E.deck === null && a.E.len > 60).sort((a, b) => (a.i * 7919) % 97 - (b.i * 7919) % 97);
    for (const { E, i } of order) {
      if (this.spots.length >= 6) break;
      const p = net.at(i, E.len / 2), off = E.width / 2 + 9, x = p.x + p.dz * off, z = p.z - p.dx * off;
      if (!canFit(x, z) || this.spots.some(s => Math.hypot(s.x - x, s.z - z) < 500)) continue;
      this.spots.push({ x, z });
      const o = new THREE.Group(), y = g.heightAt(x, z);
      const add = (geo: THREE.BufferGeometry, m: THREE.Material, px: number, py: number, pz: number) => { const k = new THREE.Mesh(geo, m); k.position.set(px, py, pz); k.castShadow = true; o.add(k); };
      add(new THREE.BoxGeometry(16, 0.3, 10), mat(0x8a8a86), 0, 0.15, 0);                       // the forecourt
      for (const [px, pz] of [[-6, -3.5], [6, -3.5], [-6, 3.5], [6, 3.5]]) add(new THREE.BoxGeometry(0.5, 6, 0.5), mat(0xf2efe6), px, 3, pz);
      add(new THREE.BoxGeometry(15, 1.2, 9), mat(0xd0342c, 0.15), 0, 6.4, 0);                    // the red canopy
      add(new THREE.BoxGeometry(15.2, 0.35, 9.2), mat(0xf2efe6, 0.3), 0, 5.7, 0);                // its white rim, lit
      for (const px of [-3, 3]) { add(new THREE.BoxGeometry(1.2, 2.2, 0.8), mat(0xf2efe6), px, 1.4, 0); add(new THREE.BoxGeometry(1.25, 0.5, 0.85), mat(0xd0342c), px, 2.3, 0); }
      add(new THREE.BoxGeometry(0.4, 9, 0.4), mat(0x6d6f73), 9, 4.5, 4.5);                       // the sign pole and sign
      add(new THREE.BoxGeometry(0.4, 2.4, 2.4), mat(0xf2c230, 0.4), 9, 9.5, 4.5);
      o.position.set(x, y, z); o.rotation.y = -Math.atan2(p.dz, p.dx);
      this.group.add(o);
    }
  }

  /** If the child is at a pump with a low lamp, refill it; returns the attendant's line. */
  update(dt: number, cx: number, cz: number, oil: number): string | null {
    this.cool -= dt;
    if (oil > 90 || this.cool > 0) return null;
    if (!this.spots.some(s => Math.hypot(s.x - cx, s.z - cz) < 10)) return null;
    this.cool = 6;
    return 'Pump uncle: "Full tank for the lamp, baba? Here, kerosene I keep for you only. Go carefully, no?"';
  }
}
