// Utilisation de l'application

import { Grid } from './grid'
import { Position } from './position'
import { controlVacuum } from './vacuumCleaner'

const gridSizeX: number = 10
const gridSizeY: number = 10
const grid: Grid = new Grid(gridSizeX, gridSizeY)

const initialPosition: Position = new Position(5, 5, 'N')
const instructions: string = 'DADADADAA'

const finalPosition: Position = controlVacuum(
  grid,
  initialPosition,
  instructions
)

console.log("Position finale de l'aspirateur:", finalPosition)
