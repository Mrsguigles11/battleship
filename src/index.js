import "./styles.css";
import { renderGameboards, renderShips } from "./rendering";
import { Player } from "./classes";

const computer = new Player("computer");
computer.gameboard.placeShip(4, [3, 3], "horizontal");


const player = new Player("player");
player.gameboard.placeShip(4, [1, 1], "horizontal");



// renderShips(player.gameboard.ships);
renderGameboards(player, computer);
