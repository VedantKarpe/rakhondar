"""Export a Rakhondar Blender model as a .glb for the three.js game, instead of rendering its sprite sheet.

    "C:\\Program Files\\Blender Foundation\\Blender 5.1\\blender.exe" -b --python tools/blender_export_glb.py -- pilot

Runs tools/blender_<name>.py up to where it sets up the render, undoes the sprite-only height stretch, and writes
web/public/models/<name>.glb (metres, Y up, the model's forward along +X).
"""
import bpy, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
args = sys.argv[sys.argv.index('--') + 1:]
name = args[0]; outname = args[1] if len(args) > 1 else name   # e.g. landmarks imb (with RK_MODEL=imb)
src = (ROOT / 'tools' / f'blender_{name}.py').read_text(encoding='utf-8')
cut = src.index('\nsc = bpy.context.scene')
g = {'__file__': str(ROOT / 'tools' / f'blender_{name}.py'), '__name__': 'rk_export'}
exec(compile(src[:cut], f'blender_{name}.py', 'exec'), g)
root = g.get('root')
if root is not None: root.scale = (1, 1, 1)
for o in bpy.data.objects:
    if o.type not in ('MESH', 'EMPTY'): bpy.data.objects.remove(o, do_unlink=True)
out = ROOT / 'web' / 'public' / 'models'; out.mkdir(parents=True, exist_ok=True)
bpy.ops.export_scene.gltf(filepath=str(out / f'{outname}.glb'), export_format='GLB', export_apply=True, export_yup=True)
print('EXPORTED', outname, len([o for o in bpy.data.objects if o.type == 'MESH']), 'meshes')
