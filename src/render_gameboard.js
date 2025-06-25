const gameboards = document.querySelectorAll('.gameboard');

function renderGameboard() {
    for (const board of gameboards) {
    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'gameboard_square');
        board.appendChild(div)
    }
}
}

export { renderGameboard }