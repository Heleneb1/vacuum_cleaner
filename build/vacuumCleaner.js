"use strict";
// Test Technique - Développeur Full Stack
// Description
Object.defineProperty(exports, "__esModule", { value: true });
// La société “iHoover” a décidé de développer un aspirateur automatique.
// L’aspirateur doit pouvoir parcourir l'intégralité d’une pièce donnée, sa position est représentée par ses coordonnées (x,y) et d'une lettre indiquant l'orientation selon la notation cardinale anglaise (N,E,W,S). Une pièce est modélisée par une grille rectangulaire.
// Par exemple, l’aspirateur peut se trouver dans la position « 0, 0, N », ce qui signifie qu’il se situe dans le coin inférieur gauche de la pièce, et orientée vers le Nord.
// Pour contrôler l’aspirateur, une séquence de commandes symbolisée par une suite de lettres lui est envoyée. Les commandes possibles sont « D », « G » et « A ». « D » et « G » font pivoter l’aspirateur de 90° à droite ou à gauche respectivement, sans la déplacer. « A » signifie que l'on avance d'une case dans la direction à laquelle elle fait face, et sans modifier son orientation.
// On définit que la case directement au Nord de la position (x, y) a pour coordonnées (x, y+1).
// Pour programmer l’aspirateur, on lui fournit des données en entrée:
// Les dimensions de la grille à savoir le nombre de carrés sur l’axe x puis y.
// La position initiale de l’aspirateur, ainsi que son orientation.
// Une série d'instructions que l’aspirateur exécutera.
// Lorsque l’aspirateur achève une série d'instructions, il communique sa position et son orientation.
// Objectif
// Concevoir et développer une application permettant de paramétrer la dimension de la grille, de positionner l’aspirateur et d’exécuter une liste d’instructions. On doit alors pouvoir connaître sa position finale.
// Le langage de programmation imposé est soit Java, Kotlin, Scala ou Typescript, le livrable doit contenir tout le code source et une documentation simple pour l’exécuter, cela peut très bien être une main classe ou des tests unitaires. L’utilisation de librairie ou framework tierce est autorisée.
// Test 1
// Dimension de la grille : x=10 y=10
// Position initiale de l’aspirateur : x=5 y=5 orientation=N
// Instructions : DADADADAA
// On attend comme position finale : x=5 y=6 orientation=N
// NB : le programme doit pouvoir évoluer facilement en fonction de nouvelles contraintes qui vous seront communiquées lors de l’entretien.
const grid_1 = require("./grid");
const position_1 = require("./position");
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
    moveForward() {
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
        if (this.isInGrid(newX, newY)) {
            position.x = newX;
            position.y = newY;
        }
    }
    getPosition() {
        return this.position;
    }
    isInGrid(x, y) {
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
            vacuumCleaner.moveForward();
        }
    }
    return vacuumCleaner.getPosition();
}
// Utilisation de l'application
const gridSizeX = 10;
const gridSizeY = 10;
const grid = new grid_1.Grid(gridSizeX, gridSizeY);
const initialPosition = new position_1.Position(5, 5, 'N');
const instructions = 'DADADADAA';
const finalPosition = controlVacuum(grid, initialPosition, instructions);
console.log("Position finale de l'aspirateur:", finalPosition);
