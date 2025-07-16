import "./styles.css";
import { renderGameboards } from "./rendering";
import { Player } from "./classes";
import { bindEvents } from "./dom";

const computer = new Player("computer");
computer.gameboard.placeRandomShip(4);
computer.gameboard.placeRandomShip(3);
computer.gameboard.placeRandomShip(2);
computer.gameboard.placeRandomShip(2);


const player = new Player("player");
player.gameboard.placeRandomShip(4);
player.gameboard.placeRandomShip(3);
player.gameboard.placeRandomShip(2);
player.gameboard.placeRandomShip(2);

renderGameboards(player, computer);
bindEvents();

