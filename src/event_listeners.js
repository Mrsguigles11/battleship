import { player } from "./index.js";
import { renderPlayerGameboard, graph } from "./rendering.js";
import { setUpGame } from "./game_logic.js";

function addHover(length, direction) {
  let upperRowLimit = 10;
  let upperColLimit = 10;

  if (direction === "horizontal") {
    upperColLimit -= length;
  } else {
    upperRowLimit -= length;
  }

  for (let row = 0; row < upperRowLimit; row++) {
    for (let col = 0; col < upperColLimit; col++) {
      const cell = graph[row][col];
      cell.addEventListener("mouseover", () => {
        cell.classList.add("square_hovered");
        for (let x = 1; x < length; x++) {
          let targetCell;
          targetCell =
            direction === "horizontal"
              ? graph[row][col + x]
              : (targetCell = graph[row + x][col]);
          targetCell.classList.add("square_hovered");
        }
      });
      cell.addEventListener("mouseout", () => {
        cell.classList.remove("square_hovered");
        for (let x = 1; x < length; x++) {
          let targetCell;
          targetCell =
            direction === "horizontal"
              ? graph[row][col + x]
              : (targetCell = graph[row + x][col]);
          targetCell.classList.remove("square_hovered");
        }
      });
      cell.addEventListener("click", () => {
        player.gameboard.placeShip(length, [row + 1, col + 1], direction);
        renderPlayerGameboard(player);
        setUpGame(player, direction);
      });
    }
    addFinalSquaresHover(length, direction);
  }
}

function addFinalSquaresHover(length, direction) {
  let row = 0;
  let col = 0;
  if (direction === "horizontal") {
    col = 10 - length;
  } else {
    row = 10 - length;
  }
  for (let currentRow = row; currentRow < 10; currentRow++) {
    for (let currentCol = col; currentCol < 10; currentCol++) {
      const cell = graph[currentRow][currentCol];
      cell.addEventListener("mouseover", () => {
        cell.classList.add("square_hovered");
        for (let x = 10 - length; x < 10; x++) {
          let targetCell;
          targetCell =
            direction === "horizontal"
              ? graph[currentRow][x]
              : (targetCell = graph[x][currentCol]);
          targetCell.classList.add("square_hovered");
        }
      });
      cell.addEventListener("mouseout", () => {
        cell.classList.add("square_hovered");
        for (let x = 10 - length; x < 10; x++) {
          let targetCell;
          targetCell =
            direction === "horizontal"
              ? graph[currentRow][x]
              : (targetCell = graph[x][currentCol]);
          targetCell.classList.remove("square_hovered");
        }
      });
      cell.addEventListener("click", () => {
        if (direction === "horizontal") {
          player.gameboard.placeShip(
            length,
            [currentRow + 1, col + 1],
            direction
          );
        } else {
          player.gameboard.placeShip(
            length,
            [row + 1, currentCol + 1],
            direction
          );
        }
        renderPlayerGameboard(player);
        setUpGame(player, direction);
      });
    }
  }
}

export { addHover };
