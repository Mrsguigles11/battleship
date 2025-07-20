import { player } from "./index.js";
import { renderPlayerGameboard } from "./rendering";


function addHorizontalHover(length) {
  const playerGameboardRows =
    document.querySelector("#player_gameboard").children;

  for (let row = 0; row < 10; row++) {
    const rowSquares = playerGameboardRows[row].children;

    for (let col = 0; col <= 10 - length; col++) {
      const cell = rowSquares[col];
      cell.addEventListener("mouseover", () => {
        cell.classList.add("square_hovered");
        for (let x = 1; x < length; x++) {
          const targetCell = rowSquares[col + x];
          targetCell.classList.add("square_hovered");
        }
      });
      cell.addEventListener("mouseout", () => {
        cell.classList.remove("square_hovered");
        for (let x = 1; x < length; x++) {
          rowSquares[col + x].classList.remove("square_hovered");
        }
      });
      cell.addEventListener('click', () => {
        player.gameboard.placeShip(length, [row + 1, col + 1], "horizontal");
        renderPlayerGameboard(player);
      })
    }
    for (let col = 10 - length + 1; col < 10; col++) {
        let cell = rowSquares[col];
        cell.addEventListener("mouseover", () => {
            for (let x = 10 - length; x < 10; x++) {
                rowSquares[x].classList.add("square_hovered");
            }
        })
        cell.addEventListener("mouseout", () => {
            for (let x = 10 - length; x < 10; x++) {
                rowSquares[x].classList.remove("square_hovered");
            }
        })
        cell.addEventListener('click', () => {
        player.gameboard.placeShip(length, [row + 1, 10 - length + 1], "horizontal");
        renderPlayerGameboard(player);
      })

    }
  }
}

export { addHorizontalHover };
