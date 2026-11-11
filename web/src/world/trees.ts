// Trees where the map has woods, and low dark mangroves on the creek banks: one instanced mesh each (one draw call for
// thousands of trees).
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Ground, T, type PanjimData } from './data';
import type { BuildingIndex } from './buildings';
import type { StreetIndex } from './roads';

function tinted(geo: THREE.BufferGeometry, hex: number): THREE.BufferGeometry {
  const c = new THREE.Color(hex), n = geo.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(a, 3)); geo.deleteAttribute('uv'); return geo;
}

function treeGeo(trunkH: number, crownR: number, crown: number): THREE.BufferGeometry {
  const trunk = tinted(new THREE.CylinderGeometry(0.35, 0.5, trunkH, 6).translate(0, trunkH / 2, 0), 0x6b4a2e);
  const top = tinted(new THREE.IcosahedronGeometry(crownR, 0).translate(0, trunkH + crownR * 0.6, 0), crown);
  return mergeGeometries([trunk.toNonIndexed(), top.toNonIndexed()])!;
}

/** A coconut palm: a slender trunk leaning and curving up, a crown of long drooping fronds, a few coconuts. */
function palmGeo(): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  let x = 0, y = 0;
  for (let i = 0; i < 6; i++) {          // the trunk in six pieces, each leaning a little more
    const lean = 0.05 + i * 0.045, h = 2.2;
    const seg = new THREE.CylinderGeometry(0.28 - i * 0.02, 0.32 - i * 0.02, h, 6).rotateZ(-lean).translate(x + Math.sin(lean) * h / 2, y + Math.cos(lean) * h / 2, 0);
    parts.push(tinted(seg, i % 2 ? 0x8a7458 : 0x7a6448).toNonIndexed());
    x += Math.sin(lean) * h; y += Math.cos(lean) * h;
  }
  for (let k = 0; k < 9; k++) {           // fronds: long thin leaves arching out and down
    const a = (k / 9) * Math.PI * 2, L = 4.6;
    const fr = new THREE.BoxGeometry(L, 0.06, 0.9).translate(L / 2, 0, 0).rotateZ(-0.35 - (k % 3) * 0.12).rotateY(a).translate(x, y, 0);
    parts.push(tinted(fr, k % 2 ? 0x4f8a3a : 0x3f7a30).toNonIndexed());
  }
  for (let k = 0; k < 3; k++) parts.push(tinted(new THREE.SphereGeometry(0.3, 5, 4).translate(x + Math.cos(k * 2.1) * 0.35, y - 0.4, Math.sin(k * 2.1) * 0.35), 0x6b5a2a).toNonIndexed());
  return mergeGeometries(parts)!;
}

/** A flowering bush: bougainvillea pink or hibiscus red over green. */
function bushGeo(): THREE.BufferGeometry {
  const g1 = tinted(new THREE.IcosahedronGeometry(1.3, 0).scale(1.2, 0.8, 1.2).translate(0, 0.9, 0), 0x3f7030).toNonIndexed();
  const g2 = tinted(new THREE.IcosahedronGeometry(0.8, 0).translate(0.5, 1.4, 0.3), 0xd8407a).toNonIndexed();
  return mergeGeometries([g1, g2])!;
}

export function buildTrees(d: PanjimData, g: Ground, bi: BuildingIndex, si: StreetIndex): THREE.Group {
  const group = new THREE.Group(); group.name = 'trees';
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const spots = (letter: string, per: number) => {
    const out: [number, number][] = [];
    for (let y = 0; y < d.H; y++) for (let x = 0; x < d.W; x++) {
      if (d.rows[y][x] !== letter) continue;
      for (let k = 0; k < Math.floor(per + rnd()); k++) {
        const X = (x + rnd()) * T, Z = (y + rnd()) * T;
        if (!bi.solid(X, Z, 3) && !si.at(X, Z)) out.push([X, Z]);
      }
    }
    return out;
  };
  const place = (geo: THREE.BufferGeometry, list: [number, number][], scale: [number, number]) => {
    const mesh = new THREE.InstancedMesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }), list.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
    list.forEach(([X, Z], i) => {
      const k = scale[0] + rnd() * (scale[1] - scale[0]);
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rnd() * Math.PI * 2);
      m.compose(p.set(X, g.heightAt(X, Z), Z), q, s.set(k, k, k)); mesh.setMatrixAt(i, m);
    });
    mesh.castShadow = true; mesh.receiveShadow = true;
    group.add(mesh);
  };
  place(treeGeo(3.5, 3.4, 0x467a3a), spots('F', 2), [0.8, 1.4]);
  place(treeGeo(1.2, 2.4, 0x2a4a30), spots('M', 1), [0.7, 1.1]);
  // coconut palms over the open ground and along the sand, flowering bushes in the gardens
  place(palmGeo(), [...spots('G', 0.35), ...spots('S', 1), ...spots('B', 1)], [0.9, 1.25]);
  place(bushGeo(), spots('G', 0.5), [0.8, 1.2]);
  return group;
}
