"use strict";
// Test Technique - Développeur Full Stack
// Description
Object.defineProperty(exports, "__esModule", { value: true });
exports.controlVacuum = void 0;
class VacuumCleaner {
    constructor(position) {
        this.position = position;
        this.directions = ['N', 'E', 'S', 'W'];
    }
    rotateRight() {
        const currentOrientation = this.directions.indexOf(this.position.orientation);
        let newOrientation = currentOrientation + 1;
        if (newOrientation >= this.directions.length) {
            newOrientation = 0;
        }
        this.position.orientation = this.directions[newOrientation];
    }
    rotateLeft() {
        const currentOrientation = this.directions.indexOf(this.position.orientation);
        let newOrientation = currentOrientation - 1;
        if (newOrientation >= this.directions.length) {
            newOrientation = 0;
        }
        this.position.orientation = this.directions[newOrientation];
    }
    moveForward(grid) {
        const position = this.getPosition();
        const orientation = position.orientation;
        let deltaX = 0;
        let deltaY = 0;
        if (orientation === 'N') {
            deltaY = 1;
        }
        else if (orientation === 'E') {
            deltaX = 1;
        }
        else if (orientation === 'S') {
            deltaY = -1;
        }
        else if (orientation === 'W') {
            deltaX = -1;
        }
        const newX = position.x + deltaX;
        const newY = position.y + deltaY;
        if (this.isInGrid(newX, newY, grid)) {
            position.x = newX;
            position.y = newY;
        }
        else {
            console.error('Aspirateur hors zone de nettoyage.');
        }
    }
    getPosition() {
        return this.position;
    }
    isInGrid(x, y, grid) {
        const { sizeX, sizeY } = grid;
        return x >= 0 && x < sizeX && y >= 0 && y < sizeY;
    }
}
function controlVacuum(grid, initialPosition, instructions) {
    const vacuumCleaner = new VacuumCleaner(initialPosition);
    for (let instruction of instructions) {
        if (instruction === 'D') {
            vacuumCleaner.rotateRight();
        }
        else if (instruction === 'G') {
            vacuumCleaner.rotateLeft();
        }
        else if (instruction === 'A') {
            vacuumCleaner.moveForward(grid);
        }
    }
    return vacuumCleaner.getPosition();
}
exports.controlVacuum = controlVacuum;
