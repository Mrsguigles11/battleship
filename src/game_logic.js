import { player, computer } from "./index.js";
import {
  renderComputerGameboard,
  renderPlayerGameboard,
  revealSurvivingShips,
} from "./rendering.js";
import { addHover } from "./event_listeners.js";

const gameStatus = document.querySelector(".game_status");

function takeTurn(coordinate) {
  if (
    gameStatus.textContent === "game over" ||
    player.gameboard.ships.length === 0
  ) {
    return;
  }
  computer.gameboard.receiveAttack(coordinate);
  player.gameboard.receiveRandomAttack();
  gameStatus.textContent =
    player.gameboard.gameStatus === "game over"
      ? player.gameboard.gameStatus
      : computer.gameboard.gameStatus;
  if (gameStatus.textContent === "game over") {
    revealSurvivingShips(computer);
  }
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
  computer.gameboard.survivingShips = new Set();
  computer.gameboard.gameStatus = `place ships!`;

  gameStatus.textContent = `place ships!`;

  renderComputerGameboard(computer);
  renderPlayerGameboard(player);
  setUpGame(player, "vertical");
}

function setUpGame(player, direction) {
  if (player.gameboard.ships.length === 0) {
    addHover(5, direction);
  }
  if (player.gameboard.ships.length === 1) {
    addHover(4, direction);
  }
  if (player.gameboard.ships.length === 2) {
    addHover(3, direction);
  }
  if (player.gameboard.ships.length === 3) {
    addHover(2, direction);
  }
  if (player.gameboard.ships.length === 4) {
    addHover(2, direction);
  }
  if (player.gameboard.ships.length === 5) {
    startGame();
  }
}

function startGame() {
  computer.gameboard.ships = [];
  computer.gameboard.placeRandomShip(5);
  computer.gameboard.placeRandomShip(4);
  computer.gameboard.placeRandomShip(3);
  computer.gameboard.placeRandomShip(2);
  computer.gameboard.placeRandomShip(2);
  computer.gameboard.gameStatus = "ships sunk 0";
  gameStatus.textContent = computer.gameboard.gameStatus;
  renderComputerGameboard(computer);
}

export { takeTurn, startNewGame, setUpGame, startGame };
