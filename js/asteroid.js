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
  }

  move() {
    // Move the obstacle down by 3px
    this.top += this.speed;

    if (this.top > this.gameScreen.clientHeight) {
      // If it has, remove the asteroid from the screen and from the array
      this.element.remove();
      // Return false to indicate that the asteroid should be removed from the array
      return false;
    } else {
      // Update the asteroid's position on the screen
      this.updatePosition();
      // Return true to indicate that the asteroid should be kept in the array
      return true;
    }
  }

  updatePosition() {
    // Update the obstacle's position based on the properties left and top
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
}
