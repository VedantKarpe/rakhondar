// The night's demons: dark shapes with ember eyes that creep toward the child out of the dark. They will not enter
// the light of a street lamp, and they shy from the torch while its battery lasts. Hold Space to banish one close by
// (it costs torch battery); press R to call Rakhondar, the guardian spirit, who drives every demon near you away.
import * as THREE from 'three';
import type { Ground } from '../world/data';
import type { Movement } from '../systems/movement';

let smokeTex: THREE.Texture | null = null, glowTex: THREE.Texture | null = null;
function radial(stops: [number, string][]): THREE.Texture {
  const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d')!;
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); for (const [o, col] of stops) gr.addColorStop(o, col);
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const SMOKE = () => smokeTex ??= radial([[0, 'rgba(255,255,255,1)'], [0.45, 'rgba(255,255,255,.7)'], [1, 'rgba(255,255,255,0)']]);
const GLOW = () => glowTex ??= radial([[0, 'rgba(255,255,230,1)'], [0.25, 'rgba(255,200,120,.9)'], [1, 'rgba(255,80,0,0)']]);

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

  /** A demon rising out of the dark at (x, z): an ambush. */
  spawnAt(x: number, z: number) {
    const d = this.make(x, z, 0); if (d) this.list.push(d);
  }

  private make(cx: number, cz: number, ring = 1): Demon | null {
    for (let k = 0; k < 10; k++) {
      const a = this.rnd() * Math.PI * 2, r = ring ? 45 + this.rnd() * 55 : 4 + this.rnd() * 10, x = cx + Math.cos(a) * r, z = cz + Math.sin(a) * r;
      if (!this.move.free(x, z)) continue;
      // a demon: a column of curling dark smoke with a hunched shape, ember eyes that glow, sparks drifting up
      const obj = new THREE.Group();
      for (let k = 0; k < 9; k++) {
        const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: SMOKE(), color: k < 3 ? 0x1a0f24 : 0x2a1830, transparent: true, opacity: 0.75 - k * 0.04, depthWrite: false }));
        const r = 1.6 + Math.sin(k) * 0.6; sp.scale.set(r * 2.2, r * 2.4, 1); sp.position.set(Math.sin(k * 2.3) * 0.6, 0.8 + k * 0.62, Math.cos(k * 2.3) * 0.6);
        sp.userData.k = k; obj.add(sp);
      }
      for (const s2 of [-0.45, 0.45]) {
        const e = new THREE.Sprite(new THREE.SpriteMaterial({ map: GLOW(), color: 0xff6a20, blending: THREE.AdditiveBlending, depthWrite: false }));
        e.scale.set(1.1, 0.7, 1); e.position.set(0.9, 4.1, s2); e.userData.eye = 1; obj.add(e);
      }
      this.group.add(obj);
      return { obj, x, z, fade: 0, banish: 0, t: this.rnd() * 9 };
    }
    return null;
  }

  /** Move the demons; returns how much courage they took this frame. */
  update(dt: number, cx: number, cz: number, night: boolean, lampLit: boolean, litAt: (x: number, z: number) => boolean): number {
    let hurt = 0;
    const want = night ? 12 : 0;   // a dozen at a time: the night is dangerous
    if (this.list.length < want && this.rnd() < dt * 1.5) { const d = this.make(cx, cz); if (d) this.list.push(d); }
    for (const d of [...this.list]) {
      d.t += dt;
      const dx = cx - d.x, dz = cz - d.z, dist = Math.hypot(dx, dz) || 1;
      const leaving = !night || d.banish > 0 || dist > 220;
      d.fade = Math.max(0, Math.min(1, d.fade + (leaving ? -dt : dt * 0.6)));
      if (leaving && d.fade <= 0) { this.group.remove(d.obj); this.list.splice(this.list.indexOf(d), 1); continue; }
      // creep toward the child; held off by the torch beam and by street light
      let sp = leaving ? -6 : dist < 25 ? 10 : 6;   // they close in, and lunge when near
      if (!leaving && lampLit && dist < 8) sp = -1.5;   // the torch only just holds them off
      const nx = d.x + (dx / dist) * sp * dt, nz = d.z + (dz / dist) * sp * dt;
      if (litAt(nx, nz) && sp > 0) { /* stays at the light's edge */ } else { d.x = nx; d.z = nz; }
      d.obj.position.set(d.x + Math.sin(d.t * 2) * 0.4, this.g.heightAt(d.x, d.z) + 0.3 + Math.sin(d.t * 3) * 0.3, d.z);
      d.obj.rotation.y = -Math.atan2(dz, dx);
      for (const c of d.obj.children) {
        const k = c.userData.k as number | undefined;
        if (k !== undefined) { c.position.x = Math.sin(d.t * 1.3 + k) * 0.7; c.position.z = Math.cos(d.t * 1.1 + k * 1.7) * 0.7; (c as THREE.Sprite).material.rotation = d.t * 0.4 + k; (c as THREE.Sprite).material.opacity = (0.75 - k * 0.04) * d.fade; }
        else if (c.userData.eye) (c as THREE.Sprite).material.opacity = d.fade * (0.75 + Math.sin(d.t * 9) * 0.25);
      }
      d.obj.scale.setScalar(0.4 + d.fade * 0.8);
      if (!leaving && dist < 4) { hurt += 22 * dt; }
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
