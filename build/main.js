"use strict";
// Utilisation de l'application
Object.defineProperty(exports, "__esModule", { value: true });
const grid_1 = require("./grid");
const position_1 = require("./position");
const vacuumCleaner_1 = require("./vacuumCleaner");
const gridSizeX = 10;
const gridSizeY = 10;
const grid = new grid_1.Grid(gridSizeX, gridSizeY);
const initialPosition = new position_1.Position(5, 5, 'N');
const instructions = 'DADADADAA';
const finalPosition = (0, vacuumCleaner_1.controlVacuum)(grid, initialPosition, instructions);
console.log("Position finale de l'aspirateur:", finalPosition);
