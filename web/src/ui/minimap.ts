// The minimap, always north-up: the map's tiles, the streets, fog over what the child has not yet seen, pins for the
// current task, and a cone showing which way the view faces. Tap it to open the full map of Panjim.
import { T, pts, type PanjimData } from '../world/data';
import type { Spot } from '../systems/quests';

const COL: Record<string, string> = { G: '#5c7a40', F: '#3d6b38', M: '#2a4a30', W: '#2b6a8a', R: '#8a8478', L: '#9a9284', P: '#8aa050', S: '#d8c690', B: '#d8c690' };

export class Minimap {
  private base: HTMLCanvasElement;
  private fog: Uint8Array;
  private fogImg: ImageData;
  private fogCan: HTMLCanvasElement;
  private cv: HTMLCanvasElement;
  private big = false;
  private dirty = true;

  constructor(private d: PanjimData) {
    const S = 4; // pixels a tile on the base image
    this.base = document.createElement('canvas'); this.base.width = d.W * S; this.base.height = d.H * S;
    const c = this.base.getContext('2d')!;
    for (let y = 0; y < d.H; y++) for (let x = 0; x < d.W; x++) { c.fillStyle = COL[d.rows[y][x]] ?? '#5c7a40'; c.fillRect(x * S, y * S, S, S); }
    c.fillStyle = '#2b6a8a'; for (const f of d.water) { c.beginPath(); pts(f).forEach(([x, y], i) => i ? c.lineTo(x * S, y * S) : c.moveTo(x * S, y * S)); c.fill(); }
    c.fillStyle = '#c9b89a'; for (const [f] of d.b) { c.beginPath(); pts(f).forEach(([x, y], i) => i ? c.lineTo(x * S, y * S) : c.moveTo(x * S, y * S)); c.fill(); }
    c.strokeStyle = '#ece4cf'; c.lineCap = 'round';
    for (const [f, w] of d.r) { c.lineWidth = Math.max(1, w * 1.5 / T * S); c.beginPath(); pts(f).forEach(([x, y], i) => i ? c.lineTo(x * S, y * S) : c.moveTo(x * S, y * S)); c.stroke(); }
    this.fog = new Uint8Array(d.W * d.H);
    this.fogCan = document.createElement('canvas'); this.fogCan.width = d.W; this.fogCan.height = d.H;
    this.fogImg = this.fogCan.getContext('2d')!.createImageData(d.W, d.H);
    this.cv = document.getElementById('map') as HTMLCanvasElement;
    this.cv.addEventListener('click', () => { this.big = !this.big; this.cv.classList.toggle('big', this.big); });
  }

  /** Clear the fog for `r` tiles around the child. */
  reveal(cx: number, cz: number, r: number) {
    const tx = Math.floor(cx / T), ty = Math.floor(cz / T);
    for (let y = ty - r; y <= ty + r; y++) for (let x = tx - r; x <= tx + r; x++) {
      if (x < 0 || y < 0 || x >= this.d.W || y >= this.d.H || (x - tx) ** 2 + (y - ty) ** 2 > r * r) continue;
      const i = y * this.d.W + x; if (!this.fog[i]) { this.fog[i] = 1; this.dirty = true; }
    }
  }

  draw(cx: number, cz: number, yaw: number, pins: Spot[], night: boolean) {
    if (this.dirty) {
      const a = this.fogImg.data;
      for (let i = 0; i < this.fog.length; i++) { a[i * 4] = 8; a[i * 4 + 1] = 12; a[i * 4 + 2] = 24; a[i * 4 + 3] = this.fog[i] ? 0 : 235; }
      this.fogCan.getContext('2d')!.putImageData(this.fogImg, 0, 0); this.dirty = false;
    }
    const cv = this.cv, W = cv.clientWidth, H = cv.clientHeight;
    if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; }
    const c = cv.getContext('2d')!;
    // small: 30 tiles across around the child; big: the whole of Panjim
    const span = this.big ? Math.max(this.d.W, this.d.H * W / H) : 30, k = W / span;
    const ox = this.big ? (W - this.d.W * k) / 2 : W / 2 - (cx / T) * k, oy = this.big ? (H - this.d.H * k) / 2 : H / 2 - (cz / T) * k;
    c.fillStyle = '#0a1020'; c.fillRect(0, 0, W, H);
    c.imageSmoothingEnabled = !this.big;
    c.drawImage(this.base, ox, oy, this.d.W * k, this.d.H * k);
    if (night) { c.fillStyle = 'rgba(10,16,40,.45)'; c.fillRect(0, 0, W, H); }
    c.imageSmoothingEnabled = true;
    c.drawImage(this.fogCan, ox, oy, this.d.W * k, this.d.H * k);
    if (this.big) {
      c.font = '600 11px Mukta, sans-serif'; c.fillStyle = '#ece4cf'; c.textAlign = 'center';
      for (const [n, x, y] of this.d.places) if (this.fog[Math.floor(y) * this.d.W + Math.floor(x)]) c.fillText(n, ox + x * k, oy + y * k);
    }
    for (const p of pins) {
      const x = ox + (p.x / T) * k, y = oy + (p.z / T) * k;
      c.fillStyle = '#f2b441'; c.beginPath(); c.arc(x, y, 4, 0, Math.PI * 2); c.fill();
      c.strokeStyle = '#0a1020'; c.lineWidth = 1.5; c.stroke();
    }
    // the child, and which way the view looks (the camera looks along -(cos yaw, sin yaw))
    const x = ox + (cx / T) * k, y = oy + (cz / T) * k, a = Math.atan2(-Math.sin(yaw), -Math.cos(yaw));
    c.fillStyle = 'rgba(242,180,65,.3)'; c.beginPath(); c.moveTo(x, y); c.arc(x, y, 22, a - 0.5, a + 0.5); c.fill();
    c.fillStyle = '#f2c230'; c.beginPath(); c.arc(x, y, 4, 0, Math.PI * 2); c.fill(); c.strokeStyle = '#0a1020'; c.stroke();
  }
}
