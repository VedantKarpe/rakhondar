"""The child, modelled in Blender for Rakhondar so they match the modelled vehicles.

    "C:\\Program Files\\Blender Foundation\\Blender 5.1\\blender.exe" -b --python tools/blender_child.py
    python tools/pack_sheet.py child 64 16 128

The same child as the hand-drawn one: brown skin, black hair, big round eyes, a yellow shirt, blue shorts, and the clay
lamp with its flame held out in the right hand. Four poses (standing, left foot forward, passing, right foot forward) at
16 headings, one every 22.5 degrees, in the game's 2:1 view: frame = pose * 16 + heading. Metres; x = forward, y = left,
z up; the feet stand on the origin, and the camera looks at a point Z0 above it so the whole child fits the frame.
"""
import bpy, math, os, pathlib
from mathutils import Vector

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'sprites' / 'child_frames'; OUT.mkdir(parents=True, exist_ok=True)
ELEV = math.asin(0.5)
S = 174.0            # px per metre while rendering (packed frames are half that)
RES = 256
N = 16
Z0 = 0.5             # the camera looks at this height above the feet


def col(h):
    h = h.lstrip('#'); c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return (*[v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4 for v in c], 1)


M = {}
def mat(h, rough=0.7, emit=0.0):
    k = (h, rough, emit)
    if k in M: return M[k]
    m = bpy.data.materials.new(h); m.use_nodes = True
    b = next(n for n in m.node_tree.nodes if n.type == 'BSDF_PRINCIPLED')
    b.inputs['Base Color'].default_value = col(h); b.inputs['Roughness'].default_value = rough
    if emit: b.inputs['Emission Color'].default_value = col(h); b.inputs['Emission Strength'].default_value = emit
    M[k] = m; return m


SKIN, HAIR, SHIRT, SHORTS, SHOE = mat('#b8794a'), mat('#1a1410', 0.5), mat('#f2c230'), mat('#2f5fb0'), mat('#3a2a22')
WHITE, PUPIL, CLAY, FLAME = mat('#fdfbf5', 0.4), mat('#16110e', 0.3), mat('#b4532a'), mat('#ffd36b', 0.4, 4.0)

for o in list(bpy.data.objects): bpy.data.objects.remove(o, do_unlink=True)
bpy.ops.object.empty_add(location=(0, 0, 0)); root = bpy.context.active_object
bpy.ops.object.empty_add(location=(0, 0, 0)); body = bpy.context.active_object; body.parent = root


def smooth():
    try: bpy.ops.object.shade_smooth()
    except Exception: pass


def ell(c, sc, m, parent=None):
    bpy.ops.mesh.primitive_uv_sphere_add(radius=1, location=c, segments=28, ring_count=14)
    o = bpy.context.active_object; o.scale = sc; smooth(); o.data.materials.append(m); o.parent = parent or body
    if parent is not None: o.location = Vector(c) - parent.location
    return o


def cyl(p0, p1, r, m, parent=None):
    p0, p1 = Vector(p0), Vector(p1); d = p1 - p0
    bpy.ops.mesh.primitive_cylinder_add(vertices=14, radius=r, depth=d.length, location=(p0 + p1) / 2)
    o = bpy.context.active_object; o.rotation_mode = 'QUATERNION'; o.rotation_quaternion = Vector((0, 0, 1)).rotation_difference(d)
    smooth(); o.data.materials.append(m); o.parent = parent or body
    if parent is not None: o.location = (p0 + p1) / 2 - parent.location
    return o


def pivot(c):
    bpy.ops.object.empty_add(location=c); o = bpy.context.active_object; o.parent = body; return o


# a small child with a big head (as the hand-drawn one was): legs swing from the hips, the left arm from the shoulder,
# and the right arm holds the lamp out
hipL, hipR, shL = pivot((0, 0.08, 0.34)), pivot((0, -0.08, 0.34)), pivot((0, 0.19, 0.64))
for hip, y in ((hipL, 0.08), (hipR, -0.08)):
    cyl((0, y, 0.34), (0, y, 0.07), 0.058, SKIN, hip)
    ell((0.04, y, 0.04), (0.095, 0.062, 0.048), SHOE, hip)
ell((0, 0, 0.38), (0.15, 0.17, 0.11), SHORTS)
ell((0, 0, 0.55), (0.155, 0.18, 0.17), SHIRT)
cyl((0, 0.19, 0.64), (0, 0.205, 0.51), 0.055, SHIRT, shL)            # sleeve
cyl((0, 0.205, 0.51), (0.02, 0.205, 0.40), 0.044, SKIN, shL)
ell((0.02, 0.205, 0.38), (0.05, 0.045, 0.05), SKIN, shL)
cyl((0, -0.19, 0.64), (0.07, -0.21, 0.54), 0.055, SHIRT)            # the lamp arm, bent forward
cyl((0.07, -0.21, 0.54), (0.20, -0.21, 0.50), 0.044, SKIN)
ell((0.25, -0.21, 0.52), (0.085, 0.085, 0.04), CLAY)                # the clay lamp
ell((0.31, -0.21, 0.60), (0.034, 0.034, 0.068), FLAME)
cyl((0, 0, 0.68), (0, 0, 0.74), 0.07, SKIN)                          # neck
ell((0.01, 0, 0.93), (0.265, 0.265, 0.25), SKIN)                     # the big head
ell((-0.045, 0, 0.995), (0.265, 0.27, 0.215), HAIR)
for y in (-0.105, 0.105):
    ell((0.235, y, 0.94), (0.058, 0.074, 0.082), WHITE)
    ell((0.283, y, 0.935), (0.023, 0.034, 0.04), PUPIL)
    ell((0.0, y * 2.5, 0.91), (0.04, 0.026, 0.058), SKIN)            # ears
ell((0.262, 0, 0.805), (0.018, 0.07, 0.02), PUPIL)                   # a small smile

POSES = [(0, 0, 0, 0), (-0.55, 0.55, 0.5, 0.015), (0, 0, 0, 0.03), (0.55, -0.55, -0.5, 0.015)]   # left leg, right leg, left arm, lift

sc = bpy.context.scene
sc.render.engine = 'CYCLES'; sc.cycles.samples = 24; sc.cycles.use_denoising = True
sc.render.resolution_x = sc.render.resolution_y = RES
sc.render.film_transparent = True; sc.render.image_settings.color_mode = 'RGBA'; sc.view_settings.view_transform = 'Standard'
sc.render.use_freestyle = True; sc.render.line_thickness_mode = 'ABSOLUTE'; sc.render.line_thickness = 1.6
fs = sc.view_layers[0].freestyle_settings; ls = fs.linesets[0] if fs.linesets else fs.linesets.new('ink')
ls.linestyle.color = (0.09, 0.07, 0.06); ls.select_by_edge_types = True; ls.select_silhouette = ls.select_border = True; ls.select_crease = False
w = sc.world or bpy.data.worlds.new('W'); sc.world = w; w.use_nodes = True
bg = next(n for n in w.node_tree.nodes if n.type == 'BACKGROUND'); bg.inputs['Color'].default_value = (0.82, 0.86, 0.92, 1); bg.inputs['Strength'].default_value = 1.1
theta = math.radians(45)
cd = bpy.data.cameras.new('cam'); cd.type = 'ORTHO'; cd.ortho_scale = RES / S
cam = bpy.data.objects.new('cam', cd); bpy.context.collection.objects.link(cam)
fwd = Vector((-math.sin(theta) * math.cos(ELEV), math.cos(theta) * math.cos(ELEV), -math.sin(ELEV)))
cam.location = Vector((0, 0, Z0)) - 300 * fwd; cam.rotation_euler = (math.pi / 2 - ELEV, 0, theta); sc.camera = cam
sun = bpy.data.objects.new('sun', bpy.data.lights.new('sun', 'SUN')); bpy.context.collection.objects.link(sun)
sun.data.energy = 3.0; sun.data.angle = math.radians(3); sun.rotation_euler = (math.radians(45), 0, theta + math.radians(70))
for p, (la, ra, aa, lift) in enumerate(POSES):
    hipL.rotation_euler = (0, la, 0); hipR.rotation_euler = (0, ra, 0); shL.rotation_euler = (0, aa, 0); body.location = (0, 0, lift)
    for i in range(N):
        root.rotation_euler = (0, 0, -i * 2 * math.pi / N)
        sc.render.filepath = str(OUT / f'child_{p * N + i:02d}.png')
        bpy.ops.render.render(write_still=True)
print('done', len(POSES) * N)
