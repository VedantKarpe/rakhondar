"""The Goan motorcycle pilot, modelled in Blender for Rakhondar from a reference photo.

    "C:\\Program Files\\Blender Foundation\\Blender 5.1\\blender.exe" -b --python tools/blender_pilot.py
    python tools/pack_pilot.py        # packs the frames into sprites/pilot_sheet.png

A commuter motorcycle in the Hero Splendor manner, as the pilots ride them in Panjim: black body with purple and white
stripes on the tank and side panel, yellow front and rear mudguards, a black headlamp visor with round mirrors, silver
alloy wheels, a chrome exhaust and a chrome rack behind the seat. The pilot wears a pink full-sleeved shirt, grey
trousers, a black full-face helmet with a clear visor, a face mask and trainers, and sits leaning to the handlebars. The
passenger is the child, drawn by the game. Metres; x = the bike's forward, y = its left, z up; origin on the ground under
the middle of the bike. Rendered at 16 headings, one every 22.5 degrees, in the game's 2:1 view; the game picks the frame
from the vehicle's heading and turns it with the view.
"""
import bpy, math, os, pathlib
from mathutils import Vector

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'sprites' / 'pilot_frames'; OUT.mkdir(parents=True, exist_ok=True)
ELEV = math.asin(0.5)
S = 120.0            # px per metre while rendering (packed frames are half that)
RES = 448
N = int(os.environ.get('RK_N', 16))


def col(h):
    h = h.lstrip('#'); c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return (*[v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4 for v in c], 1)


M = {}
def mat(h, rough=0.55, metal=0.0, emit=0.0):
    k = (h, rough, metal, emit)
    if k in M: return M[k]
    m = bpy.data.materials.new(h); m.use_nodes = True
    b = next(n for n in m.node_tree.nodes if n.type == 'BSDF_PRINCIPLED')
    b.inputs['Base Color'].default_value = col(h); b.inputs['Roughness'].default_value = rough; b.inputs['Metallic'].default_value = metal
    if emit: b.inputs['Emission Color'].default_value = col(h); b.inputs['Emission Strength'].default_value = emit
    M[k] = m; return m


BLACK, PURPLE, WHITE, YELLOW = mat('#26262e', 0.35), mat('#5a3d9c', 0.35), mat('#f1eff4', 0.4), mat('#f2bf1e', 0.3)
CHROME, ALLOY, TYRE = mat('#cfd3da', 0.22, 0.9), mat('#dde0e4', 0.3, 0.7), mat('#131315', 0.8)
DARK, FIN = mat('#3a3a42', 0.5, 0.3), mat('#8f949c', 0.4, 0.6)
RED, LAMP = mat('#e03030', 0.4, 0, 1.5), mat('#fff6d8', 0.3, 0, 3.0)
SKIN, PINK, GREY, SHOE, SOLE = mat('#9a6a44', 0.7), mat('#e9a2c3', 0.8), mat('#8c8e96', 0.85), mat('#2a2a32', 0.7), mat('#ecebea', 0.6)
HELMET, VISOR, MASK = mat('#15151a', 0.25), mat('#a9c2d2', 0.1), mat('#e5a336', 0.8)

for o in list(bpy.data.objects): bpy.data.objects.remove(o, do_unlink=True)
bpy.ops.object.empty_add(location=(0, 0, 0)); root = bpy.context.active_object


def own(o, m=None):
    if m is not None: o.data.materials.append(m)
    o.parent = root; return o


def smooth(o):
    try: bpy.ops.object.shade_smooth()
    except Exception: pass


def ell(c, sc, m, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_uv_sphere_add(radius=1, location=c, segments=28, ring_count=14)
    o = bpy.context.active_object; o.scale = sc; o.rotation_euler = rot; smooth(o); return own(o, m)


def box(c, sz, m, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_cube_add(size=1, location=c, rotation=rot)
    o = bpy.context.active_object; o.scale = sz; return own(o, m)


def cyl(p0, p1, r, m, n=12):
    p0, p1 = Vector(p0), Vector(p1); d = p1 - p0
    bpy.ops.mesh.primitive_cylinder_add(vertices=n, radius=r, depth=d.length, location=(p0 + p1) / 2)
    o = bpy.context.active_object; o.rotation_mode = 'QUATERNION'; o.rotation_quaternion = Vector((0, 0, 1)).rotation_difference(d)
    smooth(o); return own(o, m)


def arc_strip(cx, cz, r, a0, a1, width, m, thick=0.012, y=0.0):
    """A curved mudguard: an arc in the x-z plane (angles from straight up, forward positive), `width` wide in y."""
    verts, faces, n = [], [], 14
    for i in range(n + 1):
        a = math.radians(a0 + (a1 - a0) * i / n); x, z = cx + math.sin(a) * r, cz + math.cos(a) * r
        verts += [(x, y - width / 2, z), (x, y + width / 2, z)]
    for i in range(n): faces.append((2 * i, 2 * i + 1, 2 * i + 3, 2 * i + 2))
    me = bpy.data.meshes.new('fender'); me.from_pydata(verts, [], faces)
    o = bpy.data.objects.new('fender', me); bpy.context.collection.objects.link(o)
    o.modifiers.new('s', 'SOLIDIFY').thickness = thick; return own(o, m)


# ---- the motorcycle ----
WB_R, WB_F, WR = -0.62, 0.66, 0.31            # rear and front axle x, wheel radius
for ax in (WB_R, WB_F):
    bpy.ops.mesh.primitive_torus_add(major_radius=0.265, minor_radius=0.05, location=(ax, 0, WR), rotation=(math.pi / 2, 0, 0)); o = bpy.context.active_object; smooth(o); own(o, TYRE)
    bpy.ops.mesh.primitive_cylinder_add(vertices=32, radius=0.225, depth=0.035, location=(ax, 0, WR), rotation=(math.pi / 2, 0, 0)); own(bpy.context.active_object, ALLOY)
    for k in range(5):      # alloy spokes standing proud of the disc
        a = k * 2 * math.pi / 5 + 0.3
        for side in (-1, 1): cyl((ax, side * 0.02, WR), (ax + math.cos(a) * 0.21, side * 0.02, WR + math.sin(a) * 0.21), 0.017, DARK, 6)
    cyl((ax, -0.06, WR), (ax, 0.06, WR), 0.04, CHROME, 12)
arc_strip(WB_R, WR, 0.36, -95, 70, 0.13, YELLOW)                  # rear mudguard
arc_strip(WB_F, WR, 0.35, -50, 85, 0.12, YELLOW, y=0.0)            # front mudguard
box((WB_R - 0.30, 0, 0.55), (0.14, 0.12, 0.05), YELLOW, (0, 0.5, 0))   # the rear mudguard's flick
# frame, engine, tank, panels, seat
ell((0.12, 0, 0.30), (0.26, 0.11, 0.17), DARK)
for k in range(4): box((0.0 + k * 0.1 - 0.05, 0.12, 0.27), (0.025, 0.04, 0.2), FIN)
box((0.12, 0, 0.44), (0.3, 0.1, 0.07), BLACK)
ell((0.28, 0, 0.83), (0.30, 0.15, 0.13), BLACK)                    # tank
for side in (-1, 1):
    ell((0.28, side * 0.115, 0.84), (0.25, 0.05, 0.085), PURPLE)
    ell((0.28, side * 0.125, 0.855), (0.2, 0.03, 0.035), WHITE)
box((-0.12, 0, 0.62), (0.52, 0.27, 0.22), BLACK)                   # side panels
for side in (-1, 1):
    box((-0.12, side * 0.138, 0.64), (0.40, 0.012, 0.07), PURPLE)
    box((-0.1, side * 0.140, 0.585), (0.30, 0.01, 0.025), WHITE)
box((-0.26, 0, 0.78), (0.68, 0.25, 0.085), BLACK)                  # the long seat
box((-0.64, 0, 0.74), (0.10, 0.22, 0.10), BLACK)
# front end: fork, headlamp visor, bars, mirrors
for side in (-1, 1):
    cyl((0.48, side * 0.085, 1.00), (0.67, side * 0.085, WR + 0.03), 0.026, CHROME)
    cyl((0.60, side * 0.085, 0.69), (0.68, side * 0.085, 0.30), 0.036, DARK)
ell((0.60, 0, 1.03), (0.17, 0.19, 0.14), BLACK)                    # the headlamp visor
ell((0.74, 0, 0.99), (0.07, 0.115, 0.095), LAMP)
cyl((0.50, -0.34, 1.07), (0.50, 0.34, 1.07), 0.016, BLACK)
for side in (-1, 1):
    cyl((0.50, side * 0.30, 1.07), (0.50, side * 0.38, 1.07), 0.024, BLACK)    # grips
    cyl((0.50, side * 0.28, 1.08), (0.40, side * 0.34, 1.26), 0.008, CHROME, 6)
    ell((0.40, side * 0.34, 1.28), (0.035, 0.07, 0.055), BLACK, (0, 0.5, 0))   # round mirrors
# exhaust, shocks, chain guard, rack, tail light
cyl((0.15, -0.16, 0.20), (-0.55, -0.17, 0.30), 0.045, CHROME)
cyl((-0.30, -0.17, 0.30), (-0.88, -0.17, 0.35), 0.065, CHROME, 14)
for side in (-1, 1): cyl((-0.52, side * 0.14, 0.64), (-0.66, side * 0.14, 0.33), 0.022, CHROME)
for side in (-1, 1): cyl((-0.68, side * 0.12, 0.80), (-0.98, side * 0.12, 0.83), 0.014, CHROME, 6)
cyl((-0.97, -0.12, 0.83), (-0.97, 0.12, 0.83), 0.014, CHROME, 6)
cyl((-0.82, -0.12, 0.815), (-0.82, 0.12, 0.815), 0.014, CHROME, 6)
box((-0.96, 0, 0.64), (0.05, 0.13, 0.05), RED)

# ---- the pilot ----
def limb(p0, p1, r, m): return cyl(p0, p1, r, m, 10)
ell((0.07, 0, 1.17), (0.17, 0.21, 0.30), PINK, (0, 0.38, 0))                       # torso, leaning to the bars
ell((0.20, 0, 1.34), (0.14, 0.27, 0.12), PINK, (0, 0.35, 0))                       # shoulders
ell((-0.02, 0, 0.88), (0.20, 0.19, 0.12), GREY)                                    # seat
for side in (-1, 1):
    limb((0.19, side * 0.22, 1.34), (0.38, side * 0.27, 1.14), 0.052, PINK)       # upper arm
    limb((0.38, side * 0.27, 1.14), (0.62, side * 0.30, 1.02), 0.045, PINK)       # forearm
    ell((0.64, side * 0.30, 1.02), (0.05, 0.04, 0.045), SKIN)                      # hand on the grip
    limb((-0.02, side * 0.14, 0.86), (0.34, side * 0.18, 0.78), 0.085, GREY)       # thigh
    limb((0.34, side * 0.18, 0.78), (0.22, side * 0.20, 0.34), 0.062, GREY)        # shin
    box((0.27, side * 0.20, 0.285), (0.27, 0.10, 0.085), SHOE)                     # trainer
    box((0.27, side * 0.20, 0.245), (0.28, 0.105, 0.025), SOLE)
cyl((0.27, 0, 1.40), (0.30, 0, 1.50), 0.055, SKIN, 10)                              # neck
ell((0.31, 0, 1.60), (0.18, 0.155, 0.165), HELMET)                                 # full-face helmet
ell((0.37, 0, 1.51), (0.11, 0.135, 0.085), HELMET)                                 # chin guard
ell((0.405, 0, 1.585), (0.10, 0.135, 0.07), VISOR)                                 # the clear visor
ell((0.425, 0, 1.495), (0.045, 0.10, 0.06), MASK)                                  # face mask
box((0.32, 0, 1.745), (0.13, 0.04, 0.012), WHITE, (0, 0.1, 0))                     # a white stripe on the helmet

# ---- camera, light, render ----
sc = bpy.context.scene
sc.render.engine = 'CYCLES'; sc.cycles.samples = 24; sc.cycles.use_denoising = True
sc.render.resolution_x = sc.render.resolution_y = RES
sc.render.film_transparent = True; sc.render.image_settings.color_mode = 'RGBA'; sc.view_settings.view_transform = 'Standard'
sc.render.use_freestyle = True; sc.render.line_thickness_mode = 'ABSOLUTE'; sc.render.line_thickness = 1.2
fs = sc.view_layers[0].freestyle_settings; ls = fs.linesets[0] if fs.linesets else fs.linesets.new('ink')
ls.linestyle.color = (0.09, 0.07, 0.06); ls.select_by_edge_types = True; ls.select_silhouette = ls.select_border = True; ls.select_crease = False
w = sc.world or bpy.data.worlds.new('W'); sc.world = w; w.use_nodes = True
bg = next(n for n in w.node_tree.nodes if n.type == 'BACKGROUND'); bg.inputs['Color'].default_value = (0.82, 0.86, 0.92, 1); bg.inputs['Strength'].default_value = 1.0
theta = math.radians(45)
cd = bpy.data.cameras.new('cam'); cd.type = 'ORTHO'; cd.ortho_scale = RES / S
cam = bpy.data.objects.new('cam', cd); bpy.context.collection.objects.link(cam)
fwd = (-math.sin(theta) * math.cos(ELEV), math.cos(theta) * math.cos(ELEV), -math.sin(ELEV))
cam.location = tuple(-300 * f for f in fwd); cam.rotation_euler = (math.pi / 2 - ELEV, 0, theta); sc.camera = cam
sun = bpy.data.objects.new('sun', bpy.data.lights.new('sun', 'SUN')); bpy.context.collection.objects.link(sun)
sun.data.energy = 3.2; sun.data.angle = math.radians(3); sun.rotation_euler = (math.radians(45), 0, theta + math.radians(70))
for i in range(N):
    h = i * 2 * math.pi / N                    # the game's heading: x east, y south; Blender's y is north, so turn the other way
    root.rotation_euler = (0, 0, -h)
    sc.render.filepath = str(OUT / f'pilot_{i:02d}.png')
    bpy.ops.render.render(write_still=True)
print('done', N)
