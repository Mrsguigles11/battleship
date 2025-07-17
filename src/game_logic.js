import { player, computer } from "./index.js";
import { renderComputerGameboard, renderPlayerGameboard } from "./rendering.js";

const gameStatus = document.querySelector(".game_status");

function takeTurn(coordinate) {
  if (gameStatus.textContent === "game over" || player.gameboard.ships.length === 0) {
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

function startNewGame() {
  player.gameboard.ships = [];
  player.gameboard.misses = new Set();
  player.gameboard.hits = new Set();
  player.gameboard.sunk = 0;
  player.gameboard.gameStatus = `ships sunk 0`;

  computer.gameboard.ships = [];
  computer.gameboard.misses = new Set();
  computer.gameboard.hits = new Set();
  computer.gameboard.sunk = 0;
  computer.gameboard.gameStatus = `ships sunk 0`;

  computer.gameboard.placeRandomShip(4);
  computer.gameboard.placeRandomShip(3);
  computer.gameboard.placeRandomShip(2);
  computer.gameboard.placeRandomShip(2);

  gameStatus.textContent = `ships sunk 0`;

  renderComputerGameboard(computer);
  renderPlayerGameboard(player);
}

export { takeTurn, startNewGame };
