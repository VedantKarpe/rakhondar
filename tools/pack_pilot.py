"""Pack the 16 pilot frames (tools/blender_pilot.py) into one 4x4 sheet, sprites/pilot_sheet.png, each frame 224 px,
and a contact sheet over grass for looking at them: mock/pilot_model.png."""
import pathlib
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
F = 224
sheet = Image.new('RGBA', (F * 4, F * 4), (0, 0, 0, 0))
frames = []
for i in range(16):
    im = Image.open(ROOT / 'sprites' / 'pilot_frames' / f'pilot_{i:02d}.png').convert('RGBA').resize((F, F), Image.LANCZOS)
    sheet.paste(im, ((i % 4) * F, (i // 4) * F)); frames.append(im)
sheet.save(ROOT / 'sprites' / 'pilot_sheet.png', optimize=True)
cs = Image.new('RGB', (F * 4, F * 2), (122, 156, 88))
for j, i in enumerate(range(0, 16, 2)): cs.paste(frames[i], ((j % 4) * F, (j // 4) * F), frames[i])
(ROOT / 'mock').mkdir(exist_ok=True); cs.save(ROOT / 'mock' / 'pilot_model.png')
print('packed', sheet.size, (ROOT / 'sprites' / 'pilot_sheet.png').stat().st_size // 1024, 'KB')
