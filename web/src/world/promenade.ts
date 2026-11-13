// The Mandovi promenade, as on Dayanand Bandodkar Marg: wherever a street runs beside the river, a wide red-brick
// walk between it and the water, a white balustrade along the edge (squat pillars, a row of balusters, a flat
// coping), stone benches facing the river, and the tricolour flying from the lamp posts.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Ground, T, pts, type PanjimData } from './data';
import type { BuildingIndex } from './buildings';

export function buildPromenade(d: PanjimData, g: Ground, bi: BuildingIndex, onStreet: (x: number, z: number) => boolean = () => false,
  land: (x: number, z: number) => number = (x, z) => g.landAt(x, z)): THREE.Group {
  void d; void pts;
  const group = new THREE.Group(); group.name = 'promenade';
  const walk: number[] = [], walkI: number[] = [];
  const posts: THREE.Matrix4[] = [], balus: THREE.Matrix4[] = [], copes: THREE.Matrix4[] = [], benches: THREE.Matrix4[] = [], flags: THREE.Matrix4[] = [];
  const q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), one = new THREE.Vector3(1, 1, 1);
  const mat = (x: number, y: number, z: number, ang: number, s = one) => new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), q.setFromAxisAngle(up, ang).clone(), s);

  // 1. trace the drawn shoreline (where the land fraction is one half) along the city's Mandovi front, marching squares
  const X0 = 55 * T, X1 = 136 * T, Z0 = 0, Z1 = 32 * T, S = 4, nx = Math.ceil((X1 - X0) / S), nz = Math.ceil((Z1 - Z0) / S);
  const v = new Float32Array((nx + 1) * (nz + 1));
  for (let j = 0; j <= nz; j++) for (let i = 0; i <= nx; i++) v[j * (nx + 1) + i] = land(X0 + i * S, Z0 + j * S) - 0.5;
  const segs: [number, number, number, number][] = [];
  const at = (i: number, j: number) => v[j * (nx + 1) + i];
  for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
    const c = [at(i, j), at(i + 1, j), at(i + 1, j + 1), at(i, j + 1)], P = [[i, j], [i + 1, j], [i + 1, j + 1], [i, j + 1]], cut: [number, number][] = [];
    for (let e = 0; e < 4; e++) {
      const a0 = c[e], a1 = c[(e + 1) % 4]; if ((a0 < 0) === (a1 < 0)) continue;
      const t = a0 / (a0 - a1), p0 = P[e], p1 = P[(e + 1) % 4];
      cut.push([X0 + (p0[0] + (p1[0] - p0[0]) * t) * S, Z0 + (p0[1] + (p1[1] - p0[1]) * t) * S]);
    }
    if (cut.length === 2) segs.push([cut[0][0], cut[0][1], cut[1][0], cut[1][1]]);
    if (cut.length === 4) { segs.push([cut[0][0], cut[0][1], cut[1][0], cut[1][1]]); segs.push([cut[2][0], cut[2][1], cut[3][0], cut[3][1]]); }
  }
  // 2. chain the pieces into lines
  const key = (x: number, z: number) => `${Math.round(x * 10)},${Math.round(z * 10)}`, ends = new Map<string, number[]>();
  segs.forEach((sg, i) => { for (const k of [key(sg[0], sg[1]), key(sg[2], sg[3])]) { const a2 = ends.get(k) ?? []; a2.push(i); ends.set(k, a2); } });
  const used = new Uint8Array(segs.length), lines: [number, number][][] = [];
  for (let i = 0; i < segs.length; i++) {
    if (used[i]) continue; used[i] = 1;
    const line: [number, number][] = [[segs[i][0], segs[i][1]], [segs[i][2], segs[i][3]]];
    for (const dir of [1, 0]) {
      for (;;) {
        const tip = dir ? line[line.length - 1] : line[0], nb = (ends.get(key(tip[0], tip[1])) ?? []).find(k => !used[k]);
        if (nb === undefined) break; used[nb] = 1;
        const sg = segs[nb], far: [number, number] = key(sg[0], sg[1]) === key(tip[0], tip[1]) ? [sg[2], sg[3]] : [sg[0], sg[1]];
        if (dir) line.push(far); else line.unshift(far);
      }
    }
    let L = 0; for (let k = 1; k < line.length; k++) L += Math.hypot(line[k][0] - line[k - 1][0], line[k][1] - line[k - 1][1]);
    if (L > 80) lines.push(line);
  }
  // 3. along each shoreline: smooth it, then lay the railing 1 m in from the water and the brick walk behind it
  let k = 0;
  for (const raw of lines) {
    let line = raw;
    for (let it = 0; it < 6; it++) line = line.map((p, i) => { const a2 = line[Math.max(0, i - 1)], b2 = line[Math.min(line.length - 1, i + 1)]; return [(a2[0] + p[0] * 2 + b2[0]) / 4, (a2[1] + p[1] * 2 + b2[1]) / 4] as [number, number]; });
    // resample every 3 m
    const rs: [number, number][] = [line[0]];
    for (let i = 1; i < line.length; i++) {
      let [ax, az] = rs[rs.length - 1]; const [bx, bz] = line[i];
      let dd = Math.hypot(bx - ax, bz - az);
      while (dd >= 3) { ax += (bx - ax) * 3 / dd; az += (bz - az) * 3 / dd; rs.push([ax, az]); dd = Math.hypot(bx - ax, bz - az); }
    }
    for (let i = 0; i + 1 < rs.length; i++, k++) {
      const [ax, az] = rs[i], [bx, bz] = rs[i + 1], L = Math.hypot(bx - ax, bz - az) || 1;
      let ix = -(bz - az) / L, iz = (bx - ax) / L;                                  // a side direction...
      if (land(ax + ix * 6, az + iz * 6) < land(ax - ix * 6, az - iz * 6)) { ix = -ix; iz = -iz; }   // ...pointing inland
      const rx = ax + ix * 1, rz = az + iz * 1, sx = bx + ix * 1, sz = bz + iz * 1;   // the railing, 1 m in from the edge
      const mx = (rx + sx) / 2, mz = (rz + sz) / 2;
      if (iz < 0.2) continue;                                                          // the city's bank only (land to the south)
      // keep clear of the street and its pavement (the road is drawn wider than its centre line), and of buildings
      if (onStreet(mx, mz) || onStreet(mx + ix * 2.5, mz + iz * 2.5) || onStreet(mx - ix * 2, mz - iz * 2) || bi.solid(mx, mz, 0.5)) continue;
      // level with the road surface (never under it), turned along the shore
      const y = Math.max(0.6, g.heightAt(mx + ix * 4, mz + iz * 4)) + 0.25, ang = -Math.atan2(bz - az, bx - ax);
      // the brick walk: from the railing 9 m inland (under the streets, which draw over it)
      const b0 = walk.length / 3, W = 9;
      walk.push(rx, y, rz, sx, y, sz, sx + ix * W, y, sz + iz * W, rx + ix * W, y, rz + iz * W);
      walkI.push(b0, b0 + 1, b0 + 2, b0, b0 + 2, b0 + 3);
      copes.push(mat(mx, y + 1.05, mz, ang, new THREE.Vector3(L / 3, 1, 1)));
      for (const o of [-1, 0, 1]) balus.push(mat(mx + (bx - ax) / L * o * 0.9, y + 0.55, mz + (bz - az) / L * o * 0.9, ang));
      if (k % 3 === 0) posts.push(mat(rx, y + 0.6, rz, ang));
      if (k % 9 === 4 && !onStreet(mx + ix * 2.5, mz + iz * 2.5)) benches.push(mat(mx + ix * 2.2, y + 0.25, mz + iz * 2.2, ang));
      if (k % 8 === 0 && !onStreet(mx + ix * 1.4, mz + iz * 1.4)) flags.push(mat(mx + ix * 1.4, y, mz + iz * 1.4, ang));
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
