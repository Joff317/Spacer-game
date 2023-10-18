window.onload = function () {
  const startButton = document.getElementById("start-button");
  let game;
  startButton.addEventListener("click", function () {
    console.log("click");
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }

};
