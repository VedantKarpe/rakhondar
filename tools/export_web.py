"""Write the Panjim map data for the three.js version:  python tools/export_web.py

Reads what the canvas game carries (REAL_PANJIM: buildings, streets, paths, water, mangroves, heights, landmarks; and
VILLAGES.panjim: the 230 x 120 tile map) out of rakhondar.html and writes web/public/data/panjim.json. Coordinates stay
in tiles (one tile is 20 m); the web version converts them to metres.
"""
import json, pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
src = (ROOT / 'rakhondar.html').read_text(encoding='utf-8')
real = json.loads(re.search(r'const REAL_PANJIM = (\{.*?\});\r?\n', src).group(1))
i = src.index('VILLAGES.panjim = ') + len('VILLAGES.panjim = ')
vil = json.loads(src[i:src.index(';/* END VILLAGE-DATA panjim', i)])
out = {'W': vil['W'], 'H': vil['H'], 'tile': vil['tile'], 'rows': vil['rows'], 'centre': vil['centre'], **real}
dst = ROOT / 'web' / 'public' / 'data' / 'panjim.json'
dst.parent.mkdir(parents=True, exist_ok=True)
dst.write_text(json.dumps(out, separators=(',', ':')), encoding='utf-8')
print(f"{len(real['b'])} buildings, {len(real['r'])} streets, map {vil['W']}x{vil['H']}; {dst.stat().st_size // 1024} KB")
