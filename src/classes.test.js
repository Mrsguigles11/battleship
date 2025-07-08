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
    newGameboard.placeShip(3, [5, 6], "horizontal");
    expect(newGameboard.ships.length).toBe(1);
    expect(newGameboard.ships[0].coordinates).toEqual([[5, 6], [5, 7], [5, 8]]);
    newGameboard.placeShip(5, [1, 1], "vertical");
    expect(newGameboard.ships[1].coordinates).toEqual([[1, 1], [2, 1], [3, 1], [4, 1], [5, 1]]);
})

test("receive attack", () => {
    const newGameboard = new Gameboard();
    newGameboard.placeShip(3, [1, 1], "horizontal");
    newGameboard.receiveAttack([1, 2]);
    expect(newGameboard.ships[0].hits).toBe(1);
    newGameboard.receiveAttack([1, 3]);
    expect(newGameboard.moves.length).toEqual(2);
    expect(newGameboard.receiveAttack([1, 3])).toMatch("you already moved there!");
    expect(newGameboard.receiveAttack([1, 1])).toMatch("game over");
})