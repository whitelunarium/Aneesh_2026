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
    <title>Jekyll Theme Switching Made Simple</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: #2c3e50;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .hero {
            text-align: center;
            padding: 40px 0;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            margin-bottom: 30px;
            color: white;
        }
        
        .hero h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 15px;
        }
        
        .hero p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        .card {
            background: white;
            border-radius: 12px;
            padding: 30px;
            margin-bottom: 25px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .section-title {
            font-size: 1.8rem;
            color: #2c3e50;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
            border-bottom: 2px solid #667eea;
            padding-bottom: 10px;
        }
        
        .code-block {
            background: #1a1a1a;
            color: #e6e6e6;
            padding: 20px;
            border-radius: 8px;
            margin: 15px 0;
            font-family: 'Monaco', monospace;
            font-size: 0.9rem;
            position: relative;
            border-left: 4px solid #667eea;
        }
        
        .copy-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: #667eea;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.8rem;
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        .code-block:hover .copy-btn {
            opacity: 1;
        }
        
        .interactive-demo {
            background: #f8f9fa;
            border: 2px dashed #667eea;
            border-radius: 10px;
            padding: 25px;
            margin: 20px 0;
            text-align: center;
        }
        
        .file-tree {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            font-family: 'Monaco', monospace;
            font-size: 0.9rem;
            text-align: left;
            margin: 15px 0;
        }
        
        .theme-buttons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin: 20px 0;
        }
        
        .theme-btn {
            padding: 15px;
            border: 2px solid #e9ecef;
            border-radius: 8px;
            background: white;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: center;
        }
        
        .theme-btn:hover {
            border-color: #667eea;
            transform: translateY(-2px);
        }
        
        .theme-btn.active {
            background: #667eea;
            color: white;
            border-color: #667eea;
        }
        
        .terminal {
            background: #1a1a1a;
            color: #00ff00;
            padding: 15px;
            border-radius: 8px;
            font-family: 'Monaco', monospace;
            margin: 15px 0;
            min-height: 60px;
        }
        
        .warning {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 8px;
            padding: 15px;
            margin: 15px 0;
            border-left: 4px solid #fdcb6e;
        }
        
        .success {
            background: #d4edda;
            border: 1px solid #c3e6cb;
            border-radius: 8px;
            padding: 15px;
            margin: 15px 0;
            border-left: 4px solid #00b894;
        }
        
        .quiz-container {
            background: #667eea;
            color: white;
            border-radius: 10px;
            padding: 25px;
            margin: 25px 0;
        }
        
        .quiz-option {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: white;
            padding: 12px;
            border-radius: 6px;
            cursor: pointer;
            margin: 8px 0;
            transition: all 0.3s;
        }
        
        .quiz-option:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .quiz-option.correct {
            background: #00b894;
        }
        
        .quiz-option.incorrect {
            background: #e74c3c;
        }
        
        .step {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 15px 0;
            border-left: 4px solid #667eea;
        }
        
        .step-number {
            background: #667eea;
            color: white;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-right: 10px;
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }
            .theme-buttons {
                grid-template-columns: 1fr;
            }
            .card {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="hero">
            <h1>🎨 Jekyll Theme Switching</h1>
            <p>Learn to switch themes with one command in 15 minutes</p>
        </div>

        <div class="card">
            <h2 class="section-title">
                <span>🧠</span>
                1. How It Works (3 min)
            </h2>
            
            <p>Jekyll looks for layouts in this order: <strong>Local → Gem → Remote</strong></p>
            
            <div class="interactive-demo">
                <h3>📁 Directory Structure</h3>
                <div class="file-tree" id="file-tree">
                    <div>📂 your-project/</div>
                    <div style="margin-left: 20px;">📂 _themes/</div>
                    <div style="margin-left: 40px;">📂 minima/ (stored configs)</div>
                    <div style="margin-left: 40px;">📂 text/ (stored configs)</div>
                    <div style="margin-left: 20px;">📂 _layouts/ (active theme)</div>
                    <div style="margin-left: 20px;">📄 _config.yml (active)</div>
                    <div style="margin-left: 20px;">📄 Gemfile (active)</div>
                    <div style="margin-left: 20px;">📄 Makefile (magic happens here)</div>
                </div>
                <p><strong>The trick:</strong> Makefile copies stored configs to active location</p>
            </div>
        </div>

        <div class="card">
            <h2 class="section-title">
                <span>🔧</span>
                2. Set It Up (8 min)
            </h2>

            <div class="step">
                <span class="step-number">1</span>
                <strong>Create the structure</strong>
                
                <div class="code-block">
                    <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    <pre># Create theme directories
mkdir -p _themes/{minima,text}/_layouts</pre>
                </div>
            </div>

            <div class="step">
                <span class="step-number">2</span>
                <strong>Add theme configs</strong>
                
                <div class="code-block">
                    <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    <pre># _themes/minima/_config.yml
theme: minima
title: "My Site"
minima:
  skin: dark

# _themes/text/_config.yml  
remote_theme: kitian616/jekyll-TeXt-theme
title: "My Site"
text_theme:
  variant: ocean</pre>
                </div>
            </div>

            <div class="step">
                <span class="step-number">3</span>
                <strong>Create the magic Makefile</strong>
                
                <div class="code-block">
                    <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    <pre># Makefile
use-minima:
	@echo "🎨 Switching to Minima..."
	@cp _themes/minima/_config.yml _config.yml
	@cp _themes/minima/Gemfile Gemfile
	@echo "✅ Done! Run: bundle install"

use-text:
	@echo "🎨 Switching to TeXt..."
	@cp _themes/text/_config.yml _config.yml  
	@cp _themes/text/Gemfile Gemfile
	@echo "✅ Done! Run: bundle install"</pre>
                </div>
            </div>

            <div class="interactive-demo">
                <h3>🎮 Try It Out</h3>
                <p>Click to see the terminal output:</p>
                <div class="theme-buttons">
                    <div class="theme-btn active" onclick="switchTheme('minima', this)">
                        🎨 Minima<br><small>Clean & Simple</small>
                    </div>
                    <div class="theme-btn" onclick="switchTheme('text', this)">
                        📝 TeXt<br><small>Feature Rich</small>
                    </div>
                </div>
                <div class="terminal" id="terminal">$ make use-minima<br>🎨 Switching to Minima...<br>✅ Done! Run: bundle install</div>
            </div>
        </div>

        <div class="card">
            <h2 class="section-title">
                <span>🚨</span>
                3. Fix Common Issues (4 min)
            </h2>

            <div class="warning">
                <strong>Problem #1:</strong> Bundle install fails after switching
                <div class="code-block">
                    <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    <pre># Fix dependency conflicts
rm Gemfile.lock
bundle install</pre>
                </div>
            </div>

            <div class="warning">
                <strong>Problem #2:</strong> Custom CSS disappears
                <div class="code-block">
                    <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    <pre># Add to your _layouts/default.html
&lt;link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}"&gt;</pre>
                </div>
            </div>

            <div class="warning">
                <strong>Problem #3:</strong> Layouts not found
                <div class="code-block">
                    <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    <pre># Debug what Jekyll sees
bundle exec jekyll build --verbose</pre>
                </div>
            </div>

            <div class="quiz-container">
                <h3>🧠 Quick Check</h3>
                <p>What's the first place Jekyll looks for layouts?</p>
                <div class="quiz-option" onclick="checkAnswer(this, false)">Remote theme files</div>
                <div class="quiz-option" onclick="checkAnswer(this, true)">Local _layouts/ directory</div>
                <div class="quiz-option" onclick="checkAnswer(this, false)">Gem theme files</div>
                <div id="quiz-feedback" style="margin-top: 15px; display: none;"></div>
            </div>
        </div>

        <div class="card">
            <div class="success">
                <h3>🎉 You're Done!</h3>
                <p><strong>What you learned:</strong></p>
                <ul>
                    <li>Jekyll's layout resolution order</li>
                    <li>How to set up theme switching with Makefile</li>
                    <li>Top 3 troubleshooting fixes</li>
                </ul>
                <p><strong>Next steps:</strong> Try switching between themes and customizing layouts in your <code>_layouts/</code> directory!</p>
            </div>
        </div>
    </div>

    <script>
        // Theme switching demo
        function switchTheme(themeName, element) {
            document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
            element.classList.add('active');
            
            const commands = {
                'minima': '$ make use-minima<br>🎨 Switching to Minima...<br>✅ Done! Run: bundle install',
                'text': '$ make use-text<br>🎨 Switching to TeXt...<br>✅ Done! Run: bundle install'
            };
            
            const terminal = document.getElementById('terminal');
            terminal.innerHTML = '';
            
            // Typing effect
            let i = 0;
            const text = commands[themeName];
            const timer = setInterval(() => {
                if (i < text.length) {
                    terminal.innerHTML = text.substring(0, i + 1);
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, 20);
        }

        // Copy code functionality
        function copyCode(button) {
            const codeBlock = button.parentElement;
            const code = codeBlock.querySelector('pre').textContent;
            navigator.clipboard.writeText(code).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => button.textContent = 'Copy', 2000);
            });
        }

        // Quiz functionality
        function checkAnswer(element, isCorrect) {
            const options = document.querySelectorAll('.quiz-option');
            options.forEach(opt => {
                opt.classList.remove('correct', 'incorrect');
                opt.onclick = null;
            });
            
            if (isCorrect) {
                element.classList.add('correct');
                document.getElementById('quiz-feedback').innerHTML = '<div style="color: #00b894;">✅ Correct! Local files always take priority.</div>';
            } else {
                element.classList.add('incorrect');
                options[1].classList.add('correct'); // Show correct answer
                document.getElementById('quiz-feedback').innerHTML = '<div style="color: #e74c3c;">❌ Not quite. Jekyll checks local _layouts/ first for security and customization.</div>';
            }
            
            document.getElementById('quiz-feedback').style.display = 'block';
        }

        // File tree animation
        document.addEventListener('DOMContentLoaded', function() {
            const treeItems = document.querySelectorAll('#file-tree div');
            treeItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-10px)';
                
                setTimeout(() => {
                    item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 150);
            });
        });
    </script>
</body>
</html>