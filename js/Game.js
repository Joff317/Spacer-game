class Game {
  constructor() {
    this.startScreen = document.querySelector(".start-screen");
    this.gameScreen = document.querySelector(".game-screen");
    this.endScreen = document.querySelector(".game-end");
    this.player = new Player(
      this.gameScreen,
      250,
      550,
      70,
      80,
      "../images/SpaceShip2.png"
    );
    this.height = 600;
    this.width = 500;
    this.asteroid = [];
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

  update() {
    this.player.move(event);

    this.asteroid = this.asteroid.filter((asteroid) => {
      if (this.player.didCollide(asteroid)) {
        // Si une collision est détectée, supprimez l'astéroïde
        asteroid.element.remove();
        this.lives--;
        return false; // Retourne false pour retirer l'astéroïde de la liste
      }
      return asteroid.move();
    });

    if (this.lives === 0) {
      this.endGame();
    }

    // Ajouter de nouveaux astéroïdes si nécessaire
    if (Math.random() > 0.98 && this.asteroid.length < 4) {
      this.asteroid.push(new Asteroid(this.gameScreen));
    }

    // this.player.didCollide(this.asteroid);
  }

  endGame() {
    this.gameScreen.style.display = "none";
    this.endScreen.style.display = "block";

    this.gameIsOver = true;
    // Hide game screen
    // this.gameScreen.style.display = "none";
    // // Show end game screen
    // this.endScreen.style.display = "block";
  }
}
