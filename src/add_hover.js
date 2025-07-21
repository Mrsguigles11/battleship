import { player, graph } from "./index.js";
import { renderPlayerGameboard } from "./rendering.js";

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
      });
    }
    addFinalSquaresHover(length, direction);
}
}

function addFinalSquaresHover(length, direction) {
    if (direction === "horizontal") {
    let row = 0;
    let col = 10 - length;
    while (row < 10) {
        const currentRow = row;
        for (let i = col; i < 10; i++) {
        const cell = graph[currentRow][i];
        cell.addEventListener('mouseover', () => {
        cell.classList.add("square_hovered");
        for (let x = col; x < 10; x++) {
            const targetCell = graph[currentRow][x];
            targetCell.classList.add("square_hovered");
        }
    })
        cell.addEventListener('mouseout', () => {
        cell.classList.add("square_hovered");
        for (let x = col; x < 10; x++) {
            const targetCell = graph[currentRow][x];
            targetCell.classList.remove("square_hovered");
        }
    })
    cell.addEventListener("click", () => {
        player.gameboard.placeShip(
          length,
          [currentRow + 1, col + 1],
          direction
        );
        renderPlayerGameboard(player);
      });
}
    row ++
    }
}

}



export { addHover };
