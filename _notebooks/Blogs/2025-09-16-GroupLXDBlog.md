---
layout: post
toc: true
breadcrumb: true
title: LXD Group Blog
description: My first blog in CSP 2025-26
permalink: /blogs/LxD_Group
author: Tanay Paranjpe and Perry Say
---

<div class="container">
  <!-- Hero Section -->
  <div class="hero">
    <h1>🌱 LxD Group Blog</h1>
    <p>Exploring the principles of Learner Experience Design through practice, reflection, and play.</p>
  </div>

  <!-- Intro: LxD Principles -->
  <div class="content-card">
    <h2 class="section-title">📘 Core Principles</h2>
    <p>
      Learner Experience Design (LxD) is about learning by doing, reflecting, and improving. 
      Mistakes and problems aren’t failures—they’re chances to grow. 
      By trying, breaking, fixing, and trying again, we become stronger problem solvers.
    </p>
    <div class="success-box">
      <strong>💡 Key Idea:</strong> Every error is feedback. Use it to get better, not to stop.
    </div>
  </div>

  <!-- LxD Ninja Game -->
  <div class="interactive-demo">
    <h2 class="section-title">🎮 LxD Ninja Game</h2>
    <canvas id="ninjaCanvas" width="600" height="400"></canvas>
    <p>Swipe with your mouse: slice good practices ✅ and avoid the bad ones ❌</p>
  </div>
</div>

<style>
/* Simple Styling */
body { font-family: sans-serif; background:#1a1a1a; color:#e2e8f0; }
.container { max-width:800px; margin:0 auto; padding:20px; }
.hero { text-align:center; padding:40px 20px; margin-bottom:30px; }
.hero h1 { font-size:2.5rem; margin-bottom:10px; }
.content-card { background:#111; padding:20px; border-radius:10px; margin-bottom:30px; }
.section-title { font-size:1.5rem; margin-bottom:15px; border-bottom:2px solid #4f46e5; display:inline-block; }
.success-box { background:#14532d; border-left:5px solid #4ade80; padding:15px; border-radius:5px; margin-top:15px; }
.interactive-demo { background:#111; padding:20px; border-radius:10px; text-align:center; }
canvas { background:#222; border:2px solid #4f46e5; border-radius:10px; display:block; margin:1rem auto; }
</style>

<script>
// ---------------- Fruit Ninja Style Game ----------------
const canvas = document.getElementById("ninjaCanvas");
const ctx = canvas.getContext("2d");

// Items
const goodItems = ["so-simple", "venv", "commit often"];
const badItems = ["no commits", "broken configs", "ignoring errors"];

let items = [];
let score = 0;
let lives = 3;

// Spawn items randomly
function spawnItem(){
  const isGood = Math.random() > 0.4;
  const text = isGood 
    ? goodItems[Math.floor(Math.random()*goodItems.length)]
    : badItems[Math.floor(Math.random()*badItems.length)];
  
  items.push({
    text,
    good:isGood,
    x:Math.random()*(canvas.width-80)+40,
    y:canvas.height,
    dy:-(4+Math.random()*3), // upward velocity
    sliced:false
  });
}
setInterval(spawnItem, 1500);

// Track mouse movement for "slicing"
let mouseX=0, mouseY=0, isDown=false;
canvas.addEventListener("mousedown", ()=> isDown=true);
canvas.addEventListener("mouseup", ()=> isDown=false);
canvas.addEventListener("mousemove", e=>{
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX-rect.left;
  mouseY = e.clientY-rect.top;
});

// Draw loop
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  // Draw items
  items.forEach(item=>{
    if(!item.sliced){
      ctx.fillStyle=item.good?"#4ade80":"#f87171";
      ctx.font="16px Arial";
      ctx.fillText(item.text,item.x,item.y);
      
      // Movement
      item.y += item.dy;
      item.dy += 0.15; // gravity
      
      // Slice detection
      if(isDown && Math.abs(mouseX-item.x)<40 && Math.abs(mouseY-item.y)<20){
        item.sliced=true;
        if(item.good){ score+=5; }
        else { score-=3; lives--; }
      }
    }
  });
  
  // Remove sliced or fallen items
  items = items.filter(item=> !item.sliced && item.y<canvas.height+20);
  
  // Score + lives
  ctx.fillStyle="#e2e8f0";
  ctx.font="18px Arial";
  ctx.fillText("Score: "+score,10,20);
  ctx.fillText("Lives: "+lives,10,40);
  
  // Game Over
  if(lives<=0){
    ctx.fillStyle="red";
    ctx.font="36px Arial";
    ctx.fillText("GAME OVER",canvas.width/2-100,canvas.height/2);
    return;
  }
  
  requestAnimationFrame(draw);
}
draw();
</script>
