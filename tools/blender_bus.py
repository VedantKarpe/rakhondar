"""The Kadamba bus (Kadamba Transport Corporation, Goa), modelled in Blender for Rakhondar from a reference photo.

    "C:\\Program Files\\Blender Foundation\\Blender 5.1\\blender.exe" -b --python tools/blender_bus.py
    python tools/pack_sheet.py bus 24 5 288

A Tata front-engine city bus in the corporation's livery: a cream body over a blue skirt with a thin yellow line between
them, a split windscreen under a KADAMBA destination board, a black Tata grille between two square headlamps, a blue
bumper and a yellow number plate (GA 03), a row of sliding-window side panes, red and blue chevrons pointing forward
behind the cab, an advertisement panel on the side, big mirrors on stalks, a roof luggage rack with a bundle on it, and
muddy rust-brown wheel hubs. Metres; x = forward, y = left (the door side, as Goa drives on the left), z up; origin on the
ground under the middle of the bus. Rendered at 24 headings, one every 15 degrees, in the game's 2:1 view.
"""
import bpy, math, os, pathlib
from mathutils import Vector

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'sprites' / 'bus_frames'; OUT.mkdir(parents=True, exist_ok=True)
ELEV = math.asin(0.5)
S = 44.0             # px per metre while rendering (packed frames are half that)
RES = 576
N = int(os.environ.get('RK_N', 24))


def col(h):
    h = h.lstrip('#'); c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return (*[v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4 for v in c], 1)


M = {}
def mat(h, rough=0.5, metal=0.0, emit=0.0):
    k = (h, rough, metal, emit)
    if k in M: return M[k]
    m = bpy.data.materials.new(h); m.use_nodes = True
    b = next(n for n in m.node_tree.nodes if n.type == 'BSDF_PRINCIPLED')
    b.inputs['Base Color'].default_value = col(h); b.inputs['Roughness'].default_value = rough; b.inputs['Metallic'].default_value = metal
    if emit: b.inputs['Emission Color'].default_value = col(h); b.inputs['Emission Strength'].default_value = emit
    M[k] = m; return m


CREAM, BLUE, YELLOW, RED, CHEV = mat('#eee3c4', 0.55), mat('#3f80c2', 0.5), mat('#f1c232', 0.4), mat('#cf3a2c', 0.5), mat('#2c64b0', 0.5)
BLACK, GLASS, CHROME, RUST, TYRE = mat('#1f1f24', 0.5), mat('#26323b', 0.12, 0.2), mat('#cfd3d9', 0.25, 0.9), mat('#8b5e3c', 0.9), mat('#141416', 0.85)
WHITE, LAMP, AMBER, TAIL, SACK = mat('#f6f4ee', 0.5), mat('#fff3cf', 0.3, 0, 2.5), mat('#e9a020', 0.4, 0, 1.0), mat('#e03030', 0.4, 0, 1.2), mat('#b78e60', 0.9)
UNDER = mat('#2a2a30', 0.8)

for o in list(bpy.data.objects): bpy.data.objects.remove(o, do_unlink=True)
bpy.ops.object.empty_add(location=(0, 0, 0)); root = bpy.context.active_object


def own(o, m=None):
    if m is not None: o.data.materials.append(m)
    o.parent = root; return o


def box(c, sz, m, rot=(0, 0, 0), bevel=0.0):
    bpy.ops.mesh.primitive_cube_add(size=1, location=c, rotation=rot)
    o = bpy.context.active_object; o.scale = sz
    if bevel:
        bpy.ops.object.transform_apply(scale=True)
        b = o.modifiers.new('b', 'BEVEL'); b.width = bevel; b.segments = 2
    return own(o, m)


def cyl(p0, p1, r, m, n=12):
    p0, p1 = Vector(p0), Vector(p1); d = p1 - p0
    bpy.ops.mesh.primitive_cylinder_add(vertices=n, radius=r, depth=d.length, location=(p0 + p1) / 2)
    o = bpy.context.active_object; o.rotation_mode = 'QUATERNION'; o.rotation_quaternion = Vector((0, 0, 1)).rotation_difference(d)
    return own(o, m)


def ell(c, sc, m):
    bpy.ops.mesh.primitive_uv_sphere_add(radius=1, location=c, segments=20, ring_count=10)
    o = bpy.context.active_object; o.scale = sc; return own(o, m)


def text(body, c, size, m, rot=(math.pi / 2, 0, math.pi / 2)):
    bpy.ops.object.text_add(location=c, rotation=rot)
    o = bpy.context.active_object; o.data.body = body; o.data.size = size; o.data.align_x = 'CENTER'; o.data.align_y = 'CENTER'; o.data.extrude = 0.004
    return own(o, m)


def flat(points, y, m, thick=0.012):
    """A flat shape in the x-z plane at height y (a side panel); points are (x, z)."""
    me = bpy.data.meshes.new('flat'); me.from_pydata([(x, y, z) for x, z in points], [], [tuple(range(len(points)))])
    o = bpy.data.objects.new('flat', me); bpy.context.collection.objects.link(o)
    o.modifiers.new('s', 'SOLIDIFY').thickness = thick; return own(o, m)


LEN0, LEN1 = -4.7, 3.9          # the passenger body, rear to front
HW = 1.22                       # half width
AXR, AXF, WR = -2.95, 3.05, 0.52
# ---- underbody, wheels ----
box(((LEN0 + 4.9) / 2, 0, 0.62), (9.5, 2.1, 0.5), UNDER)
for ax in (AXR, AXF):
    for side in (-1, 1):
        bpy.ops.mesh.primitive_cylinder_add(vertices=28, radius=WR, depth=0.3, location=(ax, side * 1.0, WR), rotation=(math.pi / 2, 0, 0)); own(bpy.context.active_object, TYRE)
        bpy.ops.mesh.primitive_cylinder_add(vertices=24, radius=0.30, depth=0.32, location=(ax, side * 1.0, WR), rotation=(math.pi / 2, 0, 0)); own(bpy.context.active_object, RUST)
        bpy.ops.mesh.primitive_cylinder_add(vertices=12, radius=0.08, depth=0.36, location=(ax, side * 1.0, WR), rotation=(math.pi / 2, 0, 0)); own(bpy.context.active_object, CHROME)
# ---- the blue skirt (open over the wheels), the arch lips, the cream body ----
for x0, x1 in ((LEN0, AXR - 0.72), (AXR + 0.72, AXF - 0.72), (AXF + 0.72, LEN1)):
    box(((x0 + x1) / 2, 0, 0.82), (x1 - x0, 2 * HW, 0.76), BLUE, bevel=0.04)
for ax in (AXR, AXF): box((ax, 0, 1.17), (1.5, 2 * HW, 0.18), BLUE, bevel=0.04)
box(((LEN0 + LEN1) / 2, 0, 2.15), (LEN1 - LEN0, 2 * HW - 0.04, 1.8), CREAM, bevel=0.10)    # body above the waist
box(((LEN0 + LEN1) / 2, 0, 3.02), (LEN1 - LEN0 - 0.2, 2 * HW - 0.3, 0.12), CREAM, bevel=0.05)  # roof
box((3.62, 0, 3.12), (0.7, 1.9, 0.14), CREAM, bevel=0.05)                                     # the raised cap over the cab
for side in (-1, 1):
    box(((LEN0 + LEN1) / 2, side * (HW + 0.002), 1.27), (LEN1 - LEN0 - 0.1, 0.01, 0.05), YELLOW)   # the thin yellow line
# ---- windows: a row of sliding panes along each side ----
for side in (-1, 1):
    y = side * (HW + 0.005)
    for k in range(8):
        x = -4.25 + k * 0.92
        box((x, y, 2.28), (0.84, 0.03, 0.80), CHROME)
        box((x, y + side * 0.012, 2.28), (0.76, 0.03, 0.70), GLASS)
    box((-0.45, y, 2.30), (7.5, 0.04, 0.035), CHROME)                                          # the rail across the panes
# ---- side details: ad panel, chevrons, the door ----
for side in (-1, 1):
    y = side * (HW + 0.004)
    box((-1.5, y, 1.62), (2.3, 0.012, 0.46), WHITE)
    box((-0.45, y + side * 0.002, 1.62), (0.4, 0.012, 0.40), RED)
    for x0, m_ in ((1.55, CHEV), (1.85, RED)):
        flat([(x0, 1.38), (x0 + 0.30, 1.66), (x0, 1.94), (x0 - 0.13, 1.94), (x0 + 0.17, 1.66), (x0 - 0.13, 1.38)], y + side * 0.004, m_)
box((3.0, HW + 0.01, 1.62), (0.85, 0.03, 1.9), GLASS)                                          # the door, on the left
box((3.0, HW + 0.012, 0.62), (0.85, 0.03, 0.2), BLUE)
# ---- the front: windscreen, destination board, nose, grille, lamps, bumper, plate ----
box((3.93, 0, 2.30), (0.06, 2.34, 1.0), CREAM)
for side in (-1, 1):
    box((3.95, side * 0.55, 2.30), (0.04, 0.98, 0.88), CHROME)
    box((3.96, side * 0.55, 2.30), (0.04, 0.88, 0.78), GLASS)
box((3.98, 0, 2.93), (0.07, 1.5, 0.26), WHITE)                                                 # the board
text('KADAMBA', (4.03, 0.08, 2.93), 0.17, BLACK)
flat([(0, 0), (0.1, 0.1), (0, 0.2)], 0, BLUE) if False else None
box((4.03, -0.60, 2.93), (0.02, 0.16, 0.2), CHEV)
box((4.40, 0, 1.28), (1.0, 2.3, 1.06), CREAM, bevel=0.07)                                      # the short nose
box((4.40, 0, 0.78), (1.0, 2.3, 0.45), BLUE, bevel=0.05)
box((4.92, 0, 1.02), (0.05, 1.45, 0.62), BLACK)                                                # grille
for k in range(6): box((4.95, 0, 0.80 + k * 0.1), (0.025, 1.4, 0.022), CHROME)
ell((4.96, 0, 1.02), (0.02, 0.17, 0.17), CHROME)                                               # the Tata badge
for side in (-1, 1):
    box((4.93, side * 0.98, 1.00), (0.07, 0.34, 0.30), CHROME)
    box((4.96, side * 0.98, 1.00), (0.04, 0.28, 0.24), LAMP)
    box((4.93, side * 1.07, 1.42), (0.05, 0.18, 0.1), AMBER)
box((5.0, 0, 0.56), (0.18, 2.36, 0.2), BLUE, bevel=0.04)                                       # the bumper
box((5.01, 0, 0.67), (0.10, 2.36, 0.025), WHITE)
box((5.03, -0.62, 0.77), (0.03, 0.42, 0.2), YELLOW)                                            # GA 03 plate
text('GA03 X0050', (5.052, -0.62, 0.77), 0.065, BLACK)
for side in (-1, 1):                                                                           # the big mirrors
    cyl((3.95, side * 1.2, 2.5), (3.95, side * 1.5, 2.5), 0.015, BLACK, 6)
    box((3.98, side * 1.52, 2.45), (0.06, 0.2, 0.42), BLACK)
# ---- the back ----
box((LEN0 - 0.02, 0, 2.2), (0.05, 2.0, 0.7), GLASS)
box((LEN0 - 0.03, 0, 0.82), (0.06, 2.4, 0.7), BLUE, bevel=0.04)
for side in (-1, 1): box((LEN0 - 0.06, side * 0.95, 1.25), (0.05, 0.22, 0.28), TAIL)
# ---- roof: the luggage rack and the bundle on it ----
for side in (-1, 1):
    cyl((-3.6, side * 0.92, 3.55), (0.0, side * 0.92, 3.55), 0.02, BLACK, 6)
    for x in (-3.6, -2.4, -1.2, 0.0): cyl((x, side * 0.92, 3.09), (x, side * 0.92, 3.55), 0.018, BLACK, 6)
for x in (-3.6, -1.8, 0.0): cyl((x, -0.92, 3.55), (x, 0.92, 3.55), 0.018, BLACK, 6)
ell((-0.7, 0.1, 3.5), (0.7, 0.6, 0.38), SACK)

# ---- camera, light, render ----
sc = bpy.context.scene
sc.render.engine = 'CYCLES'; sc.cycles.samples = 24; sc.cycles.use_denoising = True
sc.render.resolution_x = sc.render.resolution_y = RES
sc.render.film_transparent = True; sc.render.image_settings.color_mode = 'RGBA'; sc.view_settings.view_transform = 'Standard'
sc.render.use_freestyle = True; sc.render.line_thickness_mode = 'ABSOLUTE'; sc.render.line_thickness = 1.3
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
    sc.render.filepath = str(OUT / f'bus_{i:02d}.png')
    bpy.ops.render.render(write_still=True)
print('done', N)
