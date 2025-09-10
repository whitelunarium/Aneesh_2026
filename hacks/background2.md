---
layout: base
title: Background with Object
description: Use JavaScript to have an in motion background.
sprite: images/platformer/sprites/tails.jpg
background: images/platformer/backgrounds/basic.jpg
permalink: /background2
---

<canvas id="world"></canvas>

<script>

  // Defines canvas
  const canvas = document.getElementById("world");
  const ctx = canvas.getContext('2d');
  // Setting up image ojects
  const backgroundImg = new Image();
  const spriteImg = new Image();
  // Jekyll assignment of images to JS
  backgroundImg.src = '{{page.background}}'; //Background Image
  spriteImg.src = '{{page.sprite}}'; // Sprite Image

  // Image loading code block
  let imagesLoaded = 0;
  backgroundImg.onload = function() {
    imagesLoaded++;
    startGameWorld();
  };
  spriteImg.onload = function() {
    imagesLoaded++;
    startGameWorld();
  };

  // Block starts the game
  //Check for all the images being loaded into the game
  function startGameWorld() {
    if (imagesLoaded < 2) return;

    // Base class for any object in the game (background, player, etc.)
class GameObject {
  constructor(image, width, height, x = 0, y = 0, speedRatio = 0) {
    this.image = image;                  // Image to display
    this.width = width;                  // Width of object
    this.height = height;                // Height of object
    this.x = x;                          // X position on canvas
    this.y = y;                          // Y position on canvas
    this.speedRatio = speedRatio;        // Speed factor relative to game speed
    this.speed = GameWorld.gameSpeed * this.speedRatio;
  }
  update() {}                            // To be overridden by subclasses
  draw(ctx) {                            // Draw object to the canvas
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

// Background class that scrolls endlessly to the left
class Background extends GameObject {
  constructor(image, gameWorld) {
    super(image, gameWorld.width, gameWorld.height, 0, 0, 0.1); // Fill screen
  }
  update() {
    // Move background left, then wrap around for infinite scrolling
    this.x = (this.x - this.speed) % this.width;
  }
  draw(ctx) {
    // Draw two copies of the background so it looks seamless when looping
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
  }
}

// Player class with sprite that moves up and down in a sine wave
class Player extends GameObject {
  constructor(image, gameWorld) {
    const width = image.naturalWidth / 2;  // Scale down sprite
    const height = image.naturalHeight / 2;
    const x = (gameWorld.width - width) / 2;  // Center on screen
    const y = (gameWorld.height - height) / 2;
    super(image, width, height, x, y);
    this.baseY = y;                         // Starting vertical position
    this.frame = 0;                         // Used for sine wave animation
  }
  update() {
    // Move player sprite up and down in a smooth sine wave
    this.y = this.baseY + Math.sin(this.frame * 0.05) * 20;
    this.frame++;
  }
}

// GameWorld sets up the canvas, game objects, and handles the game loop
class GameWorld {
  static gameSpeed = 5;                     // Base game speed
  constructor(backgroundImg, spriteImg) {
    this.canvas = document.getElementById("world");
    this.ctx = this.canvas.getContext('2d');
    this.width = window.innerWidth;         // Full screen width
    this.height = window.innerHeight;       // Full screen height
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.canvas.style.position = 'absolute';
    this.canvas.style.left = `0px`;
    this.canvas.style.top = `${(window.innerHeight - this.height) / 2}px`;

    // Objects in the game world: scrolling background + player
    this.objects = [
     new Background(backgroundImg, this),
     new Player(spriteImg, this)
    ];
  }
  gameLoop() {
    // Clear canvas before redrawing
    this.ctx.clearRect(0, 0, this.width, this.height);
    // Update and draw each object (background + player)
    for (const obj of this.objects) {
      obj.update();
      obj.draw(this.ctx);
    }
    // Continuously run the game loop
    requestAnimationFrame(this.gameLoop.bind(this));
  }
  start() {
    this.gameLoop(); // Start the game loop
  }
}

// Create the game world and start it
const world = new GameWorld(backgroundImg, spriteImg);
world.start();