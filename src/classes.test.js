import { experiments } from "webpack";
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
    expect(newGameboard.ships[0].coordinates).toEqual([[1,1], [2,2], [3,3]]);
    newGameboard.placeShip(2, [4, 4], [5, 5]);
    expect(newGameboard.ships[1].coordinates).toEqual([[4,4], [5,5]]);
    newGameboard.placeShip(3, [7,7], [5,5]);
    expect(newGameboard.ships[2].coordinates).toEqual([[5,5], [6,6], [7,7]]);
})

test("receive attack", () => {
    const newGameboard = new Gameboard();
    newGameboard.placeShip(3, [1, 1], [3, 3]);
    newGameboard.receiveAttack([2, 2]);
    expect(newGameboard.ships[0].hits).toBe(1);
    newGameboard.receiveAttack([5, 5]);
    expect(newGameboard.moves.length).toEqual(2);
    expect(newGameboard.receiveAttack([2, 2])).toMatch("you already moved there!");
    newGameboard.receiveAttack([1, 1]);
    expect(newGameboard.receiveAttack([3, 3])).toMatch("game over");
})