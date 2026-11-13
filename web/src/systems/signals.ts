// Traffic signals at the main junctions (three or more streets meeting, one of them a main road). Each junction runs
// two phases: the approaches along its main axis get green while the cross streets wait, then the other way round,
// with amber between. A pole stands at the left of each approach with its three lamps facing the oncoming traffic.
import * as THREE from 'three';
import type { Network } from '../world/network';
import type { Ground } from '../world/data';

interface Junction { node: number; axis: number; offset: number }
const CYCLE = 24, GREEN = 10, AMBER = 2;   // seconds: green for one way, amber, then the same for the other way

export class Signals {
  readonly group = new THREE.Group();
  private byNode = new Map<number, Junction>();
  private lamps: { im: THREE.InstancedMesh; color: 'r' | 'a' | 'g'; who: { j: Junction; dir: number }[] }[] = [];
  private t = 0;

  constructor(private net: Network, g: Ground) {
    this.group.name = 'signals';
    const stops: THREE.Matrix4[] = [];
    const pole: THREE.Matrix4[] = [], heads: { j: Junction; dir: number; m: THREE.Matrix4 }[] = [];
    net.nodes.forEach((n, i) => {
      if (n.out.length < 3) return;
      const edges = n.out.map(e => net.edge(e));
      if (!edges.some(E => E.width >= 12) || edges.some(E => E.deck !== null)) return;
      // the junction's main axis: the direction of its widest street
      let best = n.out[0]; for (const e of n.out) if (net.edge(e).width > net.edge(best).width) best = e;
      const a0 = net.at(best, 0), j: Junction = { node: i, axis: Math.atan2(a0.dz, a0.dx), offset: (i * 7.3) % CYCLE };
      this.byNode.set(i, j);
      for (const e of n.out) {
        // a pole on the left of the traffic coming IN along this street, 9 m back from the junction
        const E = net.edge(e); if (E.len < 20) continue;
        const p = net.at(e, 9), off = (E.width * 1.5) / 2 + 1.2;
        const x = p.x - p.dz * off, z = p.z + p.dx * off, y = Math.max(0.6, g.heightAt(x, z));
        const face = Math.atan2(p.dz, p.dx);   // lamps face away from the junction, toward the oncoming cars
        const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -face), new THREE.Vector3(1, 1, 1));
        pole.push(m);
        // a white stop line across the incoming half of the road, just before the zebra crossing
        const sp = net.at(e, 13), hw = (E.width * 1.5) / 2, lx = sp.x - sp.dz * hw / 2, lz = sp.z + sp.dx * hw / 2;
        stops.push(new THREE.Matrix4().compose(new THREE.Vector3(lx, Math.max(0.6, g.heightAt(lx, lz)) + 0.29, lz), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -face), new THREE.Vector3(1, 1, hw - 0.6)));
        heads.push({ j, dir: Math.atan2(-p.dz, -p.dx), m });   // the direction the cars on this approach drive
      }
    });
    const poleGeo = new THREE.CylinderGeometry(0.12, 0.15, 5.2, 6).translate(0, 2.6, 0);
    const box = new THREE.BoxGeometry(0.5, 1.9, 0.6).translate(0.35, 5.4, 0);
    const P = new THREE.InstancedMesh(poleGeo, new THREE.MeshLambertMaterial({ color: 0x2a2a2e }), pole.length);
    const B = new THREE.InstancedMesh(box, new THREE.MeshLambertMaterial({ color: 0x1d1d22 }), pole.length);
    pole.forEach((m, i) => { P.setMatrixAt(i, m); B.setMatrixAt(i, m); });
    const S = new THREE.InstancedMesh(new THREE.BoxGeometry(0.5, 0.04, 1), new THREE.MeshLambertMaterial({ color: 0xf2efe6 }), stops.length);
    stops.forEach((m, i) => S.setMatrixAt(i, m));
    this.group.add(P, B, S);
    const lamp = (y: number, color: 'r' | 'a' | 'g') => {
      const im = new THREE.InstancedMesh(new THREE.SphereGeometry(0.2, 8, 6).translate(0.62, y, 0), new THREE.MeshBasicMaterial({ color: 0xffffff }), heads.length);
      heads.forEach((h, i) => im.setMatrixAt(i, h.m));
      this.lamps.push({ im, color, who: heads.map(h => ({ j: h.j, dir: h.dir })) });
      this.group.add(im);
    };
    lamp(6.0, 'r'); lamp(5.4, 'a'); lamp(4.8, 'g');
  }

  get count() { return this.byNode.size; }

  /** What the light shows for traffic heading `dir` (radians) into junction j: 'g', 'a' or 'r'. */
  private state(j: Junction, dir: number): 'g' | 'a' | 'r' {
    const along = Math.abs(Math.cos(dir - j.axis)) > Math.SQRT1_2;   // on the junction's main axis?
    const t = (this.t + j.offset) % CYCLE, half = CYCLE / 2, local = along ? t : (t + half) % CYCLE;
    return local < GREEN ? 'g' : local < GREEN + AMBER ? 'a' : 'r';
  }

  update(dt: number) {
    this.t += dt;
    const c = new THREE.Color(), off = new THREE.Color(0x2b2b2b), on = { r: new THREE.Color(0xff3020), a: new THREE.Color(0xffb020), g: new THREE.Color(0x30e060) };
    for (const L of this.lamps) {
      L.who.forEach((w, i) => { c.copy(this.state(w.j, w.dir) === L.color ? on[L.color] : off); L.im.setColorAt(i, c); });
      if (L.im.instanceColor) L.im.instanceColor.needsUpdate = true;
    }
  }

  /** Must a vehicle on edge `e`, `left` metres from its end, heading (dx, dz), stop for the light? */
  mustStop(e: number, left: number, dx: number, dz: number): boolean {
    const j = this.byNode.get(this.net.end(e)); if (!j) return false;
    if (left > 20 || left < 3) return false;          // too far to care, or already past the line
    return this.state(j, Math.atan2(dz, dx)) !== 'g';
  }
  /** Is the end of edge `e` a junction without lights (where traffic slows down to look)? */
  unsignalled(e: number): boolean { const n = this.net.end(e); return !this.byNode.has(n) && this.net.nodes[n].out.length >= 3; }
}
