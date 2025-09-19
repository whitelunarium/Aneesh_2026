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
      We implemented a light/dark theme switch for our blog to improve readability and user experience. 
      Users can toggle themes easily, and the design adapts dynamically using CSS variables and JavaScript. 
      This makes the interface more flexible and enjoyable for different lighting conditions.
    </p>
    <p>
      In Jekyll, switching a theme means updating your <code>_config.yml</code> file. 
      Inside it, you change the line <code>theme: &lt;theme-name&gt;</code>. 
      For example:
    </p>
    <ul>
      <li><code>theme: so-simple</code> → clean and minimal</li>
      <li><code>theme: cayman</code> → bright with bold headers</li>
      <li><code>theme: minima</code> → Jekyll’s default, simple and flexible</li>
      <li><code>theme: yat</code> → stylish with sidebar and modern look</li>
    </ul>
    <p>
      After saving the file, run <code>bundle install</code> and <code>jekyll serve</code> 
      to see the new theme in action. You can switch back and forth by editing that one line.
    </p>
  </div>

  <!-- LxD Ninja Game -->
  <div class="interactive-demo">
    <h2 class="section-title">🎮 LxD Ninja Game</h2>
    <canvas id="ninjaCanvas" width="600" height="400"></canvas>
    <p>Swipe with your mouse: slice good practices ✅ and avoid the bad ones ❌</p>
  </div>

  <!-- Lesson Summary (hidden until unlocked) -->
  <div id="lessonSummary" class="content-card" style="display:none;">
    <h2 class="section-title">📖 Lesson Summary</h2>
    <p>
      In this lesson, we learned that designing a learning experience involves both 
      <strong>content</strong> (what we study) and <strong>process</strong> (how we study). 
      Mistakes are useful for growth, and reflection helps lock in what we’ve practiced. 
      Theme switching is another example of design thinking: by customizing the look and feel, 
      we adapt the environment to improve user experience.  
      Finally, the LxD Ninja Game showed that good practices—like committing code often or 
      fixing errors quickly—help us succeed, while ignoring those habits leads to failure.  
      Together, these ideas remind us that learning is active, adaptable, and always improving.
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

// Items
const goodItems = ["commit often", "use venv", "fix errors", "push updates"];
const badItems = ["ignore bugs", "no commits", "broken configs", "skip testing"];

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
    dy:-(4+Math.random()*3),
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
  
  items.forEach(item=>{
    if(!item.sliced){
      ctx.fillStyle=item.good?"#4ade80":"#f87171";
      ctx.font="16px Arial";
      ctx.fillText(item.text,item.x,item.y);
      
      item.y += item.dy;
      item.dy += 0.15;
      
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

  if(score >= 15){
    document.getElementById("lessonSummary").style.display="block";
  }
  
  requestAnimationFrame(draw);
}
draw();
</script>
