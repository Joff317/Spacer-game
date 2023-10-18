class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
    this.gameScreen.appendChild(this.element);

    this.isFollowingMouse = false; // Pour suivre ou non la souris
    this.margin = 20;

    this.gameScreen.addEventListener("mouseenter", () => {
      this.isFollowingMouse = true;
      this.element.style.display = "block";
    });

    this.gameScreen.addEventListener("mousemove", (event) => {
      if (this.isFollowingMouse) {
        this.move(event);
      }
    });

    this.gameScreen.addEventListener("mouseleave", () => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      if (
        mouseX <
        this.gameScreen.offsetLeft + this.gameScreen.offsetWidth / 2
      ) {
        // La souris est sortie à gauche de l'écran
        this.element.style.left = `${this.margin}px`;
      } else {
        // La souris est sortie à droite de l'écran
        this.element.style.left = `${
          this.gameScreen.offsetWidth - this.width - this.margin
        }px`;
      }
    });
  }

  move(event) {
    const gameRect = this.gameScreen.getBoundingClientRect();
    const mouseX = event.clientX - gameRect.left;
    const mouseY = event.clientY - gameRect.top;

    const minX = this.margin;
    const maxX = gameRect.width - this.width - this.margin;
    const minY = this.margin;
    const maxY = gameRect.height - this.height - this.margin;

    const clampedX = Math.min(maxX, Math.max(minX, mouseX - this.width / 2));
    const clampedY = Math.min(maxY, Math.max(minY, mouseY - this.height / 2));

    this.element.style.left = `${clampedX}px`;
    this.element.style.top = `${clampedY}px`;
  }

  // updatePosition() {
  //   this.element.style.left = `${Math.min(
  //     maxX,
  //     Math.max(minX, mouseX - this.width / 2)
  //   )}px`;
  //   this.element.style.top = `${Math.min(
  //     maxY,
  //     Math.max(minY, mouseY - this.height / 2)
  //   )}px`;
  // }
}
