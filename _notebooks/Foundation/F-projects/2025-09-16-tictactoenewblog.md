---
layout: post
toc: True
breadcrumb: True
title: TicTacToe Hack Blog
description: How the TTT hack was made
permalink: /blogs/tictactoe
author: Moiz Lukmani
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Building an Enhanced Tic Tac Toe Game</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: black;
            color: white;
            font-family: 'Courier New', monospace;
            line-height: 1.6;
            overflow-x: hidden;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        /* Animated header */
        .header {
            text-align: center;
            margin-bottom: 60px;
            position: relative;
        }

        .title {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 10px;
            background: linear-gradient(45deg, white, #ccc, white);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 3s ease-in-out infinite;
        }

        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .subtitle {
            font-size: 1.2rem;
            color: #ccc;
            margin-bottom: 20px;
        }

        .author-info {
            font-size: 1rem;
            color: #999;
            border: 1px solid #333;
            padding: 10px;
            border-radius: 5px;
            display: inline-block;
        }

        /* Content sections */
        .section {
            margin-bottom: 50px;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.8s ease forwards;
        }

        .section:nth-child(2) { animation-delay: 0.2s; }
        .section:nth-child(3) { animation-delay: 0.4s; }
        .section:nth-child(4) { animation-delay: 0.6s; }
        .section:nth-child(5) { animation-delay: 0.8s; }
        .section:nth-child(6) { animation-delay: 1.0s; }

        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .section h2 {
            font-size: 2rem;
            margin-bottom: 20px;
            position: relative;
            padding-bottom: 10px;
        }

        .section h2::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 2px;
            background: white;
            animation: expandLine 1s ease forwards;
            animation-delay: 1.5s;
        }

        @keyframes expandLine {
            from { width: 0; }
            to { width: 50px; }
        }

        .section h3 {
            font-size: 1.4rem;
            margin: 25px 0 15px 0;
            color: #ddd;
        }

        .section p {
            margin-bottom: 15px;
            font-size: 1.1rem;
        }

        /* Code blocks */
        .code-block {
            background: #111;
            border: 1px solid #333;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            font-family: 'Courier New', monospace;
            overflow-x: auto;
            position: relative;
        }

        .code-block::before {
            content: 'CODE';
            position: absolute;
            top: 5px;
            right: 10px;
            font-size: 0.7rem;
            color: #666;
            background: #222;
            padding: 2px 8px;
            border-radius: 3px;
        }

        .code-block pre {
            color: #0f0;
            font-size: 0.9rem;
            white-space: pre-wrap;
        }

        /* Feature list */
        .feature-list {
            list-style: none;
            padding: 0;
        }

        .feature-list li {
            margin: 15px 0;
            padding: 15px;
            border: 1px solid #333;
            border-radius: 5px;
            position: relative;
            padding-left: 50px;
            transition: all 0.3s ease;
        }

        .feature-list li:hover {
            border-color: #555;
            background: #111;
            transform: translateX(10px);
        }

        .feature-list li::before {
            content: '✓';
            position: absolute;
            left: 15px;
            color: #0f0;
            font-weight: bold;
            font-size: 1.2rem;
        }

        /* Stats boxes */
        .stats-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }

        .stat-box {
            border: 1px solid #333;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
            transition: all 0.3s ease;
        }

        .stat-box:hover {
            border-color: white;
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }

        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            color: #0f0;
            display: block;
        }

        .stat-label {
            font-size: 0.9rem;
            color: #ccc;
            margin-top: 5px;
        }

        /* Timeline */
        .timeline {
            position: relative;
            padding-left: 30px;
        }

        .timeline::before {
            content: '';
            position: absolute;
            left: 15px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: #333;
        }

        .timeline-item {
            position: relative;
            margin-bottom: 30px;
            padding: 20px;
            border: 1px solid #333;
            border-radius: 8px;
            margin-left: 20px;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: -26px;
            top: 25px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: white;
            border: 2px solid black;
        }

        .timeline-item h4 {
            color: #0f0;
            margin-bottom: 10px;
            font-size: 1.2rem;
        }

        /* Interactive demo link */
        .demo-link {
            display: inline-block;
            padding: 15px 30px;
            border: 2px solid white;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px 0;
            transition: all 0.3s ease;
            font-weight: bold;
        }

        .demo-link:hover {
            background: white;
            color: black;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
        }

        /* Responsive design */
        @media (max-width: 768px) {
            .title {
                font-size: 2rem;
            }
            
            .section h2 {
                font-size: 1.5rem;
            }
            
            .container {
                padding: 20px 15px;
            }
        }

        /* Scrolling code effect */
        .terminal {
            background: #000;
            border: 1px solid #333;
            border-radius: 5px;
            padding: 15px;
            margin: 20px 0;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
        }

        .terminal-line {
            display: flex;
            margin: 5px 0;
        }

        .prompt {
            color: #0f0;
            margin-right: 10px;
        }

        .command {
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <h1 class="title">Building an Enhanced Tic Tac Toe Game</h1>
            <p class="subtitle">From Basic Console Game to Interactive Web Experience</p>
            <div class="author-info">
                <strong>Developer:</strong> Moiz Lukmani | <strong>Date:</strong> September 2025 | <strong>Project:</strong> Foundation Hack
            </div>
        </header>

        <section class="section">
            <h2>🚀 Project Overview</h2>
            <p>
                What started as a simple Python console tic-tac-toe game quickly evolved into a fully-featured web application 
                with smooth animations, AI opponents, and celebration effects. This blog post documents my journey from 
                debugging Jupyter notebook issues to creating an engaging interactive experience.
            </p>
            
            <div class="stats-container">
                <div class="stat-box">
                    <span class="stat-number">500+</span>
                    <div class="stat-label">Lines of Code</div>
                </div>
                <div class="stat-box">
                    <span class="stat-number">3</span>
                    <div class="stat-label">AI Difficulty Levels</div>
                </div>
                <div class="stat-box">
                    <span class="stat-number">50</span>
                    <div class="stat-label">Particle Effects</div>
                </div>
            </div>
        </section>

        <section class="section">
            <h2>🐛 The Initial Challenge</h2>
            <p>
                The project began with a frustrating problem: my Python tic-tac-toe game wasn't working properly in Jupyter notebooks. 
                The output was buggy, input prompts weren't appearing correctly, and the user experience was terrible.
            </p>

            <div class="terminal">
                <div class="terminal-line">
                    <span class="prompt">$</span>
                    <span class="command">jupyter notebook tictactoe-game.ipynb</span>
                </div>
                <div class="terminal-line">
                    <span class="prompt">></span>
                    <span class="command" style="color: #f00;">ERROR: Input not displaying correctly</span>
                </div>
                <div class="terminal-line">
                    <span class="prompt">></span>
                    <span class="command" style="color: #f00;">ISSUE: Game state not updating properly</span>
                </div>
                <div class="terminal-line">
                    <span class="prompt">></span>
                    <span class="command" style="color: #f00;">PROBLEM: User experience is broken</span>
                </div>
            </div>

            <p>
                The root cause? Jupyter notebooks don't handle interactive console input loops well, especially with <code>input()</code> 
                functions in while loops. This led me to pivot toward a web-based solution.
            </p>
        </section>

        <section class="section">
            <h2>🔄 The Pivot Decision</h2>
            <p>
                Instead of fighting with Jupyter's limitations, I decided to create a dedicated web page for the game. 
                This opened up possibilities for much richer interactions and visual effects that simply weren't possible 
                in a console environment.
            </p>

            <h3>Why Web Over Console?</h3>
            <ul class="feature-list">
                <li><strong>Better User Experience:</strong> Clickable interface instead of typing numbers</li>
                <li><strong>Visual Feedback:</strong> Animations, hover effects, and visual cues</li>
                <li><strong>Cross-Platform:</strong> Works on any device with a web browser</li>
                <li><strong>Expandability:</strong> Easy to add features like sounds, themes, or multiplayer</li>
            </ul>
        </section>

        <section class="section">
            <h2>⚡ Development Timeline</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <h4>Phase 1: Basic Web Layout</h4>
                    <p>Created a simple black background with 9 white clickable squares. Implemented basic game logic for move validation and win detection.</p>
                    <div class="code-block">
                        <pre>// Basic move function
function makeMove(index) {
    if (gameBoard[index] !== '' || !gameActive) return;
    gameBoard[index] = currentPlayer;
    // Update display and check win conditions
}</pre>
                    </div>
                </div>

                <div class="timeline-item">
                    <h4>Phase 2: Enhanced Features</h4>
                    <p>Added smooth animations, player name input, score tracking, and particle effects for wins. The game started feeling more polished and engaging.</p>
                    <div class="code-block">
                        <pre>// Symbol animation
.square .symbol {
    animation: symbolAppear 0.5s ease-out;
    transform-origin: center;
}</pre>
                    </div>
                </div>

                <div class="timeline-item">
                    <h4>Phase 3: AI Implementation</h4>
                    <p>Built three difficulty levels for AI opponents: Easy (random), Medium (mix of smart/random), and Hard (optimal play with minimax-style logic).</p>
                    <div class="code-block">
                        <pre>// AI difficulty selection
switch(aiDifficulty) {
    case 'hard': move = getBestMove(); break;
    case 'medium': move = Math.random() > 0.3 ? getBestMove() : getRandomMove(); break;
    case 'easy': move = getRandomMove(); break;
}</pre>
                    </div>
                </div>

                <div class="timeline-item">
                    <h4>Phase 4: Polish & Effects</h4>
                    <p>Added celebration particles, improved responsive design, and refined the user interface with better visual hierarchy and feedback.</p>
                </div>
            </div>
        </section>

        <section class="section">
            <h2>🎨 Key Features Implemented</h2>
            <ul class="feature-list">
                <li><strong>Smooth Animations:</strong> X and O symbols appear with rotating scale effects</li>
                <li><strong>Particle Celebrations:</strong> 50 gold and silver particles fall when someone wins</li>
                <li><strong>Player Customization:</strong> Custom names for both human and AI opponents</li>
                <li><strong>Score Persistence:</strong> Track wins across multiple games in a session</li>
                <li><strong>Smart AI Opponent:</strong> Three difficulty levels with strategic gameplay</li>
                <li><strong>Responsive Design:</strong> Works perfectly on desktop, tablet, and mobile</li>
                <li><strong>Game State Management:</strong> Proper turn switching and game flow control</li>
                <li><strong>Visual Feedback:</strong> Hover effects, disabled states, and clear status messages</li>
            </ul>
        </section>

        <section class="section">
            <h2>🧠 Technical Challenges & Solutions</h2>
            
            <h3>Challenge 1: AI Strategy</h3>
            <p>Creating an AI that's challenging but not impossible required implementing a priority system:</p>
            <div class="code-block">
                <pre>function getBestMove() {
    // 1. Try to win immediately
    // 2. Block player from winning
    // 3. Take center if available
    // 4. Take corners
    // 5. Take any remaining space
}</pre>
            </div>

            <h3>Challenge 2: Smooth Animations</h3>
            <p>CSS animations needed to feel natural without being jarring:</p>
            <div class="code-block">
                <pre>@keyframes symbolAppear {
    0% { opacity: 0; transform: scale(0) rotate(180deg); }
    50% { transform: scale(1.2) rotate(90deg); }
    100% { opacity: 1; transform: scale(1) rotate(0deg); }
}</pre>
            </div>

            <h3>Challenge 3: Particle Effects</h3>
            <p>Creating realistic falling particles that don't impact performance:</p>
            <div class="code-block">
                <pre>// Staggered particle creation with cleanup
for (let i = 0; i < 50; i++) {
    setTimeout(() => {
        createParticle();
        setTimeout(() => particle.remove(), 4000);
    }, i * 50);
}</pre>
            </div>
        </section>

        <section class="section">
            <h2>🎯 Lessons Learned</h2>
            <ul class="feature-list">
                <li><strong>Pivot When Necessary:</strong> Don't be afraid to change direction when technology limitations arise</li>
                <li><strong>User Experience First:</strong> Visual feedback and intuitive interfaces matter more than complex code</li>
                <li><strong>Progressive Enhancement:</strong> Start with basic functionality, then add polish and features</li>
                <li><strong>Test Across Devices:</strong> What works on desktop might not work on mobile</li>
                <li><strong>Performance Matters:</strong> Smooth animations are better than flashy but laggy effects</li>
            </ul>
        </section>

        <section class="section">
            <h2>🚀 Try It Yourself</h2>
            <p>
                The complete game is available as a standalone HTML file that you can run in any modern web browser. 
                It includes all the features mentioned above and provides a smooth, engaging tic-tac-toe experience.
            </p>
            
            <a href="https://whitelunarium.github.io/Aneesh_2026/tictactoe" class="demo-link" target="_blank">
                🎮 Play the Enhanced Tic Tac Toe Game
            </a>

            <p style="margin-top: 30px;">
                <strong>Source Code:</strong> Available in the project repository with full documentation and comments 
                explaining each feature and implementation detail.
            </p>
        </section>

        <footer style="text-align: center; margin-top: 60px; padding: 30px; border-top: 1px solid #333;">
            <p style="color: #666;">
                Built with HTML, CSS, and JavaScript | No frameworks required | 
                <span style="color: #0f0;">100% vanilla code</span>
            </p>
        </footer>
    </div>

    <script>
        // Add some interactive effects
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for any internal links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Add typing effect to code blocks on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe all code blocks for entrance animations
            document.querySelectorAll('.code-block').forEach(block => {
                block.style.opacity = '0';
                block.style.transform = 'translateY(20px)';
                block.style.transition = 'all 0.6s ease';
                observer.observe(block);
            });
        });
    </script>
</body>
</html>