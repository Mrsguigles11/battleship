
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

    placeShip(length, firstCoord, direction) {
        let newShip = new Ship(length);
        newShip.coordinates = [firstCoord];

        if (direction === "horizontal") {
            for (let i = 1; i < length; i++) {
                newShip.coordinates.push([firstCoord[0], firstCoord[1] + i])
            }
        }
        else {
            for (let i = 1; i < length; i++) {
                newShip.coordinates.push([firstCoord[0] + i, firstCoord[1]])
            }
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

class Player {
    constructor(user) {
        this.user = user;
    }
    gameboard = new Gameboard();
}

// const newGameboard = new Gameboard();
//     newGameboard.placeShip(3, [1, 1], "horizontal");
//     // newGameboard.receiveAttack([1, 2]);
//     // newGameboard.receiveAttack([1, 1]);
//     newGameboard.receiveAttack([1, 3]);



// console.log(newGameboard.ships[0])

export { Ship, Gameboard, Player };