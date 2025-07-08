import "./styles.css";
import { renderGameboard, renderShips } from "./render_gameboard";
import { Player } from "./classes";

renderGameboard();

let player = new Player("player");
player.gameboard.placeRandomShip(5);
renderShips("player", player.gameboard.ships);
