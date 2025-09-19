---
layout: post
toc: true
breadcrumb: true
title: LXD Group Blog
description: My first blog in CSP 2025-26
permalink: /blogs/LxD_Group
author: Tanay Paranjpe and Perry Say
render_with_liquid: false
---

<div class="container">
  <!-- Hero Section -->
  <div class="hero">
    <h1>🌱 LxD Group Blog</h1>
    <p>Exploring the principles of Learner Experience Design through practice, reflection, and play.</p>
  </div>

  <!-- Intro: LxD Principles -->
  <div class="content-card">
    <h2 class="section-title">📘 What is Learner Experience Design (LxD)?</h2>
    <p>
      LxD is about creating meaningful learning experiences through active experimentation and reflection. 
      It emphasizes learning by doing: trying, making mistakes, reflecting, and improving. 
      Each challenge is an opportunity to grow and strengthen problem-solving skills.
    </p>
    <div class="success-box">
      <strong>💡 Key Idea:</strong> Every error is feedback. Use it to improve, not to stop.
    </div>
  </div>

  <!-- Theme Switching -->
  <div class="content-card">
    <h2 class="section-title">🌗 Theme Switching</h2>
    <p>
      Theme switching lets us change how the blog looks without breaking content. 
      Instead of editing everything by hand, we use a <code>_themes/</code> folder and a 
      <code>Makefile</code> that copies the right files into place. 
      Jekyll always checks for layouts locally first, and only uses the remote theme if no local override exists.
    </p>
    <ul>
      <li><strong>So Simple</strong> → clean, lightweight, minimal distractions</li>
      <li><strong>Cayman</strong> → colorful, GitHub-flavored style</li>
      <li><strong>Minima</strong> → Jekyll’s default, flexible but plain</li>
      <li><strong>Yat</strong> → modern, bold typography with sidebar navigation</li>
    </ul>
    <p>
      Each theme has its own <code>_config.yml</code>, <code>Gemfile</code>, and 
      <code>_layouts/</code> folder. The Makefile automates copying the correct set into the root. 
      For example:
    </p>
    <pre><code>make use-so-simple   # applies So Simple theme
make use-minima      # switches to Minima
make use-yat         # switches to Yat
    </code></pre>
    <p>
      After running a command, Jekyll rebuilds with the selected theme. Because layouts like 
      <code>opencs.html</code> are stored locally, they override the default theme layouts—allowing us 
      to keep custom pages while still swapping between themes.
    </p>
    <p>
      <strong>How to try it yourself:</strong>
      1) Run a <code>make use-[theme]</code> command.<br>
      2) Start the site with <code>jekyll serve</code>.<br>
      3) Open <a href="http://localhost:4000" target="_blank">http://localhost:4000</a> 
      and see the new theme in action.<br>
      4) Switch again and notice that content never changes—only the presentation.
    </p>
  </div>

  <!-- Interactive Game -->
  <div class="interactive-demo">
    <h2 class="section-title">🎮 LxD Ninja Game</h2>
    <canvas id="ninjaCanvas" width="600" height="400"></canvas>
    <p>Swipe with your mouse: slice good practices ✅ and avoid the bad ones ❌.  
       Score 15 points to unlock the reflection section!</p>
  </div>

  <!-- Reflection Section (hidden at first) -->
  <div id="reflection" class="content-card hidden">
    <h2 class="section-title">📝 Reflection</h2>
    <p>
      Switching themes is not just about style—it’s about adaptability.  
      By keeping layouts modular and using a Makefile, we can swap presentation without rewriting content.  
      This mirrors LxD: design learning so it adapts to the learner, not the other way around.
    </p>
    <p>
      <strong>Takeaway:</strong> Jekyll theme switching shows how structure + flexibility create resilience.  
      In the same way, learners grow best when given space to try, adapt, and reflect.
    </p>
  </div>
</div>

<style>
/* Styling */
body { font-family: sans-serif; background:#1a1a1a; color:#e2e8f0; }
.container { max-width:800px; margin:0 auto; padding:20px; }
.hero { text-align:center; padding:40px 20px; margin-bottom:30px; }
.hero h1 { font-size:2.5rem; margin-bottom:10px; }
.content-card { background:#111; padding:20px; border-radius:10px; margin-bottom:30px; }
.section-title { font-size:1.5rem; margin-bottom:15px; border-bottom:2px solid #4f46e5; display:inline-block; }
.success-box { background:#14532d; border-left:5px solid #4ade80; padding:15px; border-radius:5px; margin-top:15px; }
.interactive-demo { background:#111; padding:20px; border-radius:10px; text-align:center; }
canvas { background:#222; border:2px solid #4f46e5; border-radius:10px; display:block; margin:1rem auto; }
.hidden { display:none; }
</style>

<script>
// ---------------- LxD Ninja Game ----------------
const canvas = document.getElementById("ninjaCanvas");
const ctx = canvas.getContext("2d");

// Good & bad practices
const goodItems = ["commit often", "use _themes/", "make use-minima", "local overrides", "jekyll serve"];
const badItems = ["no commits", "ignore errors", "delete _layouts", "skip config", "hardcode everything"];

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
    x:Math.random()*(canvas.width-100)+50,
    y:canvas.height,
    dy:-(3+Math.random()*2),
    sliced:false
  });
}
setInterval(spawnItem, 1800);

// Mouse slice tracking
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
  
  items.forEach(item=>{
    if(!item.sliced){
      ctx.fillStyle=item.good?"#4ade80":"#f87171";
      ctx.font="16px Arial";
      ctx.fillText(item.text,item.x,item.y);
      
      item.y += item.dy;
      item.dy += 0.12;
      
      if(isDown && Math.abs(mouseX-item.x)<40 && Math.abs(mouseY-item.y)<20){
        item.sliced=true;
        if(item.good){ score+=5; }
        else { score-=3; lives--; }
      }
    }
  });
  
  items = items.filter(item=> !item.sliced && item.y<canvas.height+20);
  
  ctx.fillStyle="#e2e8f0";
  ctx.font="18px Arial";
  ctx.fillText("Score: "+score,10,20);
  ctx.fillText("Lives: "+lives,10,40);
  
  if(lives<=0){
    ctx.fillStyle="red";
    ctx.font="36px Arial";
    ctx.fillText("GAME OVER",canvas.width/2-100,canvas.height/2);
    return;
  }

  // Unlock reflection section at 15 points
  if(score>=15){
    document.getElementById("reflection").classList.remove("hidden");
  }
  
  requestAnimationFrame(draw);
}
draw();
</script>
