import { player, graph } from "./index.js";
import { renderPlayerGameboard } from "./rendering";

function addHover(length, direction) {

let upperRowLimit = 10;
let upperColLimit = 10;

if (direction === "horizontal") {
    upperColLimit -= length;
}
else {
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

    // for (let col = 10 - length + 1; col < 10; col++) {
    //   let cell = graph[row][col];
    //   cell.addEventListener("mouseover", () => {
    //     for (let x = 10 - length; x < 10; x++) {
    //         let targetCell;
    //         targetCell =
    //         direction === "horizontal"
    //           ? graph[row][x]
    //           : (targetCell = graph[x][col]);
    //         targetCell.classList.add("square_hovered");
    //     //   graph[row][x].classList.add("square_hovered");
    //     }
    //   });
    //   cell.addEventListener("mouseout", () => {
    //     for (let x = 10 - length; x < 10; x++) {
    //       graph[row][x].classList.remove("square_hovered");
    //     }
    //   });
    //   cell.addEventListener("click", () => {
    //     player.gameboard.placeShip(
    //       length,
    //       [row + 1, 10 - length + 1],
    //       direction
    //     );
    //     renderPlayerGameboard(player);
    //   });
    // }
  }
}

export { addHover };
