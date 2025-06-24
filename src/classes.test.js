import {Ship, Gameboard} from "./classes.js";

test("hit ship", () => {
    const newShip = new Ship(2);
    newShip.hit();
    expect(newShip.hits).toBe(1);
    newShip.hit();
    newShip.hit();
    expect(newShip.hits).toBe(2);
})

test("sink ship", () => {
    const newShip = new Ship(1);
    newShip.hit();
    expect(newShip.isSunk()).toBeTruthy();
})

test("place ship on gameboard", () => {
    const newGameboard = new Gameboard();
    newGameboard.placeShip(3, [1, 1], [3, 3]);
    expect(newGameboard.ships.length).toBe(1);
})