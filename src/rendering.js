import { takeTurn } from "./game_logic";

const playerGameboard = document.querySelector("#player_gameboard");
const computerGameboard = document.querySelector("#computer_gameboard");

function renderPlayerGameboard(player) {
  playerGameboard.innerHTML = "";

  for (let row = 1; row < 11; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let col = 1; col < 11; col++) {
      const cell = document.createElement("div");
      cell.classList.add("gameboard_square");
      rowDiv.appendChild(cell);
      const cellCoordinate = JSON.stringify([row, col]);
      for (const ship of player.gameboard.ships) {
        if (ship.coordinates.has(cellCoordinate)) {
          cell.style.backgroundColor = "black";
        }
      }
      if (player.gameboard.hits.has(cellCoordinate)) {
        cell.style.backgroundColor = "red";
      } else if (player.gameboard.misses.has(cellCoordinate)) {
        cell.style.backgroundColor = "white";
      }
    }
    playerGameboard.appendChild(rowDiv);
  }
}

function renderComputerGameboard(computer) {
  computerGameboard.innerHTML = "";

  for (let row = 1; row < 11; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let col = 1; col < 11; col++) {
      const cell = document.createElement("div");
      cell.classList.add("gameboard_square");
      rowDiv.appendChild(cell);
      const cellCoordinate = JSON.stringify([row, col]);
      if (computer.gameboard.hits.has(cellCoordinate)) {
        cell.style.backgroundColor = "red";
      } else if (computer.gameboard.misses.has(cellCoordinate)) {
        cell.style.backgroundColor = "white";
      }
      cell.addEventListener("click", () => {
        if (cell.style.backgroundColor === "") {
          takeTurn([row, col]);
        }
      });
    }
    computerGameboard.appendChild(rowDiv);
  }
}

export { renderPlayerGameboard, renderComputerGameboard };
