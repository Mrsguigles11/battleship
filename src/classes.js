
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
        this.ships.push(newShip);
    }
}

export { Ship, Gameboard };