
function addShipHover(length) {
  const playerGameboardRows =
    document.querySelector("#player_gameboard").children;

  for (const row of playerGameboardRows) {
    const playerGameboardSquares = row.children;

    for (let i = 0; i < 11 - length; i++) {
      const cell = playerGameboardSquares[i];
      cell.addEventListener("mouseover", () => {
        cell.classList.add("square_hovered");
        for (let x = 1; x < length; x++) {
          const targetCell = playerGameboardSquares[i + x];
          targetCell.classList.add("square_hovered");
        }
      });
      cell.addEventListener("mouseout", () => {
        cell.classList.remove("square_hovered");
        for (let x = 1; x < length; x++) {
          playerGameboardSquares[i + x].classList.remove("square_hovered");
        }
      });
    }
  }
}

export { addShipHover };
