import { player, computer } from "./index.js";
import { renderComputerGameboard, renderPlayerGameboard } from "./rendering.js";

const gameStatus = document.querySelector(".game_status");

function takeTurn(coordinate) {
  if (gameStatus.textContent === "game over") {
    return;
  }
  computer.gameboard.receiveAttack(coordinate);
  player.gameboard.receiveRandomAttack();
  gameStatus.textContent =
    player.gameboard.gameStatus === "game over"
      ? player.gameboard.gameStatus
      : computer.gameboard.gameStatus;
  renderComputerGameboard(computer);
  renderPlayerGameboard(player);
}

export { takeTurn };
