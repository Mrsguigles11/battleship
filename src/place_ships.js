
function addHorizontalHover(length) {
  const playerGameboardRows =
    document.querySelector("#player_gameboard").children;

  for (const row of playerGameboardRows) {
    const rowSquares = row.children;

    for (let i = 0; i <= 10 - length; i++) {
      const cell = rowSquares[i];
      cell.addEventListener("mouseover", () => {
        cell.classList.add("square_hovered");
        for (let x = 1; x < length; x++) {
          const targetCell = rowSquares[i + x];
          targetCell.classList.add("square_hovered");
        }
      });
      cell.addEventListener("mouseout", () => {
        cell.classList.remove("square_hovered");
        for (let x = 1; x < length; x++) {
          rowSquares[i + x].classList.remove("square_hovered");
        }
      });
    }
    for (let i = 10 - length + 1; i < 10; i++) {
        let cell = rowSquares[i];
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

    }
  }
}

export { addHorizontalHover };
