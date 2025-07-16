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
    expect(newGameboard.ships[0].coordinates.has(JSON.stringify([5, 6]))).toBe(true);
    newGameboard.placeShip(5, [1, 1], "vertical");
    expect(newGameboard.ships[1].coordinates.has(JSON.stringify([1, 1]))).toBe(true);
    expect(newGameboard.ships[1].coordinates.has(JSON.stringify([5, 1]))).toBe(true);
    newGameboard.placeShip(5, [1, 1], "vertical");
    expect(newGameboard.ships.length).toBe(2);
})

test("receive attack", () => {
    const newGameboard = new Gameboard();
    newGameboard.placeShip(3, [1, 1], "horizontal");
    newGameboard.placeShip(1, [4, 4], "horizontal");
    newGameboard.receiveAttack([1, 2]);
    expect(newGameboard.ships[0].hits).toBe(1);
    newGameboard.receiveAttack([1, 3]);
    expect(newGameboard.hits.size).toEqual(2);
    newGameboard.receiveAttack([1, 1]);
    expect(newGameboard.gameStatus).toMatch("ships sunk 1");
    newGameboard.receiveAttack([4, 4])
    expect(newGameboard.gameStatus).toMatch("game over");
})

test("place random ship", () => {
    const newGameboard = new Gameboard();
    newGameboard.placeRandomShip(3);
    expect(newGameboard.ships.length).toBe(1);
    newGameboard.placeRandomShip(3);
    expect(newGameboard.ships.length).toBe(2);
})

test("receive random attack", () => {
    const newGameboard = new Gameboard();
    newGameboard.receiveRandomAttack();
    expect(newGameboard.misses.size).toBe(1);
})

