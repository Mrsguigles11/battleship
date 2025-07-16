const playerGameboard = document.querySelector("#player_gameboard");
const computerGameboard = document.querySelector("#computer_gameboard");
const gameStatus = document.querySelector(".game_status");

function renderGameboards(player, computer) {
  playerGameboard.innerHTML = "";
  computerGameboard.innerHTML = "";


  for (let row = 1; row < 11; row++) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      for (let col = 1; col < 11; col++) {
        const cell = document.createElement("div");
        cell.classList.add("gameboard_square");
        rowDiv.appendChild(cell);
        const cellCoordinate = JSON.stringify([row, col]);
        for (const ship of player.gameboard.ships) {
          if (ship.coordinates.has(cellCoordinate)) {
            cell.style.backgroundColor = "black";
          }
        }
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
        player.gameboard.receiveRandomAttack();
        renderGameboards(player, computer);
        gameStatus.textContent = player.gameboard.gameStatus === "game over" ? player.gameboard.gameStatus : computer.gameboard.gameStatus;
        // gameStatus.textContent = computer.gameboard.gameStatus;

        // if (computer.gameboard.gameStatus === "game over" || player.gameboard.gameStatus === "game over") {
        // gameStatus.textContent = computer.gameboard.gameStatus;
        // }
        console.log(computer.gameboard)
      });
      }
      computerGameboard.appendChild(rowDiv);
    }

}

export { renderGameboards };
