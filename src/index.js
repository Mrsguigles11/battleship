import "./styles.css";
import { renderComputerGameboard, renderPlayerGameboard } from "./rendering";
import { Player } from "./classes";
import { bindEvents } from "./dom";
import { startNewGame } from "./game_logic";

const computer = new Player("computer");
const player = new Player("player");

startNewGame();
renderComputerGameboard(computer);
renderPlayerGameboard(player);
bindEvents();

export { player, computer }
