---
layout: post
toc: True
breadcrumb: True
title: LXD Group Blog
description: My first blog in CSP 2025-26
permalink: /blogs/LxD_Group
author: Tanay Paranjpe and Perry Say
---

<div class="container">
  <div class="hero">
    <h1>🎨 Mastering Jekyll Theme Switching</h1>
    <p>An interactive guide to implementing flexible theme systems with real-world troubleshooting</p>
  </div>

  <!-- Intro: LxD Principles -->
  <div class="content-card">
    <h2 class="section-title">
      <span class="icon">🌱</span>
      LxD Core Principles
    </h2>
    <p>
      Learner Experience Design (LxD) isn’t just about making polished projects—it’s about embracing the messy, iterative process of learning. 
      In LxD, challenges, mistakes, and technical issues aren’t setbacks; they are opportunities to reflect, adapt, and strengthen problem-solving skills. 
      By documenting what doesn’t work, experimenting with alternatives, and refining designs, learners grow their resilience and creativity.
    </p>
    <div class="success-box">
      <strong>💡 Key Idea:</strong> Failure isn’t the end of the process—it’s fuel for growth. Each bug, error, or design conflict is a chance to 
      build confidence, adaptability, and a mindset of continuous improvement.
    </div>
  </div>

  <!-- Interactive Ninja Game -->
  <div class="interactive-demo">
    <h3>🍉 LxD Ninja: Slice the Good Practices!</h3>
    <canvas id="ninjaCanvas" width="600" height="400"></canvas>
    <p>Swipe across the canvas to slice good LxD items ✅ and avoid the bad ones ❌</p>
  </div>
</div>

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
