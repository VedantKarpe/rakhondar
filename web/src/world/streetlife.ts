// The things that make a street look lived in: cars and scooters parked along the kerb, zebra crossings at the
// junctions, and compound walls of red laterite along the plots. All instanced or merged, so they cost a few draws.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { Network } from './network';
import type { Ground } from './data';

const CAR_COLS = [0xd8d4c8, 0xb02a2a, 0x2a4c8a, 0x1d1d22, 0x8c8c90, 0xe8e2d0, 0x3b6b45, 0xf2efe6, 0x6a2a2a];

function painted(geo: THREE.BufferGeometry, hex: number): THREE.BufferGeometry {
  const g = geo.toNonIndexed(), c = new THREE.Color(hex), a = new Float32Array(g.attributes.position.count * 3);
  for (let i = 0; i < a.length; i += 3) { a[i] = c.r; a[i + 1] = c.g; a[i + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3)); g.deleteAttribute('uv'); return g;
}

export function buildStreetLife(net: Network, g: Ground, free: (x: number, z: number) => boolean): THREE.Group {
  const group = new THREE.Group(); group.name = 'street life';
  let seed = 77; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const cars: THREE.BufferGeometry[] = [], zebra: THREE.BufferGeometry[] = [];
  const at = (x: number, z: number) => g.heightAt(x, z);
  for (let e = 0; e < net.edges.length; e++) {
    const E = net.edges[e];
    if (E.deck !== null) continue;
    // parked cars along the kerb, on whichever side, leaving the junctions clear
    if (E.width >= 7) for (let s = 14; s < E.len - 14; s += 9 + rnd() * 30) {
      if (rnd() < 0.45) continue;
      const p = net.at(e, s), sd = rnd() < 0.5 ? 1 : -1, off = (E.width * 1.5) / 2 - 1.4;
      const x = p.x + p.dz * off * sd, z = p.z - p.dx * off * sd;
      const c = CAR_COLS[Math.floor(rnd() * CAR_COLS.length)], ang = -Math.atan2(p.dz, p.dx), y = Math.max(0.6, at(x, z)) + 0.2;
      const body = new THREE.BoxGeometry(4.4, 1.1, 1.9).translate(0, 0.75, 0), cab = new THREE.BoxGeometry(2.3, 0.75, 1.75).translate(-0.3, 1.65, 0), glass = new THREE.BoxGeometry(2.35, 0.5, 1.8).translate(-0.3, 1.65, 0);
      const parts = [painted(body, c), painted(cab, c), painted(glass, 0x1b2430)];
      for (const [wx, wz] of [[1.4, 0.95], [1.4, -0.95], [-1.4, 0.95], [-1.4, -0.95]]) parts.push(painted(new THREE.CylinderGeometry(0.35, 0.35, 0.3, 8).rotateX(Math.PI / 2).translate(wx, 0.35, wz), 0x151515));
      const car = mergeGeometries(parts)!; car.scale(1.5, 1.5, 1.5); car.rotateY(ang); car.translate(x, y, z); cars.push(car);
    }
  }
  // zebra crossings where three or more streets meet, a few metres into each street
  for (const n of net.nodes) {
    if (n.out.length < 3) continue;
    for (const e of n.out) {
      const E = net.edge(e); if (E.deck !== null || E.len < 20 || E.width < 7) continue;
      const p = net.at(e, 9), w = E.width * 1.5 - 1, ang = -Math.atan2(p.dz, p.dx), y = Math.max(0.6, at(p.x, p.z)) + 0.26;
      for (let k = -w / 2 + 0.6; k < w / 2; k += 1.4) {
        const st = new THREE.BoxGeometry(2.6, 0.04, 0.7).translate(0, 0, k);
        st.rotateY(ang); st.translate(p.x, y, p.z); zebra.push(painted(st, 0xf2efe6));
      }
    }
  }
  const lam = (vc: boolean, color = 0xffffff, extra: THREE.MeshLambertMaterialParameters = {}) => new THREE.MeshLambertMaterial({ vertexColors: vc, color, ...extra });
  if (cars.length) { const m = new THREE.Mesh(mergeGeometries(cars)!, lam(true)); m.castShadow = true; m.receiveShadow = true; group.add(m); }
  if (zebra.length) { const m = new THREE.Mesh(mergeGeometries(zebra)!, lam(true, 0xffffff, { polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -8 })); m.receiveShadow = true; group.add(m); }
  void free;
  return group;
}
