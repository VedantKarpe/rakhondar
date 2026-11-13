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
const PALETTE = [0xd8332b, 0x7cc8ee, 0xf7cc2e, 0xe8483a, 0x52b0e0, 0xf2b42a, 0x48b878, 0xf08aa8, 0xf6edd2, 0xc8302a, 0x88dcc8, 0xf8dc48];
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

/** Is the outline convex? (a hip roof only suits a convex one) */
function convex(p: [number, number][]): boolean {
  let sign = 0;
  for (let i = 0; i < p.length; i++) {
    const a = p[i], b = p[(i + 1) % p.length], c = p[(i + 2) % p.length], cr = (b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0]);
    if (Math.abs(cr) < 1e-6) continue; const s2 = Math.sign(cr); if (sign && s2 !== sign) return false; sign = s2;
  }
  return true;
}

/** A tiled roof for any outline (L, U and courtyard shapes too): a band of tiles sloping up from the eaves all round,
 *  `depth` metres deep, over the flat roof inside. */
function skirtRoof(p: [number, number][], y: number, depth: number, rise: number, color: THREE.Color): THREE.BufferGeometry {
  let area = 0; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; area += a[0] * b[1] - b[0] * a[1]; }
  const inw = area > 0 ? 1 : -1, P: number[] = [];
  for (let i = 0; i < p.length; i++) {
    const a = p[i], b = p[(i + 1) % p.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const nx = -(b[1] - a[1]) / L * inw, nz = (b[0] - a[0]) / L * inw;   // pointing into the building
    const d0 = -0.8, d1 = Math.min(depth, L * 0.5);
    const A0 = [a[0] + nx * d0, y, a[1] + nz * d0], B0 = [b[0] + nx * d0, y, b[1] + nz * d0], A1 = [a[0] + nx * d1, y + rise, a[1] + nz * d1], B1 = [b[0] + nx * d1, y + rise, b[1] + nz * d1];
    P.push(...A0, ...B0, ...B1, ...A0, ...B1, ...A1);
  }
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); geo.computeVertexNormals();
  const n = P.length / 3, c = new Float32Array(n * 3), uv = new Float32Array(n * 2), dark = color.clone().multiplyScalar(0.85), nr = geo.attributes.normal;
  for (let i = 0; i < n; i++) { const cc = nr.getX(i) + nr.getZ(i) > 0 ? dark : color; c[i * 3] = cc.r; c[i * 3 + 1] = cc.g; c[i * 3 + 2] = cc.b; uv[i * 2] = 0.01; uv[i * 2 + 1] = 0.6; }
  geo.setAttribute('color', new THREE.BufferAttribute(c, 3)); geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geo;
}

/** A plain shape painted one colour, with texture coordinates on a blank spot so no facade shows on it. */
function solid(geo: THREE.BufferGeometry, hex: number): THREE.BufferGeometry {
  const g = geo.index ? geo.toNonIndexed() : geo, n = g.attributes.position.count, c = new THREE.Color(hex), col = new Float32Array(n * 3), uv = new Float32Array(n * 2);
  for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; uv[i * 2] = 0.01; uv[i * 2 + 1] = 0.6; }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  if (!g.attributes.normal) g.computeVertexNormals();
  return g;
}

// the named buildings' styles (from tools/export_named.py): Portuguese-era public buildings, churches, temples, modern blocks
const PUB_COLS = [0xe8b84a, 0xf3ead2, 0xc4302b, 0x7cc8ee, 0xe6c86a, 0xd8d0b8];
const MODERN_COLS = [0xdcdcd6, 0xc8ccd0, 0xe8e2d2, 0xb8c4cc, 0xd6d0c4];

export function buildBuildings(d: PanjimData, g: Ground): { group: THREE.Group; list: Building[] } {
  const named = d.named ?? [];
  const geos: THREE.BufferGeometry[] = [], list: Building[] = [];
  const roofFlat = new THREE.Color(0xb8b2a4), roofTile = new THREE.Color(0xa8432a), white = new THREE.Color(0xfaf8f2), ochre = new THREE.Color(0xecd6a0);
  d.b.forEach(([f, lv, kind, area], idx) => {
    const p = pts(f).map(([x, y]) => [x * T, y * T] as [number, number]);
    if (p.length < 3) return;
    // is this one of the named buildings? (its recorded middle falls inside this outline)
    const mx = p.reduce((a, q) => a + q[0], 0) / p.length, mz = p.reduce((a, q) => a + q[1], 0) / p.length;
    const nm = named.find(n => inPoly(p, n[2] * T, n[3] * T) || Math.hypot(n[2] * T - mx, n[3] * T - mz) < 6);
    const style = nm?.[0] ?? '';
    const small = !kind && !style && area < 260;
    let storeys = !kind && area < 150 && !style ? 1 : lv;
    if (style === 'pub') storeys = Math.max(2, nm![4] || lv);
    if (style === 'modern') storeys = Math.max(3, nm![4] || lv);
    if (style === 'temple') storeys = Math.max(1, Math.min(2, lv));
    const h = storeys * STOREY * (kind === 1 || style === 'church' ? 1.6 : kind === 2 ? 1.2 : small ? 0.9 : 1);
    const base = Math.min(...p.map(([x, z]) => g.heightAt(x, z)));
    const shape = new THREE.Shape(p.map(([x, z]) => new THREE.Vector2(x, -z)));
    const geo = new THREE.ExtrudeGeometry(shape, { depth: h + 1.5, bevelEnabled: false });   // 1.5 m below the plot so slopes never show a gap
    geo.rotateX(-Math.PI / 2); geo.translate(0, base - 1.5, 0);
    wallUV(geo, base);
    const wall = style === 'pub' ? new THREE.Color(PUB_COLS[idx % PUB_COLS.length]) : style === 'modern' ? new THREE.Color(MODERN_COLS[idx % MODERN_COLS.length])
      : kind === 1 || style === 'church' ? white : kind === 2 || style === 'temple' ? ochre : new THREE.Color(PALETTE[(idx * 7 + p.length) % PALETTE.length]);
    // tiled hip roofs on houses, the old public buildings and the churches; flat on modern blocks and temples
    const tiled = style === 'pub' || style === 'church' || (!kind && !style && area < 1400);
    colorGeo(geo, wall, tiled ? roofTile : style === 'modern' ? new THREE.Color(0x9a9c9e) : kind === 1 ? white : roofFlat);
    geos.push(geo);
    if (tiled) {
      // a hip roof over simple shapes; a band of tiles all round the eaves over L, U and courtyard shapes
      const rise = style === 'church' ? Math.max(4, Math.sqrt(area) * 0.3) : Math.min(style === 'pub' ? 6 : 3.2, Math.sqrt(area) * 0.22);
      const r = convex(p) && p.length <= 8 ? hipRoof(p, base + h, rise, roofTile) : skirtRoof(p, base + h, 7, Math.min(rise, 3.5), roofTile);
      wallUV(r, 0); if (!convex(p) || p.length > 8) { const uv = r.attributes.uv as THREE.BufferAttribute; for (let i = 0; i < uv.count; i++) uv.setXY(i, 0.01, 0.6); }
      geos.push(r);
    }
    const cx = p.reduce((a, q) => a + q[0], 0) / p.length, cz = p.reduce((a, q) => a + q[1], 0) / p.length;
    if (style === 'church') {
      // a bell tower at the front end (the outline corner farthest from the middle), with a pyramid cap and a cross
      const far = p.reduce((a, q) => (Math.hypot(q[0] - cx, q[1] - cz) > Math.hypot(a[0] - cx, a[1] - cz) ? q : a));
      const tx = far[0] + (cx - far[0]) * 0.18, tz = far[1] + (cz - far[1]) * 0.18, th = h + 9;
      geos.push(solid(new THREE.BoxGeometry(5, th, 5).translate(tx, base + th / 2, tz), 0xfaf8f2));
      geos.push(solid(new THREE.BoxGeometry(5.6, 0.6, 5.6).translate(tx, base + th, tz), 0xe8e2d4));
      geos.push(solid(new THREE.ConeGeometry(3.6, 4.5, 4).rotateY(Math.PI / 4).translate(tx, base + th + 2.5, tz), 0xa8432a));
      geos.push(solid(new THREE.BoxGeometry(0.35, 2.6, 0.35).translate(tx, base + th + 6, tz), 0xf2efe6), solid(new THREE.BoxGeometry(1.4, 0.35, 0.35).translate(tx, base + th + 6.4, tz), 0xf2efe6));
    }
    if (style === 'temple') {
      // the shikhara over the sanctum: stepped tiers, a dome, a golden kalash
      let y = base + h, w = Math.min(10, Math.sqrt(area) * 0.45);
      for (let k = 0; k < 3; k++) { const th = 2.4; geos.push(solid(new THREE.BoxGeometry(w, th, w).translate(cx, y + th / 2, cz), k % 2 ? 0xf2efe6 : 0xe8a03a)); y += th; w *= 0.75; }
      geos.push(solid(new THREE.SphereGeometry(w * 0.7, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2).translate(cx, y, cz), 0xe8a03a));
      geos.push(solid(new THREE.ConeGeometry(0.6, 2.4, 8).translate(cx, y + w * 0.7 + 1.2, cz), 0xf2c230));
    }
    if (style === 'modern') {
      // a parapet and a water tank / lift room on the flat roof
      geos.push(solid(new THREE.BoxGeometry(5, 3, 4).translate(cx, base + h + 1.5, cz), 0xb8b8b4));
    }
    let x0 = 1e9, z0 = 1e9, x1 = -1e9, z1 = -1e9;
    for (const [x, z] of p) { x0 = Math.min(x0, x); z0 = Math.min(z0, z); x1 = Math.max(x1, x); z1 = Math.max(z1, z); }
    list.push({ p, bb: [x0, z0, x1, z1], base, top: base + h });
  });
  const merged = mergeGeometries(geos, false)!;
  for (const gg of geos) gg.dispose();
  const mesh = new THREE.Mesh(merged, facadeMaterial(facadeTexture(), windowsLit));
  mesh.castShadow = true; mesh.receiveShadow = true;
  const edges = new THREE.LineSegments(new THREE.EdgesGeometry(merged, 35), new THREE.LineBasicMaterial({ color: 0x1a120c, transparent: true, opacity: 0.8 }));
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
