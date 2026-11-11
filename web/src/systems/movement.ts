// Moving the child through the city: streets and paths are always open, water and buildings are not, and a wall
// at an angle is slid along instead of stopping you dead.
import { Ground, T } from '../world/data';
import type { BuildingIndex } from '../world/buildings';
import type { StreetIndex } from '../world/roads';

export const BODY = 0.9;   // metres

export class Movement {
  constructor(private g: Ground, private bi: BuildingIndex, private si: StreetIndex) {}

  free(X: number, Z: number): boolean {
    if (X < T || Z < T || X > (this.g.W - 1) * T || Z > (this.g.H - 1) * T) return false;   // the map's edge
    if (this.si.at(X, Z)) return true;                                                      // a street or path, even across water
    if (this.g.isWet(X, Z)) return false;
    return !this.bi.solid(X, Z, BODY);
  }

  /** Move (x, z) by (dx, dz), sliding along walls; returns the new position. */
  step(x: number, z: number, dx: number, dz: number): [number, number] {
    // already outside the walkable area (carried past the map's edge on a vehicle, or dropped on water)? then any
    // step that brings you back in, or that stays on a street, is allowed, so you can never be stuck there
    if (!this.free(x, z)) {
      const out = (X: number, Z: number) => Math.max(0, T - X, T - Z, X - (this.g.W - 1) * T, Z - (this.g.H - 1) * T);
      const nx = x + dx, nz = z + dz;
      if (out(nx, nz) < out(x, z) || this.si.at(nx, nz) || this.free(nx, nz)) return [nx, nz];
    }
    if (this.free(x + dx, z + dz)) return [x + dx, z + dz];
    for (const a of [0.35, -0.35, 0.7, -0.7, 1.05, -1.05, 1.4, -1.4]) {
      const c = Math.cos(a), s = Math.sin(a), mx = (dx * c - dz * s) * c, mz = (dx * s + dz * c) * c;
      if (this.free(x + mx, z + mz)) return [x + mx, z + mz];
    }
    return [x, z];
  }

  /** The height to stand at: a bridge's deck, or the ground. */
  standY(X: number, Z: number): number {
    const s = this.si.at(X, Z);
    return s && s.deck !== null ? s.deck : Math.max(0.2, this.g.heightAt(X, Z));
  }
}
