class Asteroid {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 500);
    this.top = 0;
    this.speed = 2;
    this.width = 100;
    this.height = 120;
    this.borderRadius = 70;
    this.element = document.createElement("img");

    this.element.src = "../images/asteroid.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.gameScreen.appendChild(this.element);

    this.explosionElement = document.createElement("div");
    this.explosionElement.classList.add("explosion");
    this.explosionElement.style.display = "none";
    this.gameScreen.appendChild(this.explosionElement);
  }

  move() {
    this.top += this.speed;

    if (this.top > this.gameScreen.clientHeight) {
      this.element.remove();

      return false;
    } else {
      this.updatePosition();

      return true;
    }
  }

  updatePosition() {
    // Update the obstacle's position based on the properties left and top
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didCollide(projectile) {
    const asteroidRect = this.element.getBoundingClientRect();
    const projectileRect = projectile.image.getBoundingClientRect();

    return (
      asteroidRect.left < projectileRect.right &&
      asteroidRect.right > projectileRect.left &&
      asteroidRect.top < projectileRect.bottom &&
      asteroidRect.bottom > projectileRect.top
    );
  }

  explode() {
    const explosion = document.createElement("div");
    explosion.classList.add("explosion");
    explosion.style.left = this.left + "px";
    explosion.style.top = this.top + "px";

    this.gameScreen.appendChild(explosion);

    // Supprime l'explosion après un certain délai
    setTimeout(() => {
      explosion.remove();
    }, 500); // Supprime l'explosion après 500 millisecondes (0.5 seconde)
  }
}
