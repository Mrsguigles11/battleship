import "./styles.css";
import { renderGameboard, renderShips } from "./rendering";
import { Player } from "./classes";

renderGameboard();

let player = new Player("player");
player.gameboard.placeShip(3, [1, 1], "vertical");
player.gameboard.placeShip(3, [1, 1], "vertical");

renderShips("player", player.gameboard.ships);
