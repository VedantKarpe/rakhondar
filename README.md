# Rakhondar

An isometric browser game set in a Goan village on Naraka Chaturdashi night.

A child has wandered off while the vaddo raises its Narkasur effigy. Demons move through the lanes. The village's guardian spirit, the Rakhondar, walks beside the child and lights footsteps toward safety.

**Play:** https://claude.ai/artifact/5TzkxY3xHZSJuVBJ9FTsXE

## Ways out

- **Safe places:** the temple, the chapel, or the Rakhondar's own devli (shrine).
- **Rides home:** wait 10 seconds at the bus stop for a pilot's motorbike, or at the jetty for the ferry.

## Controls

| Action | Keyboard | Phone |
|---|---|---|
| Move | Arrow keys or WASD (two together to follow a lane) | Drag anywhere |
| Call the Rakhondar | Space | Button, bottom right |

Walk over a diya to light it. Demons can't enter its glow, and it gives the Rakhondar another call. It burns out after about 25 seconds.

## The code

Everything is in `rakhondar.html`: plain canvas 2D, no build step, no dependencies besides two Google Fonts.

The file is written as an artifact page body, without `<!doctype>`, `<html>` or `<head>` tags. Open it directly in a desktop browser to run it locally.

- **Village generation** (`gen`): a winding lane network (a minimum spanning tree between vaddo hubs, carved with noisy Dijkstra), river and mangroves, houses, walls, trees and props. Each game builds a new village.
- **Rendering** (`render`): ground pre-painted once, standing objects depth-sorted by `x + y`, then a moonlit darkness layer with lights cut into it as ground-plane ellipses.
- **Isometric helpers:** `iso`, `P`, `box`, `hipRoof`, `octPrism` and `dome` draw Goan buildings from map coordinates.

## Ideas not built yet

- Narkasur himself: the effigy coming alive for a final chase, and burning the effigies at dawn.
- The sea: a beach, fishing boats on the sand, a shack.
- Sound: dhol and tasha in the distance, crickets, the Rakhondar's whisper.
