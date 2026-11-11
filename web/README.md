# Rakhondar in three.js (Panjim)

The game's next version: real 3D in WebGL with three.js, written in TypeScript as separate modules, built with Vite.
Panjim only for now. The canvas game (`../rakhondar.html`) stays as it is until this one has caught up.

    cd web
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # dist/: a static site for GitHub Pages or a phone app wrapper (Capacitor)

Map data: `python ../tools/export_web.py` writes `public/data/panjim.json` from what the canvas game carries.

    src/world/      data.ts (map data, ground heights), terrain.ts, roads.ts, buildings.ts, trees.ts
    src/entities/   child.ts
    src/systems/    input.ts, cameraRig.ts (free turning and zoom), movement.ts (walls, water, streets, bridges)
    src/ui/         hud.ts
    src/main.ts     puts them together and runs the frame

Controls: WASD / arrows to walk, Shift to run, hold Q/E or Z/X (or right-drag) to turn the view, wheel or +/- to zoom,
N for day and night.
