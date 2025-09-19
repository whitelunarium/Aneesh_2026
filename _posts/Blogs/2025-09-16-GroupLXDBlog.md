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

  <!-- Practical Challenges -->
  <div class="content-card">
    <h2 class="section-title">⚡ Practical Challenges in LxD</h2>
    <p>
      Even with the right design mindset, learners and creators face obstacles:
      balancing simplicity with depth, dealing with technical setup errors, or 
      keeping engagement high without overwhelming the learner. 
      Theme switching is a good example—it makes design flexible, 
      but requires careful setup to avoid conflicts.
    </p>
  </div>

  <!-- Theme Switching -->
  <div class="content-card">
    <h2 class="section-title">🌗 Theme Switching</h2>
    <p>
      Theme switching lets us change how the blog looks without breaking content. 
      Using the <code>_themes/</code> folder and a <code>Makefile</code>, we can copy in the right 
      <code>_config.yml</code>, <code>Gemfile</code>, and <code>_layouts/</code> files for each theme. 
      Jekyll always looks for layouts locally first, then falls back to the remote theme. 
    </p>
    <ul>
      <li><strong>So Simple</strong> → clean, lightweight, minimal distractions</li>
      <li><strong>Cayman</strong> → colorful, GitHub-flavored style</li>
      <li><strong>Minima</strong> → Jekyll’s default, flexible but plain</li>
      <li><strong>Yat</strong> → modern, bold typography with sidebar navigation</li>
    </ul>
    <p>
      Running commands like <code>make use-so-simple</code> or <code>make use-minima</code> 
      applies the selected theme. Overrides (like <code>opencs.html</code>) allow us to 
      customize layouts while keeping themes swappable.
    </p>
  </div>

  <!-- LxD Ninja Game -->
  <div class="interactive-demo">
    <h2 class="section-title">🎮 LxD Ninja Game</h2>
    <canvas id="ninjaCanvas" width="600" height="400"></canvas>
    <p>Swipe with your mouse: slice <span style="color:#4ade80">good practices ✅</span> and avoid <span style="color:#f87171">bad ones ❌</span></p>
    <p id="unlockMessage" style="display:none; color:#4ade80; font-weight:bold; margin-top:15px;">
      🎉 Great job! You unlocked the Reflection Section below.
    </p>
  </div>

  <!-- Reflection Section (Hidden until unlocked) -->
  <div id="reflectionSection" class="content-card" style="display:none;">
    <h2 class="section-title">📝 Reflection & Summary</h2>
    <p>
      Through this activity, we learned how <strong>theme switching</strong> empowers flexibility in design, 
      while <strong>LxD principles</strong> remind us that trial and error drives growth. 
      The game reinforced sorting “good” and “bad” practices—just like theme overrides help us 
      keep what works and remove what doesn’t.
    </p>
    <p>
      Key takeaways: <br>
      ✅ Mistakes guide improvement <br>
      ✅ Themes are swappable with minimal friction <br>
      ✅ Reflection solidifies learning <br>
      ✅ Challenges are opportunities to design smarter
    </p>
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

const goodItems = ["commit often", "use overrides", "make use-so-simple", "opencs.html"];
const badItems = ["no commits", "ignore errors", "delete _layouts", "skip config"];

let items = [];
let score = 0;
let lives = 3;
let unlocked = false;

function spawnItem(){
  const isGood = Math.random() > 0.4;
  const text = isGood 
    ? goodItems[Math.floor(Math.random()*goodItems.length)]
    : badItems[Math.floor(Math.random()*badItems.length)];
  
  items.push({
    text,
    good:isGood,
    x:Math.random()*(canvas.width-100)+40,
    y:canvas.height,
    dy:-(3+Math.random()*2),
    sliced:false
  });
}
setInterval(spawnItem, 2000);

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
  
  items.forEach(item=>{
    if(!item.sliced){
      ctx.fillStyle=item.good?"#4ade80":"#f87171";
      ctx.font="16px Arial";
      ctx.fillText(item.text,item.x,item.y);
      
      item.y += item.dy;
      item.dy += 0.1;
      
      if(isDown && Math.abs(mouseX-item.x)<50 && Math.abs(mouseY-item.y)<20){
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
  
  // Unlock Reflection
  if(score>=15 && !unlocked){
    unlocked=true;
    document.getElementById("reflectionSection").style.display="block";
    document.getElementById("unlockMessage").style.display="block";
  }
  
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
