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

    this.projectiles = [];

    this.isFollowingMouse = false; // On initialise une variable pour suivre la souris
    this.margin = 20; // Définit ou l'image du joueur va rester

    this.setupMouseEnter();
    this.setupMouseMove();
    this.setupMouseLeave();
    this.shootingTime();
  }

  setupMouseEnter() {
    // Ici on regarde quand la souris entre dans l'écran du jeux
    this.gameScreen.addEventListener("mouseenter", () => {
      this.isFollowingMouse = true;
      this.element.style.display = "block";
    });
  }

  setupMouseMove() {
    // Ici c'est pour le gestionnaire de suivi de souris
    this.gameScreen.addEventListener("mousemove", (event) => {
      if (this.isFollowingMouse) {
        this.move(event);
      }
    });
  }

  setupMouseLeave() {
    // Ici c'est le gestionnaire de sorti de souris
    this.gameScreen.addEventListener("mouseleave", (event) => {
      this.handleMouseLeave(event);
    });
  }

  move(event) {
    if (event) {
      const gameRect = this.gameScreen.getBoundingClientRect(); // coordonnées de l'écran de jeux
      const mouseX = event.clientX - gameRect.left; //  position horizontale de la souris - la gauche de l'écran selectionné car si non on prend tout l'écran
      // console.log(mouseX);
      const mouseY = event.clientY - gameRect.top; //  position verticale de la souris - le top de l'écran selectionné
      // console.log(mouseY);

      const minX = this.margin; //limite minimale de la position horizontale du joueur
      const maxX = gameRect.width - this.width - this.margin; //limite maximale de la position horizontale du joueur largeur totale de l'écran de jeux (gameRect.width) - largeur du joueur (this.width) - marge par rapport au bord droit de la zone de jeu.
      const minY = this.margin; //limite minimale de la position verticale du joueur
      const maxY = gameRect.height - this.height - this.margin; //Pareil que le 2 mais avec la verticalité

      const clampedX = Math.min(maxX, Math.max(minX, mouseX - this.width / 2)); //horizontale de la souris (mouseX) - la moitié de la largeur du joueur, nous donne une position horizontale qui place le joueur de manière à ce que son centre soit aligné avec la position horizontale de la souris.
      const clampedY = Math.min(maxY, Math.max(minY, mouseY - this.height / 2));

      //On passe les résultats à l'image
      this.left = clampedX;
      this.top = clampedY;
      this.element.style.left = `${clampedX}px`;
      this.element.style.top = `${clampedY}px`;
    }
  }

  handleMouseLeave(event) {
    const mouseX = event.clientX;

    if (mouseX < this.gameScreen.offsetLeft + this.gameScreen.offsetWidth / 2) {
      // La souris sort à gauche de l'écran
      this.element.style.left = `${this.margin}px`;
    } else {
      // La souris sort à droite de l'écran
      this.element.style.left = `${
        this.gameScreen.offsetWidth - this.width - this.margin
      }px`;
    }
  }

  shootingTime() {
    setInterval(() => {
      if (this.isFollowingMouse) {
        this.fire();
      }
    }, 300);
  }

  fire() {
    console.log(this.projectiles);
    if (this.projectiles.length < 10) {
      // console.log("tessst");
      this.projectiles.push(
        new Projectile(this.game, this.gameScreen, this.left, this.top)
      );
      this.projectiles.filter((projectile) => {
        return projectile.move();
      });
    } else {
      this.projectiles.shift();
    }
  }

  didCollide(asteroid) {
    const playerRect = this.element.getBoundingClientRect();
    const asteroidRect = asteroid.element.getBoundingClientRect();

    if (
      (playerRect.left >= asteroidRect.left &&
        playerRect.left <= asteroidRect.right &&
        playerRect.top >= asteroidRect.top &&
        playerRect.top <= asteroidRect.bottom) ||
      (playerRect.right >= asteroidRect.left &&
        playerRect.right <= asteroidRect.right &&
        playerRect.top >= asteroidRect.top &&
        playerRect.top <= asteroidRect.bottom) ||
      (playerRect.left >= asteroidRect.left &&
        playerRect.left <= asteroidRect.right &&
        playerRect.bottom >= asteroidRect.top &&
        playerRect.bottom <= asteroidRect.bottom) ||
      (playerRect.right >= asteroidRect.left &&
        playerRect.right <= asteroidRect.right &&
        playerRect.bottom >= asteroidRect.top &&
        playerRect.bottom <= asteroidRect.bottom)
    ) {
      // console.log("Crash!");

      return true;
    } else {
      return false;
    }
  }
}
