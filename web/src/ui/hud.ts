// The on-screen readouts: frames a second and draw calls (to compare with the canvas game), and the nearest named place.
import type * as THREE from 'three';

export class Hud {
  private stats = document.getElementById('stats')!;
  private place = document.getElementById('place')!;
  private frames = 0; private acc = 0; private fps = 0; private worst = 0;

  update(dt: number, renderer: THREE.WebGLRenderer, placeName: string, night: boolean) {
    this.frames++; this.acc += dt; this.worst = Math.max(this.worst, dt);
    if (this.acc >= 0.5) {
      this.fps = Math.round(this.frames / this.acc);
      const i = renderer.info.render;
      this.stats.innerHTML = `<b>${this.fps}</b> fps · worst frame ${Math.round(this.worst * 1000)} ms<br>${i.calls} draw calls · ${(i.triangles / 1000).toFixed(0)}k triangles · ${night ? 'night' : 'day'}`;
      this.frames = 0; this.acc = 0; this.worst = 0;
    }
    if (this.place.textContent !== placeName) this.place.textContent = placeName;
  }
}
