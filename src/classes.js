
class Ship {
    constructor (length) {
        this.length = length;
    }
    hits = 0;
    coordinates;

    hit() {
        if (this.isSunk()) {
            return
        }
        this.hits++;
    }

    isSunk() {
        if (this.hits === this.length) {
            return true
        }
    }
}

class Gameboard {
    ships = [];

    placeShip(length, firstCoord, lastCoord) {
        let newShip = new Ship(length);
        newShip.coordinates = [firstCoord, lastCoord];
        newShip.coordinates.sort((a, b) => a[0] - b[0]);
        [firstCoord, lastCoord] = [newShip.coordinates[0], newShip.coordinates[1]];
        for (let i = firstCoord[0] + 1; i < lastCoord[0]; i++) {
            newShip.coordinates.splice(-1, 0, [i, i]);
        }

        this.ships.push(newShip);
    }
}

export { Ship, Gameboard };