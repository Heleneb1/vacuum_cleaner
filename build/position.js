"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Position = void 0;
class Position {
    constructor(x, y, orientation) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getOrientation() {
        return this.orientation;
    }
}
exports.Position = Position;
