import {Ship} from "./classes.js";

test("hits ship", () => {
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