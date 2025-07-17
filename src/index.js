import "./styles.css";
import { renderComputerGameboard, renderPlayerGameboard } from "./rendering";
import { Player } from "./classes";
import { bindEvents } from "./dom";

const computer = new Player("computer");
computer.gameboard.placeRandomShip(4);
computer.gameboard.placeRandomShip(3);
computer.gameboard.placeRandomShip(2);
computer.gameboard.placeRandomShip(2);


const player = new Player("player");

renderComputerGameboard(computer);
renderPlayerGameboard(player);
bindEvents();

export { player, computer }
