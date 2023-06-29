import { Grid } from '../src/grid'

describe('main', () => {
  test('gridSizeX and gridSizeY should equals 10', () => {
    const gridSizeX: number = 10
    const gridSizeY: number = 10
    const grid: Grid = new Grid(gridSizeX, gridSizeY)

    expect(grid.sizeX).toEqual(10)
    expect(grid.sizeY).toEqual(10)
  })
})
