import { computer, player } from "./index.js";
import { renderPlayerGameboard } from "./rendering";
import { startNewGame, startGame, setUpGame } from "./game_logic.js";

const cache = {
  newGameButton: document.querySelector("#new_game_btn"),
  randomShipsButton: document.querySelector("#random_ships_btn"),
  changeDirectionButton: document.querySelector("#change_direction_btn"),
};

function bindEvents() {
  cache.newGameButton.addEventListener("click", () => {
    if (player.gameboard.ships.length === 0) {
      return;
    }
    startNewGame();
  });
  cache.randomShipsButton.addEventListener("click", () => {
    if (player.gameboard.hits.size != 0 || player.gameboard.misses.size != 0) {
      return;
    }
    player.gameboard.ships = [];
    computer.gameboard.ships = [];
    renderPlayerGameboard(player);
    player.gameboard.placeRandomShip(5);
    player.gameboard.placeRandomShip(4);
    player.gameboard.placeRandomShip(3);
    player.gameboard.placeRandomShip(2);
    player.gameboard.placeRandomShip(2);
    console.log(player.gameboard)
    renderPlayerGameboard(player);
    startGame();
  });
  cache.changeDirectionButton.addEventListener("click", () => {
    if (player.gameboard.ships.length === 5) {
      return;
    }

    if (cache.changeDirectionButton.textContent === "Horizontal") {
      renderPlayerGameboard(player);
      setUpGame(player, "horizontal");
      cache.changeDirectionButton.textContent = "Vertical";
    } else {
      renderPlayerGameboard(player);
      setUpGame(player, "vertical");
      cache.changeDirectionButton.textContent = "Horizontal";
    }
  });
}

export { bindEvents };
