class Game {
  constructor() {
    this.startScreen = document.querySelector(".start-screen");
    this.gameScreen = document.querySelector(".game-screen");
    this.endScreen = document.querySelector(".end-screen");
    this.player = new Player(
      this.gameScreen,
      250,
      550,
      100,
      100,
      "../images/spaceship.png"
    );
    this.height = 600;
    this.width = 500;
    this.ennemies = [];
    this.score = 0;
    this.lives = 1;
    this.gameIsOver = false;
  }

  start() {
    // Initialiser la taille de l'écran
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.height}px`;

    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.replay();
  }

  replay() {
    if (this.gameIsOver) {
      return;
    }

    this.update();

    window.requestAnimationFrame(() => this.replay());
  }

  update(event) {
    this.player.move(event);
  }

  endGame() {}
}
