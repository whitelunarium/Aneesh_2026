---
layout: post
toc: True
breadcrumb: True
title: LXD Group Blog
description: My first blog in CSP 2025-26
permalink: /blogs/LxD_Group
author: Tanay Paranjpe 
---

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Interactive Jekyll Theme Guide</title>
<style>
/* ------------------- Base Styles ------------------- */
* { margin:0; padding:0; box-sizing:border-box; }
body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height:1.7;
    color:#e2e8f0;
    background:#1a1a1a;
    min-height:100vh;
}
.container { max-width:1200px; margin:0 auto; padding:20px; }
.hero { text-align:center; padding:60px 20px; background:rgba(0,0,0,0.5); border-radius:20px; margin-bottom:40px; color:white; }
.hero h1 { font-size:3rem; font-weight:800; margin-bottom:20px; text-shadow:2px 2px 4px rgba(0,0,0,0.6); }
.hero p { font-size:1.3rem; opacity:0.9; max-width:600px; margin:0 auto; }

/* ------------------- Content Cards ------------------- */
.content-card, .card { background:#111; border-radius:15px; padding:40px; margin-bottom:30px; box-shadow:0 20px 40px rgba(0,0,0,0.5); transition:transform 0.3s ease; color:#e2e8f0; }
.content-card:hover, .card:hover { transform:translateY(-5px); }
.section-title { font-size:2.2rem; color:#e2e8f0; margin-bottom:25px; padding-bottom:10px; border-bottom:3px solid #4f46e5; display:flex; align-items:center; gap:15px; }
.icon { font-size:2rem; }

/* ------------------- Code & Terminal ------------------- */
.code-block { background:#1a1a1a; color:#e6e6e6; padding:25px; border-radius:10px; margin:20px 0; font-family:'Monaco','Menlo',monospace; overflow-x:auto; border-left:4px solid #4f46e5; }
.code-block pre { margin:0; white-space:pre-wrap; }
.terminal { background:#000; color:#00ff41; padding:20px; border-radius:10px; font-family:'Monaco', monospace; margin:15px 0; }

/* ------------------- Interactive & Theme ------------------- */
.interactive-demo { background: linear-gradient(45deg, #111, #222); border:2px dashed #4f46e5; border-radius:15px; padding:30px; margin:25px 0; text-align:center; }
.theme-selector, .theme-buttons { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:20px; margin:20px 0; }
.theme-option, .theme-btn { background:#111; border:2px solid #333; border-radius:10px; padding:20px; cursor:pointer; transition:all 0.3s ease; text-align:center; color:#e2e8f0; }
.theme-option:hover, .theme-btn:hover { border-color:#4f46e5; transform:scale(1.05); box-shadow:0 10px 20px rgba(79,70,229,0.2); }
.theme-option.active, .theme-btn.active { background:#4f46e5; color:white; border-color:#4f46e5; }

/* ------------------- Steps & Alerts ------------------- */
.step { background:#111; border-radius:10px; padding:25px; margin:20px 0; border-left:5px solid #4f46e5; }
.step-number { background:#4f46e5; color:white; width:30px; height:30px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-weight:bold; margin-right:15px; }
.warning-box { background:#78350f; border:1px solid #b45309; border-radius:10px; padding:20px; margin:20px 0; border-left:5px solid #fbbf24; }
.success-box { background:#14532d; border:1px solid #16a34a; border-radius:10px; padding:20px; margin:20px 0; border-left:5px solid #4ade80; }

/* ------------------- File Tree ------------------- */
.file-tree { background:#111; border:1px solid #333; border-radius:10px; padding:20px; margin:20px 0; font-family:'Monaco', monospace; font-size:0.9rem; color:#cbd5e0; }

/* ------------------- Game Canvas ------------------- */
#gameCanvas { display:block; margin:1rem auto; background:#222; border:2px solid #4f46e5; border-radius:10px; }

/* ------------------- Responsive ------------------- */
@media (max-width:768px) { .hero h1{ font-size:2rem; } .theme-selector, .theme-buttons{ grid-template-columns:1fr; } }
</style>
</head>
<body>
    <div class="container">
        <div class="hero">
            <h1>🎨 Mastering Jekyll Theme Switching</h1>
            <p>An interactive guide to implementing flexible theme systems with real-world troubleshooting</p>
        </div>

        <div class="content-card">
            <h2 class="section-title">
                <span class="icon">🎯</span>
                Learning Objectives
            </h2>
            <ul>
                <li>Understand the architecture of Jekyll theme switching systems</li>
                <li>Implement a Makefile-based theme switching mechanism</li>
                <li>Troubleshoot common issues and edge cases</li>
                <li>Design flexible override systems for customization</li>
            </ul>
        </div>

        <div class="content-card">
            <h2 class="section-title">
                <span class="icon">🏗️</span>
                Understanding the Architecture
            </h2>
            
            <p>Before diving into implementation, let's understand how Jekyll theme switching works at a fundamental level.</p>
            
            <div class="interactive-demo">
                <h3>📁 Directory Structure Visualization</h3>
                <div class="file-tree" id="file-tree">
                    <div>📂 your-project/</div>
                    <div style="margin-left: 20px;">📂 _themes/</div>
                    <div style="margin-left: 40px;">📂 minima/</div>
                    <div style="margin-left: 60px;">📄 _config.yml</div>
                    <div style="margin-left: 60px;">📄 Gemfile</div>
                    <div style="margin-left: 60px;">📄 opencs.html</div>
                    <div style="margin-left: 60px;">📂 _layouts/</div>
                    <div style="margin-left: 80px;">📄 post.html</div>
                    <div style="margin-left: 80px;">📄 page.html</div>
                    <div style="margin-left: 40px;">📂 text/</div>
                    <div style="margin-left: 60px;">📄 _config.yml</div>
                    <div style="margin-left: 60px;">📄 Gemfile</div>
                    <div style="margin-left: 60px;">📂 _layouts/</div>
                    <div style="margin-left: 80px;">📄 post.html</div>
                    <div style="margin-left: 80px;">📄 page.html</div>
                    <div style="margin-left: 20px;">📂 _layouts/ (active)</div>
                    <div style="margin-left: 40px;">📄 post.html</div>
                    <div style="margin-left: 40px;">📄 page.html</div>
                    <div style="margin-left: 40px;">📄 opencs.html</div>
                    <div style="margin-left: 20px;">📄 _config.yml</div>
                    <div style="margin-left: 20px;">📄 Gemfile</div>
                    <div style="margin-left: 20px;">📄 Makefile</div>
                </div>
            </div>

            <div class="success-box">
                <strong>💡 Key Insight:</strong> The <code>_themes/</code> directory stores all theme configurations, while the root level contains the currently active theme files. Jekyll ignores the <code>_themes/</code> directory during builds.
            </div>
        </div>

        <div class="content-card">
            <h2 class="section-title">
                <span class="icon">🔧</span>
                Step-by-Step Implementation
            </h2>

<!-- Step 1 -->
<div class="step">
<span class="step-number">1</span>
<strong>Create Theme Directory Structure</strong>
<div class="code-block">
<pre># Create the themes directory
mkdir -p _themes/{minima,text,cayman,so-simple}

# Create layout directories for each theme
mkdir -p _themes/minima/_layouts
mkdir -p _themes/text/_layouts
mkdir -p _themes/cayman/_layouts
mkdir -p _themes/so-simple/_layouts</pre>
                </div>
                
                <div class="warning-box">
                    <strong>⚠️ Common Issue:</strong> Users often forget to create the nested <code>_layouts</code> directories, causing copy operations to fail later.
                </div>
            </div>

<!-- Step 2 -->
<div class="step">
<span class="step-number">2</span>
<strong>Set Up Theme Configurations</strong>
<div class="code-block">
<pre># _themes/minima/_config.yml
theme: minima
title: "Your Site Title"
description: "Site description"

# Theme-specific settings
minima:
  skin: dark
  social_links:
    - { platform: github, user_url: "https://github.com/yourusername" }

# Custom settings for your override system
use_opencs_layout: true
theme_name: "minima"</pre>
                </div>
                
                <div class="code-block">
                    <pre># _themes/minima/Gemfile
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem "minima", "~> 2.5"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end</pre>
                </div>
            </div>

<!-- Step 3 -->
<div class="step">
<span class="step-number">3</span>
<strong>Create the Makefile</strong>
<div class="code-block">
<pre># Makefile
use-minima:
	@echo "🎨 Switching to Minima theme..."
	@cp _themes/minima/_config.yml _config.yml
	@cp _themes/minima/Gemfile Gemfile
	@cp _themes/minima/opencs.html _layouts/opencs.html
	@cp _themes/minima/_layouts/*.html _layouts/
	@echo "✅ Minima theme activated!"
	@echo "📝 Run 'bundle install' to update dependencies"

use-text:
	@echo "🎨 Switching to TeXt theme..."
	@cp _themes/text/_config.yml _config.yml
	@cp _themes/text/Gemfile Gemfile
	@cp _themes/text/_layouts/*.html _layouts/
	@echo "✅ TeXt theme activated!"
	@echo "📝 Run 'bundle install' to update dependencies"

# Add error handling
clean-theme:
	@echo "🧹 Cleaning current theme files..."
	@rm -f _config.yml Gemfile
	@rm -f _layouts/*.html
	@echo "✅ Theme files cleaned!"

# Check if theme directory exists before switching
check-theme-exists:
	@test -d _themes/$(THEME) || (echo "❌ Theme '$(THEME)' not found in _themes/" && exit 1)</pre>
                </div>
            </div>
        </div>

<!-- Interactive Theme Switcher -->
<div class="interactive-demo">
<h3>🎮 Try Theme Switch</h3>
<div class="theme-buttons">
<div class="theme-btn active" onclick="switchTheme('minima', this)">🎨 Minima</div>
<div class="theme-btn" onclick="switchTheme('text', this)">📝 TeXt</div>
</div>
<div id="themePreview"><p>Click a theme above to simulate the switch!</p></div>
</div>

<!-- Mini-Game -->
<div class="interactive-demo">
<h3>🎯 Layout Override Game</h3>
<canvas id="gameCanvas" width="500" height="400"></canvas>
<p>Move the paddle with your mouse to catch falling layouts.</p>
</div>

</div>
</div>

<script>
// Theme Switcher
function switchTheme(theme, el){
    document.querySelectorAll('.theme-btn').forEach(btn=>btn.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('themePreview').innerHTML = `<p><strong>${theme}</strong> theme applied! (simulated)</p>`;
}

// Mini-Game
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let x = canvas.width/2, y=30, dy=2, caught=0;
let paddleX = (canvas.width-100)/2;

canvas.addEventListener("mousemove", e=>{
    const rect = canvas.getBoundingClientRect();
    paddleX = e.clientX - rect.left -50;
});

function drawPaddle(){ ctx.fillStyle="#4f46e5"; ctx.fillRect(paddleX,canvas.height-20,100,10); }
function drawLayout(){ ctx.beginPath(); ctx.arc(x,y,15,0,Math.PI*2); ctx.fillStyle="#f59e0b"; ctx.fill(); ctx.closePath();}
function drawScore(){ ctx.font="16px Arial"; ctx.fillStyle="#e2e8f0"; ctx.fillText("Layouts Caught: "+caught,8,20);}
function draw(){ ctx.clearRect(0,0,canvas.width,canvas.height); drawLayout(); drawPaddle(); drawScore();
y+=dy;
if(y>canvas.height-20 && x>paddleX && x<paddleX+100){ caught++; y=30; x=Math.random()*(canvas.width-30)+15; }
else if(y>canvas.height){ y=30; x=Math.random()*(canvas.width-30)+15; }
requestAnimationFrame(draw);}
draw();
</script>
</body>
</html>
