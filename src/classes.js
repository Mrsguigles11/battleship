
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
        newShip.coordinates = [firstCoord];
        for (let i = firstCoord[0] + 1; i < lastCoord[0]; i++) {
            newShip.coordinates.push([i, i]);
        }
        newShip.coordinates.push(lastCoord);

        this.ships.push(newShip);
    }
}

export { Ship, Gameboard };