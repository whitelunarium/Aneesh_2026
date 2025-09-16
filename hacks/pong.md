---
layout: post
title: 🏓 Complete Pong Game Code Implementation
description: Complete HTML, CSS, and JavaScript code for building a fully functional 2-player Pong game
categories: ['Game Development', 'JavaScript', 'Canvas API', 'Code Implementation']
permalink: /pong
menu: nav/tools_setup.html
toc: True
comments: True
---

## 🎮 Pong Game Demo

<div class="game-canvas-container" style="text-align:center;">
  <canvas id="pongCanvas" width="800" height="500"></canvas>
  <br>
  <button id="restartBtn">Restart Game</button>
</div>

<style>
  .game-canvas-container {
    margin-top: 20px;
  }
  #pongCanvas {
    border: 2px solid #fff;
    background: #000;
  }
  #restartBtn {
    display: none;
    margin-top: 15px;
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 6px;
    background: #4caf50;
    color: white;
    cursor: pointer;
  }
  #restartBtn:hover {
    background: #45a049;
  }
</style>

<script>
const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

const paddleWidth = 10;
let paddleHeight = 100; // 🎯 Start height
const minPaddleHeight = 40; // 🧱 Smallest allowed paddle height
let player1Y = (canvas.height - paddleHeight) / 2;
let player2Y = (canvas.height - paddleHeight) / 2;
const paddleSpeed = 7;

let ballX, ballY, ballSpeedX, ballSpeedY, ballRadius = 10;

let player1Score = 0, player2Score = 0;
const winningScore = 10;
let gameOver = false;

const restartBtn = document.getElementById('restartBtn');

function initBall() {
  ballX = canvas.width/2;
  ballY = canvas.height/2;
  ballSpeedX = Math.random() > 0.5 ? 5 : -5;
  ballSpeedY = (Math.random() * 4) - 2;
}

function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function drawCircle(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, false);
  ctx.closePath();
  ctx.fill();
}

function drawText(text, x, y, color="white") {
  ctx.fillStyle = color;
  ctx.font = "30px Arial";
  ctx.fillText(text, x, y);
}

function draw() {
  // background
  drawRect(0, 0, canvas.width, canvas.height, "#000");

  // paddles
  drawRect(0, player1Y, paddleWidth, paddleHeight, "#fff");
  drawRect(canvas.width - paddleWidth, player2Y, paddleWidth, paddleHeight, "#fff");

  // ball
  drawCircle(ballX, ballY, ballRadius, "#fff");

  // scores
  drawText(player1Score, canvas.width/4, 50);
  drawText(player2Score, 3*canvas.width/4, 50);

  if(gameOver) {
    drawText("Game Over", canvas.width/2 - 80, canvas.height/2 - 20, "red");
    drawText(
      player1Score >= winningScore ? "Player 1 Wins!" : "Player 2 Wins!",
      canvas.width/2 - 120,
      canvas.height/2 + 20,
      "yellow"
    );
  }
}

function update() {
  if (gameOver) return;

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // top/bottom collision
  if(ballY + ballRadius > canvas.height || ballY - ballRadius < 0) {
    ballSpeedY = -ballSpeedY;
  }

  // player1 paddle collision
  if(ballX - ballRadius < paddleWidth &&
     ballY > player1Y && ballY < player1Y + paddleHeight) {
    ballSpeedX = -ballSpeedX;
    let deltaY = ballY - (player1Y + paddleHeight/2);
    ballSpeedY = deltaY * 0.3;

    // 🔥 Shrink paddles slightly, but not below minimum
    if (paddleHeight > minPaddleHeight) {
      paddleHeight -= 2;
    }
  }

  // player2 paddle collision
  if(ballX + ballRadius > canvas.width - paddleWidth &&
     ballY > player2Y && ballY < player2Y + paddleHeight) {
    ballSpeedX = -ballSpeedX;
    let deltaY = ballY - (player2Y + paddleHeight/2);
    ballSpeedY = deltaY * 0.3;

    // 🔥 Shrink paddles slightly, but not below minimum
    if (paddleHeight > minPaddleHeight) {
      paddleHeight -= 2;
    }
  }

  // scoring
  if(ballX - ballRadius < 0) {
    player2Score++;
    if(player2Score >= winningScore) {
      gameOver = true;
      restartBtn.style.display = "inline-block";
    }
    initBall();
  } else if(ballX + ballRadius > canvas.width) {
    player1Score++;
    if(player1Score >= winningScore) {
      gameOver = true;
      restartBtn.style.display = "inline-block";
    }
    initBall();
  }
}

// Player controls
const keys = {};
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

function handleInput() {
  // Player 1 (W / S)
  if(keys["w"] && player1Y > 0) player1Y -= paddleSpeed;
  if(keys["s"] && player1Y + paddleHeight < canvas.height) player1Y += paddleSpeed;

  // Player 2 (I / K)
  if(keys["i"] && player2Y > 0) player2Y -= paddleSpeed;
  if(keys["k"] && player2Y + paddleHeight < canvas.height) player2Y += paddleSpeed;
}

function gameLoop() {
  update();
  handleInput();
  draw();
  requestAnimationFrame(gameLoop);
}

restartBtn.addEventListener("click", () => {
  player1Score = 0;
  player2Score = 0;
  paddleHeight = 100; // 🔄 Reset paddle height
  player1Y = (canvas.height - paddleHeight) / 2;
  player2Y = (canvas.height - paddleHeight) / 2;
  gameOver = false;
  restartBtn.style.display = "none";
  initBall();
});

initBall();
gameLoop();
</script>

