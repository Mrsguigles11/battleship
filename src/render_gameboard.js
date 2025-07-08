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

function renderShip(gameboard, coordinates) {  
  
  let rows = gameboard === "computer" ? computerGameboard.children : playerGameboard.children;

  for (const coordinate of coordinates) {
    const x = coordinate[0] -1;
    const y = coordinate[1] -1;
    const row = rows[x];
    const rowChildren = row.children;
    const square = rowChildren[y];
    square.style.backgroundColor = "black";
  }
}

export { renderGameboard, renderShip };
