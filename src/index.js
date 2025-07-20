import "./styles.css";
import { renderComputerGameboard, renderPlayerGameboard } from "./rendering";
import { Player } from "./classes";
import { bindEvents } from "./dom";
import { startNewGame } from "./game_logic";
import { addHorizontalHover } from "./place_ships";

const computer = new Player("computer");
computer.gameboard.survivingShips = new Set();
const player = new Player("player");

startNewGame();
renderComputerGameboard(computer);
renderPlayerGameboard(player);
bindEvents();
addHorizontalHover(4);

export { player, computer }
