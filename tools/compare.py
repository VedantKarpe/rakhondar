"""Put two game snapshots side by side with labels: python tools/compare.py before.png after.png out.png "Before" "After"."""
import sys
from PIL import Image, ImageDraw, ImageFont

a, b = Image.open(sys.argv[1]).convert('RGB'), Image.open(sys.argv[2]).convert('RGB')
w = 1000; a = a.resize((w, round(a.height * w / a.width))); b = b.resize((w, round(b.height * w / b.width)))
h = max(a.height, b.height)
out = Image.new('RGB', (w * 2 + 12, h + 44), (10, 14, 26))
out.paste(a, (0, 44)); out.paste(b, (w + 12, 44))
d = ImageDraw.Draw(out)
try: f = ImageFont.truetype('arialbd.ttf', 22)
except OSError: f = ImageFont.load_default()
d.text((14, 10), sys.argv[4] if len(sys.argv) > 4 else 'Before', font=f, fill=(236, 228, 207))
d.text((w + 26, 10), sys.argv[5] if len(sys.argv) > 5 else 'After', font=f, fill=(242, 180, 65))
out.save(sys.argv[3])
