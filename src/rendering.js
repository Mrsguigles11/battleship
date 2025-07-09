const gameboards = document.querySelectorAll(".gameboard");
const playerGameboard = document.querySelector("#player_gameboard");
const computerGameboard = document.querySelector("#computer_gameboard");

function renderGameboard() {
  for (const board of gameboards) {
    for (let row = 9; row >= 0; row--) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      for (let col = 0; col < 10; col++) {
        const cell = document.createElement("div");
        cell.classList.add("gameboard_square");
        rowDiv.appendChild(cell);
      }
      board.appendChild(rowDiv);
    }
  }
}

function renderShips(gameboard, ships) {
  const rows = gameboard === "computer" ? computerGameboard.children : playerGameboard.children;

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

export { renderGameboard, renderShips };
