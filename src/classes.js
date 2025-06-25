
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
    moves = [];
    sunk = 0;

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

    receiveAttack(input) {
        for (const coordinate of this.moves) {
            if (coordinate[0] && coordinate[1] === input[0] && input[1]) {
                return "you already moved there!";
            }
        }

        for (const ship of this.ships) {
            for (const coordinate of ship.coordinates) {
                if (coordinate[0] && coordinate[1] === input[0] && input[1]) {
                    ship.hit();
                    if (ship.isSunk()) {
                        this.sunk++;
                    }
                }
            }
        }
        this.moves.push(input);

        if (this.ships.length === this.sunk) {
            return "game over"
        }
    }

}

// const newGameboard = new Gameboard();
// newGameboard.placeShip(3, [1, 1], [3, 3]);
//     newGameboard.receiveAttack([2, 2]);
//     newGameboard.receiveAttack([1, 1]);
// newGameboard.receiveAttack([3, 3]);

export { Ship, Gameboard };