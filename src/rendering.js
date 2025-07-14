const playerGameboard = document.querySelector("#player_gameboard");
const computerGameboard = document.querySelector("#computer_gameboard");
const gameStatus = document.querySelector(".game_status");

function renderGameboards(player, computer) {
  playerGameboard.innerHTML = "";
  computerGameboard.innerHTML = "";


  for (let row = 1; row < 11; row++) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      for (let col = 0; col < 10; col++) {
        const cell = document.createElement("div");
        cell.classList.add("gameboard_square");
        rowDiv.appendChild(cell);
        const cellCoordinate = JSON.stringify([row, col]);
        if (player.gameboard.hits.has(cellCoordinate)) {
          cell.style.backgroundColor = "red";
        }
        else if(player.gameboard.misses.has(cellCoordinate)) {
          cell.style.backgroundColor = "white";
        }
      }
      playerGameboard.appendChild(rowDiv);
    }

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
        }
        else if(computer.gameboard.misses.has(cellCoordinate)) {
          cell.style.backgroundColor = "white";
        }
        cell.addEventListener("click", () => {
          if (gameStatus.textContent === "game over" || cell.style.backgroundColor != "") {
            return
          }
        computer.gameboard.receiveAttack([row, col]);
        gameStatus.textContent = computer.gameboard.gameStatus;
        player.gameboard.receiveRandomAttack();
        renderGameboards(player, computer);
        gameStatus.textContent = computer.gameboard.gameStatus;
      });
      }
      computerGameboard.appendChild(rowDiv);
    }

}

function renderShips(ships) {
  const rows = playerGameboard.children;
  console.log(playerGameboard)

  for (const ship of ships) {
    const coordinates = ship.coordinates.values();
    for (const coordinate of coordinates) {
      const parsedCoordinate = JSON.parse(coordinate);
      const x = parsedCoordinate[0] - 1;
      const y = parsedCoordinate[1] - 1;
      const row = rows[x];
      const rowChildren = row.children;
      const cell = rowChildren[y];
      cell.classList.add("ship");
    }
  }
}

export { renderGameboards, renderShips };
