"""A game-screen mock of Panaji: the real-data city at the game's zoom, with the player, the HUD, by day and night.

    python tools/mock_game.py

Uses tools/mock_real.py's renderer (OpenStreetMap buildings, streets and water on SRTM ground, with the Blender
landmarks) and writes mock/game_day.png and mock/game_night.png. A picture of the target, not the playable game.
"""
import math, pathlib, sys
from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageChops
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import mock_real as MR

OUT = MR.OUT
FW, FH = 1600, 1000                         # the screen
PLAYER = (15.49835, 73.82860)               # standing in the street below Church Square
SC, ZS = 3.0, 6.2                           # px per metre, and height px per metre (the mock's 2.08 stretch)
px_m, py_m = MR.xy(*PLAYER)
R = 170
img, P = MR.render(None, px_m - R, py_m - R, px_m + R, py_m + R, SC, ZS, [('Church Square', 15.4987, 73.82891, 25)])
sx, sy = P(px_m, py_m)
frame = img.crop((int(sx - FW / 2), int(sy - FH * 0.55), int(sx - FW / 2) + FW, int(sy - FH * 0.55) + FH))
cx, cy = FW / 2, FH * 0.55                  # the player's feet on screen


def font(sz, bold=False):
    for f in (('arialbd.ttf' if bold else 'arial.ttf'), 'DejaVuSans.ttf'):
        try: return ImageFont.truetype(f, sz)
        except OSError: pass
    return ImageFont.load_default()


def draw_player(d):
    """The child with the clay lamp, in the game's cartoon style."""
    d.ellipse([cx - 14, cy - 5, cx + 14, cy + 5], fill=(0, 0, 0, 90))
    for side in (-1, 1): d.rounded_rectangle([cx + side * 5 - 3, cy - 18, cx + side * 5 + 3, cy], 3, fill=(184, 121, 74), outline=(26, 20, 16))
    d.rounded_rectangle([cx - 10, cy - 30, cx + 10, cy - 17], 5, fill=(47, 95, 176), outline=(26, 20, 16))
    d.rounded_rectangle([cx - 11, cy - 46, cx + 11, cy - 28], 7, fill=(242, 194, 48), outline=(26, 20, 16))
    d.ellipse([cx - 13, cy - 72, cx + 13, cy - 46], fill=(184, 121, 74), outline=(26, 20, 16), width=2)
    d.chord([cx - 13, cy - 74, cx + 13, cy - 56], 180, 360, fill=(26, 20, 16))
    for side in (-1, 1):
        d.ellipse([cx + side * 5 - 4, cy - 63, cx + side * 5 + 4, cy - 54], fill=(255, 255, 255), outline=(26, 20, 16))
        d.ellipse([cx + side * 5 - 1.5, cy - 60, cx + side * 5 + 2.5, cy - 56], fill=(26, 20, 16))
    d.ellipse([cx + 14, cy - 38, cx + 22, cy - 28], fill=(255, 211, 107))      # the clay lamp's flame


def hud(base, night):
    d = ImageDraw.Draw(base, 'RGBA')
    f11, f13, f15 = font(13, True), font(15), font(18, True)
    d.text((18, 14), 'COURAGE', font=f11, fill=(232, 226, 208))
    for i in range(5): d.ellipse([18 + i * 20, 34, 32 + i * 20, 52], fill=(242, 180, 65), outline=(120, 80, 20))
    d.text((18, 60), 'LAMP OIL', font=f11, fill=(232, 226, 208))
    d.rounded_rectangle([18, 80, 138, 87], 3, fill=(42, 45, 58)); d.rounded_rectangle([18, 80, 120, 87], 3, fill=(242, 180, 65))
    obj = ('8:40 PM · Clear · waxing moon · Walk Tia Rosa home to Fontainhas' if night else '9:10 AM · Clear · Take the letter to the Fernandes house, Fontainhas')
    tw = d.textlength(obj, font=f13)
    d.rounded_rectangle([FW / 2 - tw / 2 - 12, 12, FW / 2 + tw / 2 + 12, 40], 8, fill=(10, 14, 26, 150)); d.text((FW / 2 - tw / 2, 16), obj, font=f13, fill=(244, 239, 228))
    d.text((FW - 110, 14), 'POINTS', font=f11, fill=(232, 226, 208)); d.text((FW - 110, 32), '1,595', font=f15, fill=(242, 180, 65))
    # the mini map: the overview, shrunk, with you on it
    ov = Image.open(OUT / 'panaji_overview.png').convert('RGB'); ov.thumbnail((240, 132))
    d.rounded_rectangle([14, FH - ov.height - 66, 22 + ov.width, FH - 58], 8, fill=(10, 14, 26, 220))
    base.paste(ov, (18, FH - ov.height - 62))
    d.text((18, FH - 50), 'Places  P      Goa  G', font=f11, fill=(232, 226, 208))
    pill = 'Call Rakhondar   Space'; pw = d.textlength(pill, font=f15)
    d.rounded_rectangle([FW - pw - 50, FH - 62, FW - 18, FH - 20], 21, fill=(159, 232, 214)); d.text((FW - pw - 34, FH - 52), pill, font=f15, fill=(10, 16, 32))


# ---- day ----
day = frame.convert('RGBA'); dd = ImageDraw.Draw(day, 'RGBA')
draw_player(dd); hud(day, False)
day.convert('RGB').save(OUT / 'game_day.png')
# ---- night: the dark comes down; street lamps, lit windows and the child's lamp cut it open ----
night = frame.convert('RGB')
dark = Image.new('RGB', night.size, (16, 24, 66))
night = Image.blend(night, ImageChops.multiply(night, Image.new('RGB', night.size, (70, 80, 140))), 0.82)
glow = Image.new('RGB', night.size, (0, 0, 0)); gd = ImageDraw.Draw(glow)
import random
rnd = random.Random(4)
# warm pools along the roads (street lamps every ~25 m), and the windows that are lit
for r in MR.roads:
    for (x, y, ux, uy) in MR.along(r['p'], 25):
        if abs(x - px_m) > R or abs(y - py_m) > R: continue
        qx, qy = P(x + (-uy) * (r['w'] / 2 + 2), y + ux * (r['w'] / 2 + 2))
        qx -= sx - FW / 2; qy -= sy - FH * 0.55
        if -60 < qx < FW + 60 and -60 < qy < FH + 60:
            gd.ellipse([qx - 46, qy - 23, qx + 46, qy + 23], fill=(120, 96, 48))
glow = glow.filter(ImageFilter.GaussianBlur(14))
night = ImageChops.add(night, glow)
lamp = Image.new('RGB', night.size, (0, 0, 0)); ld = ImageDraw.Draw(lamp)
ld.ellipse([cx - 120, cy - 60, cx + 120, cy + 60], fill=(150, 120, 70)); lamp = lamp.filter(ImageFilter.GaussianBlur(30))
night = ImageChops.add(night, lamp)
# the church and secretariat floodlit
for la, lo in ((15.49858, 73.82972), (15.50067, 73.83003)):
    gx, gy = P(*MR.xy(la, lo)); gx -= sx - FW / 2; gy -= sy - FH * 0.55
    fl = Image.new('RGB', night.size, (0, 0, 0)); fd = ImageDraw.Draw(fl); fd.ellipse([gx - 160, gy - 200, gx + 160, gy + 40], fill=(70, 70, 60))
    night = ImageChops.add(night, fl.filter(ImageFilter.GaussianBlur(40)))
night = night.convert('RGBA'); nd = ImageDraw.Draw(night, 'RGBA')
draw_player(nd)
# the Rakhondar's glow at the child's shoulder
sp = Image.new('RGBA', night.size, (0, 0, 0, 0)); spd = ImageDraw.Draw(sp)
spd.ellipse([cx + 18, cy - 92, cx + 48, cy - 62], fill=(159, 232, 214, 200)); night.alpha_composite(sp.filter(ImageFilter.GaussianBlur(6)))
hud(night, True)
night.convert('RGB').save(OUT / 'game_night.png')
print('wrote game_day.png and game_night.png')
