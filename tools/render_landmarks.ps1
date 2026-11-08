# Render every Panjim landmark from all four sides of the view into sprites/.
#   powershell -File tools/render_landmarks.ps1
$blender = 'C:\Program Files\Blender Foundation\Blender 5.1\blender.exe'
$jobs = @()
foreach ($s in 'church', 'secretariat', 'mahalaxmi', 'atalsetu') { $jobs += ,@("tools/blender_$s.py", '') }
foreach ($m in 'imb', 'postoffice', 'maruti', 'sebastian', 'donbosco', 'kadamba') { $jobs += ,@('tools/blender_landmarks.py', $m) }
foreach ($j in $jobs) {
  foreach ($r in 0, 1, 2, 3) {
    $env:RK_ROT = "$r"; $env:RK_MODEL = $j[1]
    $out = & $blender -b --python $j[0] 2>&1 | Select-String '^done|Traceback|Error:' | Select-Object -Last 3
    "$($j[0]) $($j[1]) r$r : $($out -join ' / ')"
  }
}
