class Ship {
  constructor(length) {
    this.length = length;
  }
  hits = 0;
  coordinates = new Set();

  hit() {
    if (this.isSunk()) {
      return;
    }
    this.hits++;
  }

  isSunk() {
    if (this.hits === this.length) {
      return true;
    }
  }
}

class Gameboard {
  ships = [];
  moves = new Set();
  sunk = 0;

  placeShip(length, firstCoord, direction) {
    let newShip = new Ship(length);
    let coordinates = [];
    coordinates.push(firstCoord);

    if (direction === "horizontal") {
      for (let i = 1; i < length; i++) {
        coordinates.push([firstCoord[0],firstCoord[1] + i,])
      }
    } else {
      for (let i = 1; i < length; i++) {
        coordinates.push([firstCoord[0] + i,firstCoord[1],])
      }
    }

    for (let i = 0; i < coordinates.length; i++) {
      const coordinateskey = JSON.stringify(coordinates[i])
      for (const ship of this.ships) {
        if (ship.coordinates.has(coordinateskey)) {
          return;
        }
      }
      newShip.coordinates.add(coordinateskey);
    }

    

    this.ships.push(newShip);
  }

  receiveAttack(input) {
    const inputKey = JSON.stringify(input);

    if (this.moves.has(inputKey)) {
      return "you already moved there!";
    }

    for (const ship of this.ships) {
      if (ship.coordinates.has(inputKey)) {
        ship.hit();
        if (ship.isSunk()) {
          this.sunk++;
        }
      }
    }
    this.moves.add(inputKey);

    if (this.ships.length === this.sunk) {
      return "game over";
    }
  }

  placeRandomShip(length) {
    const randomiseDirection = Math.floor(Math.random() * 2) + 1;
    const direction = randomiseDirection === 1 ? "horizontal" : "vertical";

    if (direction === "horizontal") {
      const maximumXValue = 10 - length;
      this.placeShip(
        length,
        [
          Math.floor(Math.random() * 10) + 1,
          Math.floor(Math.random() * maximumXValue) + 1,
        ],
        "horizontal"
      );
    } else {
      const maximumYValue = 10 - length;
      this.placeShip(
        length,
        [
          Math.floor(Math.random() * maximumYValue) + 1,
          Math.floor(Math.random() * 10) + 1,
        ],
        "vertical"
      );
    }
  }
}

class Player {
  constructor(user) {
    this.user = user;
  }
  gameboard = new Gameboard();
}

export { Player, Ship, Gameboard };
