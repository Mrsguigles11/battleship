import "./styles.css";
import { renderGameboards, renderShips } from "./rendering";
import { Player } from "./classes";

const computer = new Player("computer");
computer.gameboard.placeRandomShip(4);
computer.gameboard.placeRandomShip(3);
computer.gameboard.placeRandomShip(2);
computer.gameboard.placeRandomShip(1);


const player = new Player("player");
player.gameboard.placeRandomShip(4);
player.gameboard.placeRandomShip(3);
player.gameboard.placeRandomShip(2);
player.gameboard.placeRandomShip(1);

renderGameboards(player, computer);
renderShips(player.gameboard.ships);


