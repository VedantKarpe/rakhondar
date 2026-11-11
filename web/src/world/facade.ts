// The look of a Goan house front, painted once into a small texture: one bay of one storey (a tall window with a white
// surround and louvred shutters, a white band at the floor line, a darker plinth). Walls repeat it; where it is
// transparent the wall's own colour shows, so one texture serves every colour of house. Windows glow at night.
import * as THREE from 'three';

export const BAY = 4.2;      // metres across one bay, and one storey high

export function facadeTexture(): THREE.CanvasTexture {
  const S = 128, c = document.createElement('canvas'); c.width = S; c.height = S;
  const g = c.getContext('2d')!;
  g.clearRect(0, 0, S, S);
  // a little weathering: faint darker streaks on the plaster (alpha only, so it tints any colour)
  for (let i = 0; i < 40; i++) { g.fillStyle = `rgba(60,40,20,${0.03 + Math.random() * 0.04})`; g.fillRect(Math.random() * S, 0, 1 + Math.random() * 3, S * (0.3 + Math.random() * 0.7)); }
  g.clearRect(0, 0, 5, S);   // a clean strip for roofs to sample
  // as in Fontainhas: a white cornice band at the top, white pilasters at the bay edges, and a tall door-window in a
  // thick white frame with a slightly arched head, its dark wooden shutters (some open, showing the dim room)
  g.fillStyle = '#f7f4ec'; g.fillRect(0, 0, S, 8); g.fillStyle = 'rgba(0,0,0,.22)'; g.fillRect(0, 8, S, 2);
  g.fillStyle = '#f7f4ec'; g.fillRect(S - 9, 0, 9, S); g.fillStyle = 'rgba(0,0,0,.12)'; g.fillRect(S - 10, 0, 1.5, S);
  const wx = 40, ww = 40, wy = 24, wh = 92;
  g.fillStyle = '#f7f4ec'; g.fillRect(wx - 8, wy - 8, ww + 16, wh + 8);
  g.beginPath(); g.ellipse(wx + ww / 2, wy - 6, ww / 2 + 8, 8, 0, Math.PI, 0); g.fill();
  g.fillStyle = '#1c1a1a'; g.fillRect(wx, wy, ww, wh);                                   // the dark opening (glass at night)
  g.fillStyle = '#5a2a1e'; g.fillRect(wx, wy, ww / 2 - 1, wh);                            // one closed wooden shutter
  g.fillStyle = 'rgba(0,0,0,.3)'; for (let y = wy + 4; y < wy + wh; y += 6) g.fillRect(wx + 2, y, ww / 2 - 5, 1.5);
  g.fillStyle = '#6e3a28'; g.fillRect(wx + ww / 2 + 1, wy + wh * 0.55, ww / 2 - 1, wh * 0.45);   // a half door below
  g.fillStyle = '#f7f4ec'; g.fillRect(wx - 10, wy + wh - 2, ww + 20, 4);                  // threshold / sill
  // a grey plinth at the foot of the wall
  g.fillStyle = 'rgba(70,70,70,.0)';
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
