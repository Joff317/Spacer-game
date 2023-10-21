class Projectile {
  constructor(gameScreen, PlayerX, PlayerY) {
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
   //  console.log("this.y classe projectile", this.y);

    //  this.image.style.top = this.y + "px";

    if (this.top > this.gameScreen.clientHeight) {
      this.image.remove();
      return false;
    } else {
      this.updatePosition();
      return true;
    }
  }

  updatePosition() {
    this.image.style.left = `${this.x}px`;
    this.image.style.top = `${this.y}px`;
  }
}
