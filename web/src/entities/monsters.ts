// The night's demons: dark shapes with ember eyes that creep toward the child out of the dark. They will not enter
// the light of a street lamp, and they shy from the clay lamp while it has oil. Hold Space to banish one close by
// (it costs lamp oil); press R to call Rakhondar, the guardian spirit, who drives every demon near you away.
import * as THREE from 'three';
import type { Ground } from '../world/data';
import type { Movement } from '../systems/movement';

interface Demon { obj: THREE.Group; x: number; z: number; fade: number; banish: number; t: number }

export class Monsters {
  readonly group = new THREE.Group();
  list: Demon[] = [];
  private spirit: THREE.Group;
  spiritT = 0;
  private seed = 1337;
  private rnd = () => (this.seed = (this.seed * 16807) % 2147483647) / 2147483647;

  constructor(private g: Ground, private move: Movement) {
    this.group.name = 'monsters';
    // Rakhondar: a tall pale-green glowing figure with a staff
    this.spirit = new THREE.Group();
    const glow = new THREE.MeshBasicMaterial({ color: 0x9fe8d6, transparent: true, opacity: 0.75 });
    const add = (geo: THREE.BufferGeometry, y: number, x = 0) => { const m = new THREE.Mesh(geo, glow); m.position.set(x, y, 0); this.spirit.add(m); };
    add(new THREE.ConeGeometry(1.6, 6, 10), 3); add(new THREE.SphereGeometry(0.8, 12, 10), 6.6); add(new THREE.CylinderGeometry(0.12, 0.12, 8, 6), 4, 1.8);
    const halo = new THREE.PointLight(0x9fe8d6, 0, 60, 1.2); halo.position.y = 5; this.spirit.add(halo);
    this.spirit.visible = false; this.group.add(this.spirit);
  }

  private make(cx: number, cz: number): Demon | null {
    for (let k = 0; k < 10; k++) {
      const a = this.rnd() * Math.PI * 2, r = 70 + this.rnd() * 60, x = cx + Math.cos(a) * r, z = cz + Math.sin(a) * r;
      if (!this.move.free(x, z)) continue;
      const obj = new THREE.Group();
      const body = new THREE.Mesh(new THREE.ConeGeometry(1.4, 4.5, 7), new THREE.MeshBasicMaterial({ color: 0x07060c, transparent: true, opacity: 0.85 }));
      body.position.y = 2.25; obj.add(body);
      const eye = new THREE.MeshBasicMaterial({ color: 0xff4a1a });
      for (const s of [-0.35, 0.35]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.16, 6, 4), eye); e.position.set(0.9, 3.4, s); obj.add(e); }
      this.group.add(obj);
      return { obj, x, z, fade: 0, banish: 0, t: this.rnd() * 9 };
    }
    return null;
  }

  /** Move the demons; returns how much courage they took this frame. */
  update(dt: number, cx: number, cz: number, night: boolean, lampLit: boolean, litAt: (x: number, z: number) => boolean): number {
    let hurt = 0;
    const want = night ? 5 : 0;
    if (this.list.length < want && this.rnd() < dt * 0.4) { const d = this.make(cx, cz); if (d) this.list.push(d); }
    for (const d of [...this.list]) {
      d.t += dt;
      const dx = cx - d.x, dz = cz - d.z, dist = Math.hypot(dx, dz) || 1;
      const leaving = !night || d.banish > 0 || dist > 220;
      d.fade = Math.max(0, Math.min(1, d.fade + (leaving ? -dt : dt * 0.6)));
      if (leaving && d.fade <= 0) { this.group.remove(d.obj); this.list.splice(this.list.indexOf(d), 1); continue; }
      // creep toward the child; held off by the lamp's ring and by street light
      let sp = leaving ? -6 : 4.5;
      if (!leaving && lampLit && dist < 16) sp = -2;
      const nx = d.x + (dx / dist) * sp * dt, nz = d.z + (dz / dist) * sp * dt;
      if (litAt(nx, nz) && sp > 0) { /* stays at the light's edge */ } else { d.x = nx; d.z = nz; }
      d.obj.position.set(d.x + Math.sin(d.t * 2) * 0.4, this.g.heightAt(d.x, d.z) + 0.3 + Math.sin(d.t * 3) * 0.3, d.z);
      d.obj.rotation.y = -Math.atan2(dz, dx);
      d.obj.scale.setScalar(0.4 + d.fade * 0.8);
      if (!leaving && dist < 3.5) { hurt += 12 * dt; }
    }
    // the spirit: rises beside the child, then fades
    if (this.spiritT > 0) {
      this.spiritT -= dt;
      const k = Math.min(1, this.spiritT, 4 - this.spiritT);
      this.spirit.visible = true; this.spirit.position.set(cx - 6, this.g.heightAt(cx, cz) + k * 2, cz - 4);
      this.spirit.scale.setScalar(0.6 + k * 0.9); (this.spirit.children[3] as THREE.PointLight).intensity = 3000 * k;
      for (const d of this.list) if (Math.hypot(d.x - cx, d.z - cz) < 120) d.banish = 1;
    } else this.spirit.visible = false;
    return hurt;
  }

  /** Banish the nearest demon within reach; true if one was. */
  banishNear(cx: number, cz: number): boolean {
    const d = this.list.find(d => d.banish <= 0 && Math.hypot(d.x - cx, d.z - cz) < 22);
    if (d) d.banish = 1;
    return !!d;
  }
  call() { this.spiritT = 4; }
}
