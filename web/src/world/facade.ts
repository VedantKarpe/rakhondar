// The look of a Goan house front, painted once into a small texture: one bay of one storey (a tall window with a white
// surround and louvred shutters, a white band at the floor line, a darker plinth). Walls repeat it; where it is
// transparent the wall's own colour shows, so one texture serves every colour of house. Windows glow at night.
import * as THREE from 'three';

export const BAY = 3.4;      // metres across one bay, and one storey high

export function facadeTexture(): THREE.CanvasTexture {
  const S = 128, c = document.createElement('canvas'); c.width = S; c.height = S;
  const g = c.getContext('2d')!;
  g.clearRect(0, 0, S, S);
  // a little weathering: faint darker streaks on the plaster (alpha only, so it tints any colour)
  for (let i = 0; i < 40; i++) { g.fillStyle = `rgba(60,40,20,${0.03 + Math.random() * 0.04})`; g.fillRect(Math.random() * S, 0, 1 + Math.random() * 3, S * (0.3 + Math.random() * 0.7)); }
  g.clearRect(0, 0, 5, S);   // a clean strip for roofs to sample
  // the white band at the top of the storey (the floor line / cornice) and a thin one under it
  g.fillStyle = '#f6f2e8'; g.fillRect(0, 0, S, 9); g.fillStyle = 'rgba(0,0,0,.25)'; g.fillRect(0, 9, S, 2);
  // window: white moulded surround, dark glass, green louvred shutters folded open either side
  const wx = 44, ww = 40, wy = 26, wh = 74;
  g.fillStyle = '#f6f2e8'; g.fillRect(wx - 7, wy - 9, ww + 14, wh + 16);
  g.beginPath(); g.moveTo(wx - 10, wy - 9); g.lineTo(wx + ww / 2, wy - 20); g.lineTo(wx + ww + 10, wy - 9); g.fill();   // a little pediment
  g.fillStyle = '#1f2a2e'; g.fillRect(wx, wy, ww, wh);
  g.fillStyle = '#c9d6d8'; g.fillRect(wx + ww / 2 - 1, wy, 2, wh); g.fillRect(wx, wy + wh * 0.45, ww, 2);     // the frame's bars
  for (const sx of [wx - 7 - 16, wx + ww + 7]) {
    g.fillStyle = '#2f7a55'; g.fillRect(sx, wy - 2, 16, wh + 4);
    g.fillStyle = 'rgba(0,0,0,.25)'; for (let y = wy; y < wy + wh; y += 5) g.fillRect(sx + 2, y, 12, 1.5);
  }
  g.fillStyle = '#f6f2e8'; g.fillRect(wx - 9, wy + wh + 4, ww + 18, 5);   // the sill
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

/** A Lambert material whose texture is painted over the vertex colour by its alpha, with windows lit at night. */
export function facadeMaterial(map: THREE.Texture, night: { value: number }): THREE.MeshLambertMaterial {
  const m = new THREE.MeshLambertMaterial({ vertexColors: true, map });
  m.onBeforeCompile = sh => {
    sh.uniforms.uNight = night;
    sh.fragmentShader = 'uniform float uNight;\n' + sh.fragmentShader
      .replace('#include <map_fragment>', `
        vec4 fac = texture2D(map, vMapUv);
        diffuseColor.rgb = mix(diffuseColor.rgb, fac.rgb, fac.a);
        // a window (dark glass) in about half the bays lights up warm at night
        vec2 cell = floor(vMapUv);
        float lit = step(0.45, fract(sin(dot(cell, vec2(12.9898, 78.233))) * 43758.5453));
        float glass = fac.a * step(fac.r, 0.2) * step(0.001, vMapUv.y);
      `)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        totalEmissiveRadiance += vec3(1.0, 0.72, 0.38) * glass * lit * uNight * 1.6;`);
  };
  return m;
}
