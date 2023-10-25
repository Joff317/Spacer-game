class Projectile {
  constructor(game, gameScreen, PlayerX, PlayerY) {
    this.gameScreen = gameScreen;
    this.x = PlayerX;
    this.y = PlayerY;
    //  this.speed = -3;
    this.image = document.createElement("img");
    this.image.src = "../images/missile.png";
    this.image.style.position = "absolute";
    this.image.style.left = this.x + "px";
    this.image.style.top = this.y + "px";
    this.image.style.height = 70 + "px";
    this.image.style.width = 30 + "px";
    this.gameScreen.appendChild(this.image);

    this.move = this.move.bind(this);
    setInterval(this.move, 1000 / 60);
  }

  move() {
    this.y -= 3;

    if (this.top > this.gameScreen.clientHeight) {
      this.image.remove();
      return false;
    } else {
      this.updatePosition();
      return true;
    }
  }

  didCollide(asteroid) {
    const projectileRect = this.image.getBoundingClientRect();
    const asteroidRect = asteroid.element.getBoundingClientRect();

    if (
      projectileRect.left < asteroidRect.right &&
      projectileRect.right > asteroidRect.left &&
      projectileRect.top < asteroidRect.bottom 
    ) {
      console.log("HIT!");

      return true;
    } else {
      return false;
    }
  }

  updatePosition() {
    this.image.style.left = `${this.x}px`;
    this.image.style.top = `${this.y}px`;
  }
}
