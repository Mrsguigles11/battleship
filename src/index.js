import "./styles.css";
import { renderComputerGameboard, renderPlayerGameboard } from "./rendering";
import { Player } from "./classes";
import { bindEvents } from "./dom";
import { startNewGame } from "./game_logic";
import { addShipHover } from "./place_ships";

const computer = new Player("computer");
computer.gameboard.survivingShips = new Set();
const player = new Player("player");

startNewGame();
renderComputerGameboard(computer);
renderPlayerGameboard(player);
bindEvents();
addShipHover(2);

export { player, computer }
