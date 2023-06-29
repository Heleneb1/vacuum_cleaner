import { controlVacuum } from '../src/vacuumCleaner'
import { Grid } from '../src/grid'
import { Position } from '../src/position'

describe('controlVacuum', () => {
  it('should handle exceeding grid boundaries', () => {
    const gridSizeX: number = 10
    const gridSizeY: number = 10
    const grid: Grid = new Grid(gridSizeX, gridSizeY)

    const initialPosition: Position = new Position(10, 10, 'N')
    const instructions: string = 'DAAA'

    const finalPosition: Position = controlVacuum(
      grid,
      initialPosition,
      instructions
    )

    console.log("Position finale de l'aspirateur:", finalPosition)

    expect(finalPosition.getX()).toBe(10)
    expect(finalPosition.getY()).toBe(10)
    expect(finalPosition.getOrientation()).toBe('E')
  })
})
