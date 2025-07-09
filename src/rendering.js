const gameboards = document.querySelectorAll(".gameboard");
const playerGameboard = document.querySelector("#player_gameboard");
const computerGameboard = document.querySelector("#computer_gameboard");

function renderGameboards(computer) {

  for (let row = 9; row >= 0; row--) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      for (let col = 0; col < 10; col++) {
        const cell = document.createElement("div");
        cell.classList.add("gameboard_square");
        rowDiv.appendChild(cell);
      }
      playerGameboard.appendChild(rowDiv);
    }

    for (let row = 9; row >= 0; row--) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      for (let col = 0; col < 10; col++) {
        const cell = document.createElement("div");
        cell.classList.add("gameboard_square");
        rowDiv.appendChild(cell);
        cell.addEventListener("click", () => {
        cell.style.backgroundColor = "white";
        computer.gameboard.receiveAttack([10 - row, col + 1]);
        console.log(computer.gameboard)
      });
      }
      computerGameboard.appendChild(rowDiv);
    }

}

function renderShips(ships) {
  const rows = playerGameboard.children;

  for (const ship of ships) {
    const coordinates = ship.coordinates.values();
    for (const coordinate of coordinates) {
      const parsedCoordinate = JSON.parse(coordinate);
      const x = parsedCoordinate[0] - 1;
      const y = parsedCoordinate[1] - 1;
      const row = rows[x];
      const rowChildren = row.children;
      const square = rowChildren[y];
      square.style.backgroundColor = "black";
    }
  }
}

export { renderGameboards, renderShips };
