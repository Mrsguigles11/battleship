import "./styles.css";
import { renderGameboard } from "./render_gameboard";
import { Player } from "./classes";

renderGameboard();

let player = new Player("player");
player.gameboard.user = player.name;
player.gameboard.placeShip(3, [1, 1], [1, 3])
console.log(player.gameboard)