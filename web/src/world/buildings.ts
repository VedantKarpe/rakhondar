// Every building from its real outline: walls extruded to its storeys on a level plot, a flat terrace or a hipped
// Mangalore-tile roof, all merged into one mesh (one draw call) with ink outlines, plus the lookup that makes them solid.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Ground, T, pts, inPoly, type PanjimData } from './data';
import { BAY, facadeTexture, facadeMaterial } from './facade';

/** How lit the windows are (0 by day, 1 at night); the clock sets it. */
export const windowsLit = { value: 0 };

/** Texture coordinates: walls run along the wall in bays and up in storeys from `base`; roofs get a plain spot. */
function wallUV(geo: THREE.BufferGeometry, base: number) {
  const p = geo.attributes.position, n = geo.attributes.normal, uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const nx = n.getX(i), ny = n.getY(i), nz = n.getZ(i);
    if (Math.abs(ny) > 0.5) { uv[i * 2] = 0.01; uv[i * 2 + 1] = 0.6; continue; }
    uv[i * 2] = (p.getX(i) * -nz + p.getZ(i) * nx) / BAY; uv[i * 2 + 1] = (p.getY(i) - base) / BAY;
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
}

// Goan house colours: ochre, indigo blue, pink, sea green, Goan red, lime yellow, sky blue, cream (a touch weathered)
const PALETTE = [0xc4302b, 0x8fd0e6, 0xf0c63e, 0xd94a3a, 0x6fb8d8, 0xe8b23a, 0x5fa77a, 0xe58a9a, 0xf3e9cf, 0xb83a32, 0x9bd6c8, 0xf2d35a];
const STOREY = 3.4;           // metres a storey
export interface Building { p: [number, number][]; bb: [number, number, number, number]; base: number; top: number }

function colorGeo(geo: THREE.BufferGeometry, wall: THREE.Color, roof: THREE.Color) {
  const n = geo.attributes.normal, c = new Float32Array(n.count * 3), side = wall.clone().multiplyScalar(0.8);
  for (let i = 0; i < n.count; i++) {
    const ny = n.getY(i), cc = ny > 0.5 ? roof : Math.abs(n.getX(i)) > Math.abs(n.getZ(i)) ? side : wall;
    c[i * 3] = cc.r; c[i * 3 + 1] = cc.g; c[i * 3 + 2] = cc.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(c, 3));
}

/** A hipped roof over outline `p` (world XZ) at height y: its slopes rise to the outline drawn in toward the middle. */
function hipRoof(p: [number, number][], y: number, rise: number, color: THREE.Color): THREE.BufferGeometry {
  const n = p.length, cx = p.reduce((s, q) => s + q[0], 0) / n, cz = p.reduce((s, q) => s + q[1], 0) / n;
  const eave = p.map(([x, z]) => [cx + (x - cx) * 1.12, cz + (z - cz) * 1.12]);
  const ridge = p.map(([x, z]) => [cx + (x - cx) * 0.35, cz + (z - cz) * 0.35]);
  const P: number[] = [];
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    P.push(eave[i][0], y, eave[i][1], eave[j][0], y, eave[j][1], ridge[j][0], y + rise, ridge[j][1]);
    P.push(eave[i][0], y, eave[i][1], ridge[j][0], y + rise, ridge[j][1], ridge[i][0], y + rise, ridge[i][1]);
  }
  const tri = THREE.ShapeUtils.triangulateShape(ridge.map(([x, z]) => new THREE.Vector2(x, z)), []);
  for (const [a, b, c] of tri) P.push(ridge[a][0], y + rise, ridge[a][1], ridge[c][0], y + rise, ridge[c][1], ridge[b][0], y + rise, ridge[b][1]);
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  // keep every face pointing outward/up whichever way round the outline was drawn
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i += 3) {
    const ax = pos.getX(i), ay = pos.getY(i), az = pos.getZ(i), bx = pos.getX(i + 1) - ax, by = pos.getY(i + 1) - ay, bz = pos.getZ(i + 1) - az, cx2 = pos.getX(i + 2) - ax, cy = pos.getY(i + 2) - ay, cz2 = pos.getZ(i + 2) - az;
    if (bz * cx2 - bx * cz2 < 0) { const tx = pos.getX(i + 1), ty = pos.getY(i + 1), tz = pos.getZ(i + 1); pos.setXYZ(i + 1, pos.getX(i + 2), pos.getY(i + 2), pos.getZ(i + 2)); pos.setXYZ(i + 2, tx, ty, tz); }
    void by; void cy;
  }
  geo.computeVertexNormals();
  const c = new Float32Array(pos.count * 3), dark = color.clone().multiplyScalar(0.82);
  const nrm = geo.attributes.normal;
  for (let i = 0; i < pos.count; i++) { const cc = nrm.getX(i) + nrm.getZ(i) > 0 ? dark : color; c[i * 3] = cc.r; c[i * 3 + 1] = cc.g; c[i * 3 + 2] = cc.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(c, 3));
  return geo;
}

export function buildBuildings(d: PanjimData, g: Ground): { group: THREE.Group; list: Building[] } {
  const geos: THREE.BufferGeometry[] = [], list: Building[] = [];
  const roofFlat = new THREE.Color(0xb8b2a4), roofTile = new THREE.Color(0x7c3a26), white = new THREE.Color(0xfaf8f2), ochre = new THREE.Color(0xecd6a0);
  d.b.forEach(([f, lv, kind, area], idx) => {
    const p = pts(f).map(([x, y]) => [x * T, y * T] as [number, number]);
    if (p.length < 3) return;
    const small = !kind && area < 260, storeys = !kind && area < 150 ? 1 : lv;
    const h = storeys * STOREY * (kind === 1 ? 1.6 : kind === 2 ? 1.2 : small ? 0.9 : 1);
    const base = Math.min(...p.map(([x, z]) => g.heightAt(x, z)));
    const shape = new THREE.Shape(p.map(([x, z]) => new THREE.Vector2(x, -z)));
    const geo = new THREE.ExtrudeGeometry(shape, { depth: h + 1.5, bevelEnabled: false });   // 1.5 m below the plot so slopes never show a gap
    geo.rotateX(-Math.PI / 2); geo.translate(0, base - 1.5, 0);
    wallUV(geo, base);
    const wall = kind === 1 ? white : kind === 2 ? ochre : new THREE.Color(PALETTE[(idx * 7 + p.length) % PALETTE.length]);
    const tiled = !kind && area < 1400 && p.length <= 8;
    colorGeo(geo, wall, kind === 1 ? white : tiled ? roofTile : roofFlat);
    geos.push(geo);
    if (tiled) { const r = hipRoof(p, base + h, Math.min(3.2, Math.sqrt(area) * 0.22), roofTile); wallUV(r, 0); geos.push(r); }
    let x0 = 1e9, z0 = 1e9, x1 = -1e9, z1 = -1e9;
    for (const [x, z] of p) { x0 = Math.min(x0, x); z0 = Math.min(z0, z); x1 = Math.max(x1, x); z1 = Math.max(z1, z); }
    list.push({ p, bb: [x0, z0, x1, z1], base, top: base + h });
  });
  const merged = mergeGeometries(geos, false)!;
  for (const gg of geos) gg.dispose();
  const mesh = new THREE.Mesh(merged, facadeMaterial(facadeTexture(), windowsLit));
  mesh.castShadow = true; mesh.receiveShadow = true;
  const edges = new THREE.LineSegments(new THREE.EdgesGeometry(merged, 35), new THREE.LineBasicMaterial({ color: 0x1a1410, transparent: true, opacity: 0.35 }));
  const group = new THREE.Group(); group.name = 'buildings'; group.add(mesh, edges);
  return { group, list };
}

/** A grid over the buildings, so walking into one is a quick check. */
export class BuildingIndex {
  private cells = new Map<number, Building[]>();
  private static C = 30;
  constructor(list: Building[]) {
    const C = BuildingIndex.C;
    for (const b of list)
      for (let x = Math.floor(b.bb[0] / C); x <= Math.floor(b.bb[2] / C); x++)
        for (let z = Math.floor(b.bb[1] / C); z <= Math.floor(b.bb[3] / C); z++) { const k = x * 65536 + z; let a = this.cells.get(k); if (!a) this.cells.set(k, a = []); a.push(b); }
  }
  /** Is (X, Z) inside a building, or within r metres of its wall? */
  solid(X: number, Z: number, r: number): boolean {
    const a = this.cells.get(Math.floor(X / BuildingIndex.C) * 65536 + Math.floor(Z / BuildingIndex.C));
    if (!a) return false;
    for (const b of a) {
      if (X < b.bb[0] - r || X > b.bb[2] + r || Z < b.bb[1] - r || Z > b.bb[3] + r) continue;
      if (inPoly(b.p, X, Z)) return true;
      const p = b.p;
      for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
        const ex = p[i][0] - p[j][0], ez = p[i][1] - p[j][1], L2 = ex * ex + ez * ez || 1e-9, t = Math.max(0, Math.min(1, ((X - p[j][0]) * ex + (Z - p[j][1]) * ez) / L2));
        if (Math.hypot(X - p[j][0] - ex * t, Z - p[j][1] - ez * t) < r) return true;
      }
    }
    return false;
  }
}
