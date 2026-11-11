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
  for (const [f, w, flags0] of d.r) {
    if (flags0 & 1) continue;
    const line = pts(f).map(([x, y]) => [x * T, y * T]);
    for (let i = 1; i < line.length; i++) {
      const [ax, az] = line[i - 1], [bx, bz] = line[i], len = Math.hypot(bx - ax, bz - az);
      if (len < 2) continue;
      const tx = (bx - ax) / len, tz = (bz - az) / len, nx = -tz, nz = tx, half = w * 0.75 + 1.5;
      for (let s = 0; s < len; s += 3) {
        const cx = ax + tx * s, cz = az + tz * s;
        // which side is the river, and how far: march out from the road's edge
        for (const sd of [-1, 1]) {
          let edge = -1;
          for (let k = 2; k <= 30; k += 1) if (g.isWet(cx + nx * sd * (half + k), cz + nz * sd * (half + k))) { edge = k; break; }
          if (edge < 5) continue;                                  // no water within 30 m, or too narrow a strip
          const wx = cx + nx * sd * half, wz = cz + nz * sd * half, ex = cx + nx * sd * (half + edge - 1.5), ez = cz + nz * sd * (half + edge - 1.5);
          if (bi.solid((wx + ex) / 2, (wz + ez) / 2, 1)) continue;
          const y = Math.max(0.6, g.heightAt(wx, wz)) + 0.3, b = walk.length / 3;
          // a quad of brick walk 3 m long, from the road's edge to the balustrade
          const l2x = tx * 1.6, l2z = tz * 1.6;
          walk.push(wx - l2x, y, wz - l2z, wx + l2x, y, wz + l2z, ex + l2x, y, ez + l2z, ex - l2x, y, ez - l2z);
          walkI.push(b, b + 1, b + 2, b, b + 2, b + 3);
          const ang = -Math.atan2(tz, tx), seg = Math.round(s / 3);
          copes.push(mat(ex, y + 1.05, ez, ang));
          for (const o of [-1, 0, 1]) balus.push(mat(ex + tx * o * 0.9, y + 0.55, ez + tz * o * 0.9, ang));
          if (seg % 3 === 0) posts.push(mat(ex, y + 0.6, ez, ang));
          if (seg % 9 === 4) benches.push(mat(ex - nx * sd * 2.2, y + 0.25, ez - nz * sd * 2.2, ang));
          if (seg % 10 === 0 && flagN++ < 400) flags.push(mat(wx + nx * sd * 1.2, y, wz + nz * sd * 1.2, ang));
        }
      }
    }
  }
  const brick = new THREE.BufferGeometry(); brick.setAttribute('position', new THREE.Float32BufferAttribute(walk, 3)); brick.setIndex(walkI); brick.computeVertexNormals();
  const bm = new THREE.Mesh(brick, new THREE.MeshLambertMaterial({ color: 0xa65a46, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2 })); bm.receiveShadow = true; group.add(bm);
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
