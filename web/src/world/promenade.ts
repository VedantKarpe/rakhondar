// The Mandovi promenade, as on Dayanand Bandodkar Marg: wherever a street runs beside the river, a wide red-brick
// walk between it and the water, a white balustrade along the edge (squat pillars, a row of balusters, a flat
// coping), stone benches facing the river, and the tricolour flying from the lamp posts.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Ground, T, pts, type PanjimData } from './data';
import type { BuildingIndex } from './buildings';

export function buildPromenade(d: PanjimData, g: Ground, bi: BuildingIndex): THREE.Group {
  const group = new THREE.Group(); group.name = 'promenade';
  const walk: number[] = [], walkI: number[] = [];
  const posts: THREE.Matrix4[] = [], balus: THREE.Matrix4[] = [], copes: THREE.Matrix4[] = [], benches: THREE.Matrix4[] = [], flags: THREE.Matrix4[] = [];
  const q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), one = new THREE.Vector3(1, 1, 1);
  const mat = (x: number, y: number, z: number, ang: number, s = one) => new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), q.setFromAxisAngle(up, ang).clone(), s);
  let flagN = 0;
  // where two carriageways run side by side both would build a railing: keep only the first one in each 4 m spot
  const used = new Map<number, number>(), key = (x: number, z: number) => Math.floor(x / 4) * 100000 + Math.floor(z / 4);
  let owner = 0;
  const claim = (x: number, z: number) => {
    for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) { const o = used.get(key(x + a * 4, z + b * 4)); if (o !== undefined && o !== owner) return false; }
    used.set(key(x, z), owner); return true;
  };
  let streetN = 0;
  for (const [f, w, flags0] of d.r) {
    streetN++;
    if (flags0 & 1) continue;
    const line = pts(f).map(([x, y]) => [x * T, y * T]);
    for (let i = 1; i < line.length; i++) {
      const [ax, az] = line[i - 1], [bx, bz] = line[i], len = Math.hypot(bx - ax, bz - az);
      if (len < 2) continue;
      const tx = (bx - ax) / len, tz = (bz - az) / len, nx = -tz, nz = tx, half = w * 0.75 + 1.5;
      // only the Mandovi waterfront: city stretch, river to the north of the street (the map's open water, not creeks)
      const mx = (ax + bx) / 2 / T, mz = (az + bz) / 2 / T;
      if (mx < 55 || mx > 135 || mz > 32) continue;
      const river = (X: number, Z: number) => { const tx = Math.floor(X / T), ty = Math.floor(Z / T); return ty < 0 || (d.rows[ty]?.[tx] === 'W'); };
      for (const sd of [-1, 1]) {
        owner = streetN * 2 + (sd > 0 ? 1 : 0);   // one railing per street and side, across all its pieces
        // how far the drawn shore is from the road's edge, every 3 m (the same smooth shoreline the ground is drawn with)
        const n = Math.max(2, Math.ceil(len / 3) + 1), dist: (number | null)[] = [];
        for (let k = 0; k < n; k++) {
          const s0 = Math.min(len, k * 3), cx = ax + tx * s0, cz = az + tz * s0;
          let hit: number | null = null;
          for (let e = 1; e <= 32; e += 0.5) if (g.landAt(cx + nx * sd * (half + e), cz + nz * sd * (half + e)) < 0.5 && river(cx + nx * sd * (half + e), cz + nz * sd * (half + e))) { hit = e; break; }
          dist.push(hit !== null && hit >= 4 ? hit : null);
        }
        if (dist.filter(x => x !== null).length < n * 0.6) continue;
        // smooth the distances a little so the railing runs in an even line
        const sm = dist.map((v, k) => { if (v === null) return null; let t = 0, c = 0; for (let q = k - 1; q <= k + 1; q++) { const w = dist[q]; if (w !== undefined && w !== null) { t += w; c++; } } return t / c - 1.2; });
        const P = (k: number, off: number): [number, number] => { const s0 = Math.min(len, k * 3); return [ax + tx * s0 + nx * sd * (half + off), az + tz * s0 + nz * sd * (half + off)]; };
        for (let k = 0; k < n; k++) {
          const e = sm[k]; if (e === null) continue;
          const [ex, ez] = P(k, e), [wx, wz] = P(k, 0);
          const y = Math.max(0.6, g.heightAt(wx, wz)) + 0.1;
          // the brick strip to the next sample (kept under the road surface, so streets always draw on top)
          const e2 = sm[k + 1];
          if (e2 !== null && e2 !== undefined && Math.abs(e2 - e) < 4) {
            const [ex2, ez2] = P(k + 1, e2), [wx2, wz2] = P(k + 1, 0), b = walk.length / 3;
            walk.push(wx, y, wz, wx2, y, wz2, ex2, y, ez2, ex, y, ez);
            walkI.push(b, b + 1, b + 2, b, b + 2, b + 3);
            const ang = -Math.atan2(ez2 - ez, ex2 - ex), L = Math.hypot(ex2 - ex, ez2 - ez), mx2 = (ex + ex2) / 2, mz2 = (ez + ez2) / 2;
            if (bi.solid((wx + ex) / 2, (wz + ez) / 2, 1) || !claim(mx2, mz2)) continue;
            copes.push(mat(mx2, y + 1.05, mz2, ang, new THREE.Vector3(L / 3, 1, 1)));
            for (const o of [-1, 0, 1]) balus.push(mat(mx2 + (ex2 - ex) / L * o * 0.9, y + 0.55, mz2 + (ez2 - ez) / L * o * 0.9, ang));
            if (k % 3 === 0) posts.push(mat(ex, y + 0.6, ez, ang));
            if (k % 9 === 4) benches.push(mat(mx2 - nx * sd * 2.2, y + 0.25, mz2 - nz * sd * 2.2, ang));
            if (k % 8 === 0 && flagN++ < 300) flags.push(mat(ex - nx * sd * 1.2, y, ez - nz * sd * 1.2, ang));
          }
        }
      }
    }
  }
  const brick = new THREE.BufferGeometry(); brick.setAttribute('position', new THREE.Float32BufferAttribute(walk, 3)); brick.setIndex(walkI); brick.computeVertexNormals();
  const bm = new THREE.Mesh(brick, new THREE.MeshLambertMaterial({ color: 0xa65a46, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 0, polygonOffsetUnits: 1 })); bm.receiveShadow = true; bm.renderOrder = 1; (bm.material as THREE.Material).depthWrite = false; group.add(bm);   // drawn before the streets' asphalt, never over it
  const white = new THREE.MeshLambertMaterial({ color: 0xf2efe6 }), stone = new THREE.MeshLambertMaterial({ color: 0xb8b2a2 });
  const inst = (geo: THREE.BufferGeometry, m: THREE.Material, list: THREE.Matrix4[]) => {
    if (!list.length) return;
    const im = new THREE.InstancedMesh(geo, m, list.length); list.forEach((x, i) => im.setMatrixAt(i, x)); im.castShadow = true; im.receiveShadow = true; group.add(im);
  };
  inst(new THREE.BoxGeometry(3.1, 0.18, 0.7), white, copes);                                                   // the coping rail
  inst(mergeGeometries([new THREE.CylinderGeometry(0.12, 0.2, 0.9, 6), new THREE.SphereGeometry(0.16, 6, 4).translate(0, 0.3, 0)])!, white, balus);   // balusters
  inst(new THREE.BoxGeometry(0.75, 1.3, 0.75), white, posts);                                                  // pillars
  inst(mergeGeometries([new THREE.BoxGeometry(2.4, 0.25, 0.8).translate(0, 0.35, 0), new THREE.BoxGeometry(0.4, 0.45, 0.6).translate(-0.9, 0, 0), new THREE.BoxGeometry(0.4, 0.45, 0.6).translate(0.9, 0, 0)])!, stone, benches);
  // the tricolour: a thin pole and a flag in three bands
  const flagGeo = mergeGeometries([
    paint(new THREE.CylinderGeometry(0.06, 0.08, 9, 5).translate(0, 4.5, 0), 0x2a2a2e),
    paint(new THREE.BoxGeometry(0.04, 0.5, 2.2).translate(0, 8.4, 1.15), 0xff9933),
    paint(new THREE.BoxGeometry(0.04, 0.5, 2.2).translate(0, 7.9, 1.15), 0xffffff),
    paint(new THREE.BoxGeometry(0.04, 0.5, 2.2).translate(0, 7.4, 1.15), 0x138808),
  ])!;
  inst(flagGeo, new THREE.MeshLambertMaterial({ vertexColors: true }), flags);
  return group;
}

function paint(geo: THREE.BufferGeometry, hex: number): THREE.BufferGeometry {
  const g = geo.toNonIndexed(), c = new THREE.Color(hex), a = new Float32Array(g.attributes.position.count * 3);
  for (let i = 0; i < a.length; i += 3) { a[i] = c.r; a[i + 1] = c.g; a[i + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3)); g.deleteAttribute('uv'); return g;
}
