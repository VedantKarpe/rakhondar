// Small synthesised sounds (no files to load): a horn, a crash, a pickup chime, the banish whoosh and the spirit's
// chord. The audio starts on the first key or tap, as browsers require.
let ctx: AudioContext | null = null;
export function unlockAudio() { if (!ctx) try { ctx = new AudioContext(); } catch { /* no audio */ } else if (ctx.state === 'suspended') ctx.resume(); }

function tone(freq: number, dur: number, type: OscillatorType, vol: number, slide = 0, delay = 0) {
  if (!ctx) return;
  const t = ctx.currentTime + delay, o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, t); if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), t + dur);
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(ctx.destination); o.start(t); o.stop(t + dur + 0.02);
}
function noise(dur: number, vol: number) {
  if (!ctx) return;
  const n = ctx.sampleRate * dur, b = ctx.createBuffer(1, n, ctx.sampleRate), a = b.getChannelData(0);
  for (let i = 0; i < n; i++) a[i] = (Math.random() * 2 - 1) * (1 - i / n);
  const s = ctx.createBufferSource(), g = ctx.createGain(); s.buffer = b; g.gain.value = vol; s.connect(g).connect(ctx.destination); s.start();
}

export const sfx = {
  honk: () => { tone(420, 0.22, 'square', 0.04); tone(530, 0.22, 'square', 0.03); },
  crash: () => { noise(0.5, 0.25); tone(120, 0.4, 'sawtooth', 0.08, -80); },
  pick: () => { tone(880, 0.12, 'sine', 0.08); tone(1320, 0.18, 'sine', 0.06, 0, 0.08); },
  done: () => { [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.3, 'triangle', 0.07, 0, i * 0.1)); },
  banish: () => { tone(300, 0.5, 'sine', 0.1, 900); },
  spirit: () => { [220, 277, 330, 440].forEach(f => tone(f, 2.2, 'sine', 0.05)); },
  hurt: () => { tone(160, 0.25, 'sawtooth', 0.05, -60); },
};
