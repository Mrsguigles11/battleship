import "./styles.css";
import { renderGameboard, renderShips } from "./rendering";
import { Player } from "./classes";

renderGameboard();

let player = new Player("player");
player.gameboard.placeRandomShip(4);
player.gameboard.placeRandomShip(3);
player.gameboard.placeRandomShip(2);
player.gameboard.placeRandomShip(2);


renderShips("player", player.gameboard.ships);
