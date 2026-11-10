"""Build the single-file version of the game, with its sprites inside it:  python tools/build_artifact.py [scale]

The claude.ai artifact is one HTML file with no sprites folder, so the Blender models (the pilot, the Kadamba bus and the
landmarks) never showed there. This writes dist/rakhondar.artifact.html: rakhondar.html with window.SPRITE_DATA, a map of
sprite path -> {u: data URI, x, y, f}, put in front of the game's script. Each landmark is cropped to what it draws and
shrunk by `scale` (default 0.7), with the crop's offset (x, y, in original pixels) and the scale (f) so the game puts it
back where it was; the two sheets are kept whole, with their colours reduced. Publish that file to the artifact."""
import base64, io, json, pathlib, sys
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
F = float(sys.argv[1]) if len(sys.argv) > 1 else 0.7


def uri(im):
    buf = io.BytesIO(); im.save(buf, 'PNG', optimize=True)
    return 'data:image/png;base64,' + base64.b64encode(buf.getvalue()).decode()


def quant(im):
    return im.quantize(colors=256, method=Image.Quantize.FASTOCTREE, dither=Image.Dither.NONE)


data = {}
for name in ('pilot_sheet', 'bus_sheet', 'child_sheet'):
    im = Image.open(ROOT / 'sprites' / f'{name}.png').convert('RGBA')
    data[f'sprites/{name}.png'] = {'u': uri(quant(im)), 'x': 0, 'y': 0, 'f': 1}
for fn in sorted((ROOT / 'sprites').glob('landmark_*.png')):
    im = Image.open(fn).convert('RGBA'); bb = im.getchannel('A').point(lambda a: 255 if a > 6 else 0).getbbox()
    if not bb: continue
    c = im.crop(bb); c = c.resize((max(1, round(c.width * F)), max(1, round(c.height * F))), Image.LANCZOS)
    data[f'sprites/{fn.name}'] = {'u': uri(quant(c)), 'x': bb[0], 'y': bb[1], 'f': F}
blob = json.dumps(data, separators=(',', ':'))
html = (ROOT / 'rakhondar.html').read_text(encoding='utf-8')
i = html.index('<script>')
out = html[:i] + '<script>window.SPRITE_DATA = ' + blob + ';</script>\n' + html[i:]
(ROOT / 'dist').mkdir(exist_ok=True)
(ROOT / 'dist' / 'rakhondar.artifact.html').write_text(out, encoding='utf-8', newline='')
print(f'{len(data)} sprites, {len(blob) // 1024} KB of sprite data; dist/rakhondar.artifact.html is {len(out) // 1024} KB')
