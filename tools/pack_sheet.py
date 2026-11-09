"""Pack rendered heading frames into a sheet for the game:  python tools/pack_sheet.py <name> <frames> <columns> <frame px>

Reads sprites/<name>_frames/<name>_NN.png (as tools/blender_<name>.py renders them, at twice the final size), writes
sprites/<name>_sheet.png and a contact sheet over grass, mock/<name>_model.png, for looking at them."""
import pathlib, sys
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
name, n, cols, F = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4])
rows = -(-n // cols)
sheet = Image.new('RGBA', (F * cols, F * rows), (0, 0, 0, 0)); frames = []
for i in range(n):
    im = Image.open(ROOT / 'sprites' / f'{name}_frames' / f'{name}_{i:02d}.png').convert('RGBA').resize((F, F), Image.LANCZOS)
    sheet.paste(im, ((i % cols) * F, (i // cols) * F)); frames.append(im)
sheet.save(ROOT / 'sprites' / f'{name}_sheet.png', optimize=True)
step = max(1, n // 8)
cs = Image.new('RGB', (F * 4, F * 2), (122, 156, 88))
for j, i in enumerate(range(0, n, step)[:8]): cs.paste(frames[i], ((j % 4) * F, (j // 4) * F), frames[i])
(ROOT / 'mock').mkdir(exist_ok=True); cs.save(ROOT / 'mock' / f'{name}_model.png')
print('packed', sheet.size, (ROOT / 'sprites' / f'{name}_sheet.png').stat().st_size // 1024, 'KB')
