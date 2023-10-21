window.onload = function () {
  const startButton = document.getElementById("start-button");
  const reStartButton = document.getElementById("btn-restart-game");
  let game;
  startButton.addEventListener("click", function () {
    console.log("click");
    startGame();
  });

  reStartButton.addEventListener("click", function () {
    restartGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }

  function restartGame() {
    location.reload();
  }
};
