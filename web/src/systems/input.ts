// Keyboard, mouse and touch: which way the child should walk (in screen terms), how the view is being turned and zoomed.
export class Input {
  private keys = new Set<string>();
  private drag: { x: number } | null = null;
  private touch: { id: number; x: number; y: number; dx: number; dy: number } | null = null;
  turnDelta = 0;          // radians of turn from dragging since last read
  zoomDelta = 0;          // zoom steps since last read (+ in, - out)
  onKey: (k: string) => void = () => {};

  constructor(el: HTMLElement) {
    addEventListener('keydown', e => {
      const k = e.key.toLowerCase();
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(k)) e.preventDefault();
      if (!e.repeat) { if (k === '=' || k === '+') this.zoomDelta++; if (k === '-' || k === '_') this.zoomDelta--; this.onKey(k); }
      this.keys.add(k);
    });
    addEventListener('keyup', e => this.keys.delete(e.key.toLowerCase()));
    addEventListener('blur', () => this.keys.clear());
    el.addEventListener('contextmenu', e => e.preventDefault());
    el.addEventListener('pointerdown', e => {
      if (e.pointerType === 'mouse' && (e.button === 2 || e.button === 1)) { this.drag = { x: e.clientX }; el.setPointerCapture(e.pointerId); }
      else if (e.pointerType !== 'mouse' || e.button === 0) { this.touch = { id: e.pointerId, x: e.clientX, y: e.clientY, dx: 0, dy: 0 }; el.setPointerCapture(e.pointerId); }
    });
    el.addEventListener('pointermove', e => {
      if (this.drag) { this.turnDelta += (e.clientX - this.drag.x) * 0.007; this.drag.x = e.clientX; }
      if (this.touch && e.pointerId === this.touch.id) { this.touch.dx = e.clientX - this.touch.x; this.touch.dy = e.clientY - this.touch.y; }
    });
    const up = (e: PointerEvent) => { if (this.drag && (e.button === 2 || e.button === 1)) this.drag = null; if (this.touch && e.pointerId === this.touch.id) this.touch = null; };
    el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
    el.addEventListener('wheel', e => { e.preventDefault(); this.zoomDelta += e.deltaY < 0 ? 1 : -1; }, { passive: false });
  }

  has(k: string) { return this.keys.has(k); }

  /** The walk direction on screen (x right, y down), length 0..1. */
  move(): { x: number; y: number } {
    let x = (this.has('d') || this.has('arrowright') ? 1 : 0) - (this.has('a') || this.has('arrowleft') ? 1 : 0);
    let y = (this.has('s') || this.has('arrowdown') ? 1 : 0) - (this.has('w') || this.has('arrowup') ? 1 : 0);
    if (this.touch && Math.hypot(this.touch.dx, this.touch.dy) > 10) { const m = Math.hypot(this.touch.dx, this.touch.dy); x = this.touch.dx / m; y = this.touch.dy / m; }
    const m = Math.hypot(x, y); return m > 1 ? { x: x / m, y: y / m } : { x, y };
  }

  /** -1, 0 or +1: the view being turned with held keys. */
  heldTurn(): number { return (this.has('x') || this.has('e') ? 1 : 0) - (this.has('z') || this.has('q') ? 1 : 0); }
}
