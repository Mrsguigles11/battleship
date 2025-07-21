import "./styles.css";
import { renderComputerGameboard, renderPlayerGameboard } from "./rendering";
import { Player } from "./classes";
import { bindEvents } from "./dom";
import { startNewGame } from "./game_logic";
import { addHover } from "./place_ships";

const computer = new Player("computer");
computer.gameboard.survivingShips = new Set();
const player = new Player("player");

startNewGame();
renderComputerGameboard(computer);
renderPlayerGameboard(player);
bindEvents();

let graph = [];
const playerGameboardRows =
    document.querySelector("#player_gameboard").children;
    for (let i = 0; i < 10; i++) {
        let array = [];
        const rowChildren = playerGameboardRows[i].children
        for (const child of rowChildren) {
            array.push(child)
        }
        graph.push(array);
    }    


addHover(4, "vertical");



export { player, computer, graph }
