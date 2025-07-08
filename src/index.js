import "./styles.css";
import { renderGameboard, renderShip } from "./render_gameboard";
import { Player } from "./classes";

renderGameboard();

let player = new Player("player");
player.gameboard.placeShip(3, [1, 1], "vertical")
renderShip(player.user, player.gameboard.ships[0].coordinates);
