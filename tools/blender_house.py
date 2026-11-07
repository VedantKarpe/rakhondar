"""Model Goan houses in Blender and render them as Rakhondar sprites.

    "C:\\Program Files\\Blender Foundation\\Blender 5.1\\blender.exe" -b --python tools/blender_house.py

Writes sprites/house_w{3,4}_v{0,1}_r{0..3}.png (the house with white walls) and ..._m.png (a mask of
the walls, for tinting each house its own colour). w is the width in tiles, v the design (0: a hipped
roof over the balcão; 1: a white gabled pediment over the balcão), r the side the game's view is from.
Units: 1 Blender unit = 1 game tile; heights are given in game pixels (PX).
"""
import bpy, bmesh, math, os, pathlib
from mathutils import Vector

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'sprites'
OUT.mkdir(exist_ok=True)
ELEV = math.asin(0.5)                 # the game's 2:1 view (64 x 32 px tile diamonds): 30 degrees above the ground
PX = 1 / (45.2548 * math.cos(ELEV))   # one game pixel of height, in Blender units
RES, SPRITE = 512, 256                # render at 2x; the game draws it at 256 x 256
ANCHOR_Y = 176                        # where the house's ground centre lands in the 256 px sprite


def hexcol(h, a=1.0):
    h = h.lstrip('#')
    srgb = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return (*[c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4 for c in srgb], a)


def material(name, col, rough=0.8):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    bsdf = next(n for n in m.node_tree.nodes if n.type == 'BSDF_PRINCIPLED')
    bsdf.inputs['Base Color'].default_value = hexcol(col)
    bsdf.inputs['Roughness'].default_value = rough
    return m


def tile_material(name):
    """Mangalore tiles: rows that follow the roof's height, a dark seam under each row, each tile a slightly different red."""
    m = material(name, '#9a4128', 0.85)
    nt = m.node_tree
    bsdf = next(n for n in nt.nodes if n.type == 'BSDF_PRINCIPLED')
    tc = nt.nodes.new('ShaderNodeTexCoord')
    sep = nt.nodes.new('ShaderNodeSeparateXYZ'); nt.links.new(tc.outputs['Object'], sep.inputs[0])
    mul = nt.nodes.new('ShaderNodeMath'); mul.operation = 'MULTIPLY'; mul.inputs[1].default_value = 1 / (2.6 * PX)   # a row every 2.6 px of height
    nt.links.new(sep.outputs['Z'], mul.inputs[0])
    fr = nt.nodes.new('ShaderNodeMath'); fr.operation = 'FRACT'; nt.links.new(mul.outputs[0], fr.inputs[0])
    ramp = nt.nodes.new('ShaderNodeValToRGB')
    els = ramp.color_ramp.elements
    els[0].position = 0.0; els[0].color = hexcol('#4a1a0c')
    els[1].position = 0.22; els[1].color = hexcol('#8a3a22')
    e = els.new(1.0); e.color = hexcol('#b4583a')
    nt.links.new(fr.outputs[0], ramp.inputs['Fac'])
    vor = nt.nodes.new('ShaderNodeTexVoronoi'); vor.inputs['Scale'].default_value = 22
    nt.links.new(tc.outputs['Object'], vor.inputs['Vector'])
    mix = nt.nodes.new('ShaderNodeMix'); mix.data_type = 'RGBA'; mix.blend_type = 'MULTIPLY'; mix.inputs['Factor'].default_value = 0.25
    nt.links.new(ramp.outputs['Color'], mix.inputs['A']); nt.links.new(vor.outputs['Color'], mix.inputs['B'])
    nt.links.new(mix.outputs['Result'], bsdf.inputs['Base Color'])
    bump = nt.nodes.new('ShaderNodeBump'); bump.inputs['Strength'].default_value = 0.8
    nt.links.new(fr.outputs[0], bump.inputs['Height']); nt.links.new(bump.outputs['Normal'], bsdf.inputs['Normal'])
    return m


def box(name, x0, x1, y0, y1, z0, z1, mat):
    bpy.ops.mesh.primitive_cube_add(size=1, location=((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2))
    o = bpy.context.active_object
    o.name = name
    o.scale = (x1 - x0, y1 - y0, z1 - z0)
    bpy.ops.object.transform_apply(scale=True)
    o.data.materials.append(mat)
    return o


def rod(name, p0, p1, r, mat, verts=8):
    """A round bar from p0 to p1: ridge caps along the ridges and hips."""
    p0, p1 = Vector(p0), Vector(p1)
    d = p1 - p0
    bpy.ops.mesh.primitive_cylinder_add(vertices=verts, radius=r, depth=d.length, location=(p0 + p1) / 2)
    o = bpy.context.active_object
    o.name = name
    o.rotation_mode = 'QUATERNION'; o.rotation_quaternion = Vector((0, 0, 1)).rotation_difference(d)
    o.data.materials.append(mat)
    return o


def mesh(name, verts, faces, mat, thick=0.0):
    me = bpy.data.meshes.new(name)
    me.from_pydata(verts, [], faces)
    o = bpy.data.objects.new(name, me); bpy.context.collection.objects.link(o)
    if thick:
        sol = o.modifiers.new('thick', 'SOLIDIFY'); sol.thickness = thick
    o.data.materials.append(mat)
    return o


def hip_roof(name, x0, x1, y0, y1, z, h, mat, cap):
    """A hipped roof (ridge along x) with white-capped edges, ridge tiles along the ridge and hips."""
    inset = min((y1 - y0) / 2, (x1 - x0) / 2)
    ym = (y0 + y1) / 2
    c = [(x0, y0, z), (x1, y0, z), (x1, y1, z), (x0, y1, z)]
    r0, r1 = (x0 + inset, ym, z + h), (x1 - inset, ym, z + h)
    o = mesh(name, c + [r0, r1], [(0, 1, 5, 4), (1, 2, 5), (2, 3, 4, 5), (3, 0, 4)], mat, 0.04)
    for a, b in [(r0, r1), (c[0], r0), (c[3], r0), (c[1], r1), (c[2], r1)]:
        if a != b:
            rod('ridge', a, b, 0.035, cap)
    return o


def build(w, v):
    for o in list(bpy.data.objects):
        bpy.data.objects.remove(o, do_unlink=True)
    for m in list(bpy.data.materials):
        bpy.data.materials.remove(m)
    M = {
        'wall': material('Wall', '#f4f0e6', 0.9), 'white': material('White', '#f8f5ee', 0.6), 'plinth': material('Plinth', '#9a4a2c', 0.95),
        'porch': material('Porch', '#c66a40', 0.9), 'roof': tile_material('Roof'), 'cap': material('Cap', '#7a2e18', 0.8),
        'door': material('Door', '#4a2a18', 0.55), 'pane': material('Pane', '#e6dfc8', 0.3), 'step': material('Step', '#b45d38', 0.95),
        'pot': material('Pot', '#b8562f', 0.9), 'leaf': material('Leaf', '#3f7a32', 0.8), 'flower': material('Flower', '#e0509a', 0.7),
    }
    # map y runs south; Blender y runs north. The front, with its balcão, faces map south (Blender -y).
    hx = w / 2 - 0.1
    yb, yt, yp = -0.55, 1.4, -1.4           # front wall, back wall, front of the porch (Blender y)
    WH = 36 * PX                            # tall walls, as Goan houses have
    box('plinth', -hx, hx, yb, yt, 0, 4 * PX, M['plinth'])
    box('walls', -hx + 0.02, hx - 0.02, yb + 0.02, yt - 0.02, 4 * PX, WH, M['wall'])
    box('band', -hx - 0.01, hx + 0.01, yb - 0.01, yt + 0.01, 4 * PX, 6 * PX, M['white'])     # a white band above the plinth
    box('cornice', -hx - 0.04, hx + 0.04, yb - 0.04, yt + 0.04, WH - 3 * PX, WH, M['white'])
    for cx in (-hx, hx):
        for cy in (yb, yt):
            box('pilaster', cx - 0.08, cx + 0.08, cy - 0.08, cy + 0.08, 4 * PX, WH, M['white'])

    def window(xc, yc, axis, sgn, hw):
        """An oyster-shell window: a white surround, pale panes split by a white cross, and a sill."""
        def b(n, a0, a1, d0, d1, z0, z1, m):   # a = along the wall, d = out from it
            if axis == 'x':
                box(n, xc + a0, xc + a1, yc + sgn * d0 if sgn > 0 else yc + sgn * d1, yc + sgn * d1 if sgn > 0 else yc + sgn * d0, z0, z1, m)
            else:
                box(n, xc + sgn * d0 if sgn > 0 else xc + sgn * d1, xc + sgn * d1 if sgn > 0 else xc + sgn * d0, yc + a0, yc + a1, z0, z1, m)
        b('frame', -hw - 0.06, hw + 0.06, -0.01, 0.03, 9 * PX, 30 * PX, M['white'])
        b('pane', -hw, hw, 0.0, 0.045, 10.5 * PX, 28.5 * PX, M['pane'])
        b('mullion', -0.015, 0.015, 0.0, 0.055, 10.5 * PX, 28.5 * PX, M['white'])
        b('transom', -hw, hw, 0.0, 0.055, 19 * PX, 20 * PX, M['white'])
        b('sill', -hw - 0.08, hw + 0.08, -0.01, 0.09, 8 * PX, 9.5 * PX, M['white'])

    if w >= 4:
        window(-hx + 0.55, yb, 'x', -1, 0.2); window(hx - 0.55, yb, 'x', -1, 0.2)
    window(0, yt, 'x', 1, 0.24)
    window(hx, (yb + yt) / 2, 'y', 1, 0.24); window(-hx, (yb + yt) / 2, 'y', -1, 0.24)
    # the front door, in a white arched surround
    box('doorframe', -0.25, 0.25, yb - 0.03, yb + 0.01, 4 * PX, 30 * PX, M['white'])
    box('door', -0.17, 0.17, yb - 0.045, yb, 5 * PX, 27 * PX, M['door'])
    box('doorline', -0.006, 0.006, yb - 0.05, yb, 5 * PX, 27 * PX, M['cap'])
    # the balcão: a raised porch with seats along its sides and front, two pillars, steps and flowerpots
    pw = min(2.2, w - 1.4) / 2
    box('porch', -pw, pw, yp, yb, 0, 5 * PX, M['porch'])
    for x0, x1, y0, y1 in [(-pw, -pw + 0.16, yp, yb), (pw - 0.16, pw, yp, yb), (-pw, -0.3, yp, yp + 0.16), (0.3, pw, yp, yp + 0.16)]:
        box('seat', x0, x1, y0, y1, 5 * PX, 12 * PX, M['wall'])
        box('seattop', x0 - 0.015, x1 + 0.015, y0 - 0.015, y1 + 0.015, 11 * PX, 12.5 * PX, M['white'])
    for px in (-pw + 0.08, pw - 0.08):
        box('pillar', px - 0.07, px + 0.07, yp + 0.01, yp + 0.15, 12 * PX, 30 * PX, M['white'])
        box('capital', px - 0.09, px + 0.09, yp - 0.01, yp + 0.17, 29 * PX, 30.5 * PX, M['white'])
    box('step1', -0.3, 0.3, yp - 0.14, yp, 0, 3.4 * PX, M['step'])
    box('step2', -0.3, 0.3, yp - 0.26, yp - 0.12, 0, 1.7 * PX, M['step'])
    for px in (-pw + 0.08, pw - 0.08):   # flowerpots on the front corners of the seats
        bpy.ops.mesh.primitive_cone_add(vertices=10, radius1=0.05, radius2=0.075, depth=5 * PX, location=(px, yp + 0.08, 12.5 * PX + 2.5 * PX))
        bpy.context.active_object.data.materials.append(M['pot'])
        bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=1, radius=0.085, location=(px, yp + 0.08, 12.5 * PX + 7 * PX))
        bpy.context.active_object.data.materials.append(M['leaf'])
        bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=1, radius=0.03, location=(px + 0.04, yp + 0.03, 12.5 * PX + 9 * PX))
        bpy.context.active_object.data.materials.append(M['flower'])

    hip_roof('roof', -hx - 0.09, hx + 0.09, yb - 0.09, yt + 0.09, WH, 16 * PX, M['roof'], M['cap'])
    # white fascia boards under the eaves
    e = 0.09
    for x0, x1, y0, y1 in [(-hx - e, hx + e, yb - e - 0.02, yb - e + 0.02), (-hx - e, hx + e, yt + e - 0.02, yt + e + 0.02),
                           (-hx - e - 0.02, -hx - e + 0.02, yb - e, yt + e), (hx + e - 0.02, hx + e + 0.02, yb - e, yt + e)]:
        box('fascia', x0, x1, y0, y1, WH - 2 * PX, WH + 0.5 * PX, M['white'])
    if v == 0:
        hip_roof('porchroof', -pw - 0.1, pw + 0.1, yp - 0.1, yb + 0.05, 30 * PX, 6 * PX, M['roof'], M['cap'])
    else:
        # a white gabled pediment over the balcão: wall-coloured infill, white edges, a round window, a cross-less finial
        g0, g1, gz, gh = -pw - 0.1, pw + 0.1, 30 * PX, 14 * PX
        gy = yp - 0.02
        mesh('pediment', [(g0, gy, gz), (g1, gy, gz), (0, gy, gz + gh)], [(0, 1, 2)], M['wall'], 0.06)
        mesh('porchroof_l', [(g0 - 0.04, gy - 0.05, gz - 0.01), (0, gy - 0.05, gz + gh + 0.01), (0, yb + 0.05, gz + gh + 0.01), (g0 - 0.04, yb + 0.05, gz - 0.01)], [(0, 1, 2, 3)], M['roof'], 0.03)
        mesh('porchroof_r', [(0, gy - 0.05, gz + gh + 0.01), (g1 + 0.04, gy - 0.05, gz - 0.01), (g1 + 0.04, yb + 0.05, gz - 0.01), (0, yb + 0.05, gz + gh + 0.01)], [(0, 1, 2, 3)], M['roof'], 0.03)
        rod('gable_l', (g0 - 0.03, gy - 0.07, gz), (0, gy - 0.07, gz + gh + 0.02), 0.03, M['white'])
        rod('gable_r', (g1 + 0.03, gy - 0.07, gz), (0, gy - 0.07, gz + gh + 0.02), 0.03, M['white'])
        box('gable_base', g0 - 0.04, g1 + 0.04, gy - 0.09, gy + 0.02, gz - 1.5 * PX, gz + 0.5 * PX, M['white'])
        bpy.ops.mesh.primitive_cylinder_add(vertices=16, radius=0.1, depth=0.04, location=(0, gy - 0.07, gz + gh * 0.42), rotation=(math.pi / 2, 0, 0))
        bpy.context.active_object.data.materials.append(M['white'])
        bpy.ops.mesh.primitive_cylinder_add(vertices=16, radius=0.065, depth=0.05, location=(0, gy - 0.08, gz + gh * 0.42), rotation=(math.pi / 2, 0, 0))
        bpy.context.active_object.data.materials.append(M['pane'])
        box('finial', -0.03, 0.03, gy - 0.1, gy - 0.04, gz + gh, gz + gh + 4 * PX, M['white'])
    return M


def setup_scene():
    sc = bpy.context.scene
    sc.render.engine = 'CYCLES'
    sc.cycles.samples = 96
    sc.cycles.use_denoising = False       # denoising smears the small details; plenty of samples instead
    sc.cycles.filter_width = 1.0          # a narrow pixel filter keeps edges crisp
    sc.render.resolution_x = sc.render.resolution_y = RES
    sc.render.film_transparent = True
    sc.render.image_settings.file_format = 'PNG'
    sc.render.image_settings.color_mode = 'RGBA'
    sc.view_settings.view_transform = 'Standard'
    sc.render.use_freestyle = True        # ink outlines, like the game's hand-drawn style
    sc.render.line_thickness_mode = 'ABSOLUTE'
    sc.render.line_thickness = 1.7
    fs = sc.view_layers[0].freestyle_settings
    ls = fs.linesets[0] if fs.linesets else fs.linesets.new('ink')
    ls.linestyle.color = (0.10, 0.08, 0.06)
    ls.select_by_visibility = True; ls.select_by_edge_types = True
    ls.select_silhouette = ls.select_border = ls.select_external_contour = True
    ls.select_crease = False
    w = sc.world or bpy.data.worlds.new('World'); sc.world = w
    w.use_nodes = True
    bg = next(n for n in w.node_tree.nodes if n.type == 'BACKGROUND')
    bg.inputs['Color'].default_value = (0.75, 0.78, 0.85, 1); bg.inputs['Strength'].default_value = 0.6
    return sc


def rig(sc, rot):
    """Camera and sun turn together, so the light always falls the same way on screen."""
    for o in [o for o in bpy.data.objects if o.type in ('CAMERA', 'LIGHT', 'EMPTY')]:
        bpy.data.objects.remove(o, do_unlink=True)
    theta = math.radians(45 + 90 * rot)
    cam_d = bpy.data.cameras.new('cam'); cam_d.type = 'ORTHO'
    cam_d.ortho_scale = RES / (2 * 45.2548)        # 1 tile across = 64 game px = 128 render px
    cam_d.shift_y = (ANCHOR_Y - SPRITE / 2) / SPRITE
    cam = bpy.data.objects.new('cam', cam_d); bpy.context.collection.objects.link(cam)
    fwd = (-math.sin(theta) * math.cos(ELEV), math.cos(theta) * math.cos(ELEV), -math.sin(ELEV))
    cam.location = tuple(-20 * f for f in fwd)
    cam.rotation_euler = (math.pi / 2 - ELEV, 0, theta)
    sc.camera = cam
    sun_d = bpy.data.lights.new('sun', 'SUN'); sun_d.energy = 2.8; sun_d.angle = math.radians(4)
    sun = bpy.data.objects.new('sun', sun_d); bpy.context.collection.objects.link(sun)
    sun.rotation_euler = (math.radians(42), 0, theta + math.radians(60))   # from high on the screen's left


def render(path, mask, M):
    sc = bpy.context.scene
    saved = {}
    if mask:   # walls as flat white; everything else cut out
        sc.render.use_freestyle = False
        samples = sc.cycles.samples; sc.cycles.samples = 8
        for k, m in M.items():
            nt = m.node_tree
            out = next(n for n in nt.nodes if n.type == 'OUTPUT_MATERIAL')
            saved[k] = out.inputs['Surface'].links[0].from_socket
            node = nt.nodes.new('ShaderNodeEmission' if k == 'wall' else 'ShaderNodeHoldout')
            if k == 'wall': node.inputs['Color'].default_value = (1, 1, 1, 1)
            nt.links.new(node.outputs[0], out.inputs['Surface'])
    sc.render.filepath = str(path)
    bpy.ops.render.render(write_still=True)
    if mask:
        for k, m in M.items():
            out = next(n for n in m.node_tree.nodes if n.type == 'OUTPUT_MATERIAL')
            m.node_tree.links.new(saved[k], out.inputs['Surface'])
        sc.render.use_freestyle = True
        sc.cycles.samples = samples


sc = setup_scene()
QUICK = os.environ.get('RK_QUICK')   # set it to render just the 4-wide houses from one side, to check a change
for w in ((4,) if QUICK else (3, 4)):
    for v in (0, 1):
        M = build(w, v)
        for rot in ((0,) if QUICK else range(4)):
            rig(sc, rot)
            render(OUT / f'house_w{w}_v{v}_r{rot}.png', False, M)
            render(OUT / f'house_w{w}_v{v}_r{rot}_m.png', True, M)
            print('rendered', w, v, rot, flush=True)
print('done')
