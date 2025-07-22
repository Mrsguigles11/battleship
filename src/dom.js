import { player, computer } from "./index.js";
import { renderPlayerGameboard } from "./rendering";
import { startNewGame, startGame } from "./game_logic.js";

const cache = {
  newGameButton: document.querySelector("#new_game_btn"),
  randomShipsButton : document.querySelector('#random_ships_btn'), 
};

function bindEvents() {
  cache.newGameButton.addEventListener("click", () => {
    if (player.gameboard.ships.length === 0) {
      return
    }
    startNewGame();
  });
  cache.randomShipsButton.addEventListener('click', () => {
    if (player.gameboard.hits.size != 0 || player.gameboard.misses.size != 0) {
      return
    }
    player.gameboard.ships = [];
    renderPlayerGameboard(player);
    player.gameboard.placeRandomShip(5);
    player.gameboard.placeRandomShip(4);
    player.gameboard.placeRandomShip(3);
    player.gameboard.placeRandomShip(2);
    player.gameboard.placeRandomShip(2);
    renderPlayerGameboard(player);
    startGame();
  })
    
  }


export { bindEvents };
