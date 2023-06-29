export class Position {
  constructor(public x: number, public y: number, public orientation: string) {}
  getX(): number {
    return this.x
  }

  getY(): number {
    return this.y
  }

  getOrientation(): string {
    return this.orientation
  }
}
