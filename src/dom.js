const cache = {
  newGameButton: document.querySelector("button"),
};

function bindEvents() {
  cache.newGameButton.addEventListener("click", () => {
    location.reload();
  });
}

export { bindEvents };
