--- 
layout: post
title: "Board Game Quest Ideation" 
description: "Board Game Quest" 
permalink: /blogs/flask/TM/ 
categories: [CSP, Blogs, Flask] 
tags: [blogs, flask, TM] 
author: "Task Masters" 
date: 2025-11-17 
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Board Game Quest</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Courier New', monospace;
            color: #e0e0e0;
            padding: 40px 20px;
            line-height: 1.7;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        
        .ascii-art {
            color: #00ff88;
            font-size: 0.7em;
            margin: 20px 0;
            white-space: pre;
            text-align: center;
            line-height: 1.2;
        }
        
        h1 {
            color: #ff6b9d;
            font-size: 2.5em;
            margin: 20px 0;
            text-shadow: 0 0 10px rgba(255, 107, 157, 0.5);
        }
        
        .subtitle {
            color: #00ff88;
            font-size: 1em;
            margin-bottom: 30px;
            font-style: italic;
        }
        
        h2 {
            color: #ffaa00;
            font-size: 1.6em;
            margin: 40px 0 15px 0;
            border-left: 4px solid #ffaa00;
            padding-left: 12px;
        }
        
        h3 {
            color: #00d4ff;
            font-size: 1.2em;
            margin: 25px 0 12px 0;
        }
        
        p {
            margin: 12px 0;
        }
        
        .highlight {
            color: #ff6b9d;
            font-weight: bold;
        }
        
        ul {
            list-style: none;
            margin: 12px 0;
        }
        
        ul li {
            margin: 6px 0;
            padding-left: 20px;
            position: relative;
        }
        
        ul li:before {
            content: "→";
            position: absolute;
            left: 0;
            color: #00ff88;
        }
        
        .board-demo {
            margin: 30px 0;
            padding: 25px;
            background: #151933;
            border: 2px solid #00ff88;
            border-radius: 8px;
        }
        
        .board-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 8px;
            margin: 15px 0;
        }
        
        .board-square {
            aspect-ratio: 1;
            border: 2px solid #444;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.75em;
            text-align: center;
            padding: 5px;
            transition: all 0.3s ease;
        }
        
        .chess-grid {
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            gap: 0;
            margin: 15px 0;
            border: 3px solid #00ff88;
        }
        
        .chess-square {
            aspect-ratio: 1;
            border: 1px solid #222;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.6em;
            text-align: center;
            padding: 4px;
        }
        
        .chess-square.dark { background: #1a1a2a; }
        .chess-square.light { background: #0f0f1a; }
        .chess-square.dark.completed { background: #1a3a1a; border-color: #00ff88; color: #00ff88; }
        .chess-square.light.completed { background: #0f2a0f; border-color: #00ff88; color: #00ff88; }
        .chess-square.dark.current { background: #3a1a3a; border-color: #ff6b9d; color: #ff6b9d; }
        .chess-square.light.current { background: #2a0f2a; border-color: #ff6b9d; color: #ff6b9d; }
        .chess-square.dark.start, .chess-square.light.start { background: linear-gradient(135deg, #00ff88, #00aa66); color: #000; font-weight: bold; }
        .chess-square.locked { color: #666; }
        
        .board-square.start { background: linear-gradient(135deg, #00ff88, #00aa66); color: #000; font-weight: bold; border-color: #00ff88; }
        .board-square.completed { background: #1a3a1a; border-color: #00ff88; color: #00ff88; }
        .board-square.current { background: #3a1a3a; border-color: #ff6b9d; color: #ff6b9d; }
        .board-square.locked { background: #1a1a2a; border-color: #333; color: #666; }
        .board-square.ladder { background: #2a2a00; border-color: #ffaa00; color: #ffaa00; }
        .board-square.snake { background: #2a0000; border-color: #ff4444; color: #ff4444; }
        
        .legend {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            margin-top: 15px;
            font-size: 0.85em;
        }
        
        .legend-item {
            display: flex;
            align-items: center;
            gap: 6px;
        }
        
        .legend-box {
            width: 18px;
            height: 18px;
            border: 2px solid;
        }
        
        .tech-item {
            display: inline-block;
            padding: 4px 10px;
            margin: 4px;
            border: 1px solid #00d4ff;
            border-radius: 3px;
            color: #00d4ff;
            font-size: 0.85em;
        }
        
        .divider {
            height: 2px;
            background: linear-gradient(to right, transparent, #ff6b9d, transparent);
            margin: 40px 0;
        }
        
        code {
            color: #00d4ff;
            background: #1a1a2a;
            padding: 2px 6px;
            border-radius: 3px;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin: 15px 0;
        }
        
        .stat-box {
            background: #0f0f1a;
            padding: 12px;
            border-left: 3px solid;
        }
        
        .stat-label {
            font-size: 0.8em;
            margin-bottom: 5px;
        }
        
        .stat-value {
            color: #fff;
            font-size: 1.5em;
        }
        
        .footer-note {
            text-align: center;
            margin-top: 50px;
            color: #00ff88;
            font-style: italic;
            font-size: 1em;
        }
        
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            animation: fadeIn 0.3s;
        }
        
        .modal.active {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .modal-content {
            background: #151933;
            border: 3px solid #ff6b9d;
            border-radius: 10px;
            padding: 30px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
            animation: slideIn 0.3s;
        }
        
        .modal-header {
            color: #ff6b9d;
            font-size: 1.8em;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .modal-body {
            color: #e0e0e0;
            line-height: 1.6;
        }
        
        .modal-body h4 {
            color: #00ff88;
            font-size: 1.2em;
            margin: 20px 0 10px 0;
        }
        
        .modal-body pre {
            background: #0f0f1a;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
            margin: 15px 0;
            border-left: 3px solid #00d4ff;
        }
        
        .modal-body code {
            color: #00d4ff;
        }
        
        .close-btn {
            position: absolute;
            top: 15px;
            right: 20px;
            font-size: 2em;
            color: #ff6b9d;
            cursor: pointer;
            background: none;
            border: none;
            transition: transform 0.2s;
        }
        
        .close-btn:hover {
            transform: scale(1.2);
            color: #ff8bb5;
        }
        
        .board-square:not(.locked):hover,
        .chess-square:not(.locked):hover {
            cursor: pointer;
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(255, 107, 157, 0.5);
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideIn {
            from { 
                transform: translateY(-50px);
                opacity: 0;
            }
            to { 
                transform: translateY(0);
                opacity: 1;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="ascii-art">┌─────────────────────────────────────────┐
│  ████████╗ █████╗ ███████╗██╗  ██╗    │
│  ╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝    │
│     ██║   ███████║███████╗█████╔╝     │
│     ██║   ██╔══██║╚════██║██╔═██╗     │
│     ██║   ██║  ██║███████║██║  ██╗    │
│     ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝    │
└─────────────────────────────────────────┘</div>
        
        
        <h2>Overview</h2>
        <p><span class="highlight">Board Game Quest</span> turns education into a game. Each square on the virtual board represents a learning module. Players start at "Go" and advance by completing challenges and mastering concepts. Flask backend tracks all progress persistently.

        
        </p>
        
        <div class="board-demo">
            <h3>Option 1: Snakes & Ladders</h3>
            <p style="font-size: 0.85em; margin-bottom: 15px;">Classic board where concepts unlock sequentially:</p>
            <div class="board-grid">
                <div class="board-square start">START</div>
                <div class="board-square completed">Variables</div>
                <div class="board-square completed">Types</div>
                <div class="board-square completed">Operators</div>
                <div class="board-square ladder">⬆️ LADDER</div>
                
                <div class="board-square locked">Functions</div>
                <div class="board-square locked">If/Else</div>
                <div class="board-square current" onclick="showModal('loops')">Loops</div>
                <div class="board-square completed">Lists</div>
                <div class="board-square completed">Dicts</div>
                
                <div class="board-square locked">OOP</div>
                <div class="board-square snake">⬇️ SNAKE</div>
                <div class="board-square locked">Classes</div>
                <div class="board-square locked">Methods</div>
                <div class="board-square locked">Inherit</div>
                
                <div class="board-square locked">File I/O</div>
                <div class="board-square locked">APIs</div>
                <div class="board-square locked">Flask</div>
                <div class="board-square ladder">⬆️ LADDER</div>
                <div class="board-square locked">Database</div>
                
                <div class="board-square locked">Auth</div>
                <div class="board-square locked">Deploy</div>
                <div class="board-square locked">Testing</div>
                <div class="board-square locked">Debug</div>
                <div class="board-square locked">🏆 FINISH</div>
            </div>
            <p style="font-size: 0.8em; color: #00ff88;">Ladders skip ahead on excellence | Snakes review fundamentals</p>
        </div>

        <div class="board-demo">
            <h3>Option 2: Chess Board</h3>
            <p style="font-size: 0.85em; margin-bottom: 15px;">8x8 grid with strategic paths through 64 concepts:</p>
            <div class="chess-grid">
                <div class="chess-square dark locked">Deploy</div>
                <div class="chess-square light locked">Testing</div>
                <div class="chess-square dark locked">Security</div>
                <div class="chess-square light locked">Error</div>
                <div class="chess-square dark locked">Logging</div>
                <div class="chess-square light locked">Monitor</div>
                <div class="chess-square dark locked">Scale</div>
                <div class="chess-square light locked">🏆 END</div>
                
                <div class="chess-square light locked">Auth</div>
                <div class="chess-square dark locked">Session</div>
                <div class="chess-square light locked">JWT</div>
                <div class="chess-square dark locked">Hash</div>
                <div class="chess-square light locked">OAuth</div>
                <div class="chess-square dark locked">RBAC</div>
                <div class="chess-square light locked">2FA</div>
                <div class="chess-square dark locked">API Key</div>
                
                <div class="chess-square dark locked">Database</div>
                <div class="chess-square light locked">SQL</div>
                <div class="chess-square dark locked">Models</div>
                <div class="chess-square light locked">Migrate</div>
                <div class="chess-square dark locked">Query</div>
                <div class="chess-square light locked">Join</div>
                <div class="chess-square dark locked">Index</div>
                <div class="chess-square light locked">Backup</div>
                
                <div class="chess-square light locked">Flask</div>
                <div class="chess-square dark locked">Routes</div>
                <div class="chess-square light locked">Views</div>
                <div class="chess-square dark locked">Template</div>
                <div class="chess-square light locked">Jinja</div>
                <div class="chess-square dark locked">Static</div>
                <div class="chess-square light locked">Forms</div>
                <div class="chess-square dark locked">Validate</div>
                
                <div class="chess-square dark locked">APIs</div>
                <div class="chess-square light locked">REST</div>
                <div class="chess-square dark locked">JSON</div>
                <div class="chess-square light locked">Request</div>
                <div class="chess-square dark locked">Response</div>
                <div class="chess-square light locked">Status</div>
                <div class="chess-square dark locked">CORS</div>
                <div class="chess-square light locked">Rate</div>
                
                <div class="chess-square light locked">Classes</div>
                <div class="chess-square dark locked">Objects</div>
                <div class="chess-square light locked">Methods</div>
                <div class="chess-square dark locked">Inherit</div>
                <div class="chess-square light locked">Poly</div>
                <div class="chess-square dark locked">Abstract</div>
                <div class="chess-square light locked">Magic</div>
                <div class="chess-square dark locked">Decor</div>
                
                <div class="chess-square dark current" onclick="showModal('loops')">Loops</div>
                <div class="chess-square light completed">If/Else</div>
                <div class="chess-square dark completed">Function</div>
                <div class="chess-square light completed">Lists</div>
                <div class="chess-square dark completed">Dicts</div>
                <div class="chess-square light completed">Tuples</div>
                <div class="chess-square dark completed">Sets</div>
                <div class="chess-square light completed">String</div>
                
                <div class="chess-square light start">START</div>
                <div class="chess-square dark completed">Variable</div>
                <div class="chess-square light completed">Types</div>
                <div class="chess-square dark completed">Print</div>
                <div class="chess-square light completed">Input</div>
                <div class="chess-square dark completed">Math</div>
                <div class="chess-square light completed">Boolean</div>
                <div class="chess-square dark completed">Compare</div>
            </div>
            <p style="font-size: 0.8em; color: #00ff88;">Navigate 64 concepts | Each row = new skill tier</p>
        </div>
            
        <div class="legend">
            <div class="legend-item">
                <div class="legend-box" style="background: linear-gradient(135deg, #00ff88, #00aa66); border-color: #00ff88;"></div>
                <span>Start</span>
            </div>
            <div class="legend-item">
                <div class="legend-box" style="background: #1a3a1a; border-color: #00ff88;"></div>
                <span>Completed</span>
            </div>
            <div class="legend-item">
                <div class="legend-box" style="background: #3a1a3a; border-color: #ff6b9d;"></div>
                <span>Current</span>
            </div>
            <div class="legend-item">
                <div class="legend-box" style="background: #1a1a2a; border-color: #333;"></div>
                <span>Locked</span>
            </div>
            <div class="legend-item">
                <div class="legend-box" style="background: #2a2a00; border-color: #ffaa00;"></div>
                <span>Ladder</span>
            </div>
            <div class="legend-item">
                <div class="legend-box" style="background: #2a0000; border-color: #ff4444;"></div>
                <span>Snake</span>
            </div>
        </div>
        
        <h2>Core Features</h2>
        
        <h3>Progressive Unlocking</h3>
        <ul>
            <li>Sequential module progression with database-tracked checkpoints</li>
            <li>Resume from last position in any session</li>
            <li>Visual feedback on completed, current, and locked content</li>
        </ul>
        
        <h3>Interactive Modules</h3>
        <ul>
            <li>Bite-sized lessons with quizzes and instant feedback</li>
            <li>Animated board celebrating progress milestones</li>
            <li>Self-contained topics for focused learning sessions</li>
        </ul>
        
        <div class="divider"></div>
        
        <h2>Future Enhancements</h2>
        
        <h3>Multiplayer & Social</h3>
        <p>Compete head-to-head, join guilds (up to 20 players), share progress in real-time, and tackle collaborative guild quests.</p>
        
        <h3>Progression Systems</h3>
        <ul>
            <li><span class="highlight">Achievements:</span> Badges for milestones, speed runs, and perfect scores</li>
            <li><span class="highlight">Power-Ups:</span> Hint tokens, XP boosts, skip cards earned through play</li>
            <li><span class="highlight">Daily Challenges:</span> Bonus puzzles with streak tracking and leaderboards</li>
            <li><span class="highlight">Boss Battles:</span> Multi-part quests every 10 squares testing cumulative knowledge</li>
        </ul>
        
        <h3>Adaptive Difficulty</h3>
        <p>AI adjusts challenge levels based on performance patterns. Ladders skip advanced learners forward; snakes review fundamentals for struggling students.</p>
        
        <div class="divider"></div>
        
        <h2>Student Dashboard</h2>
        
        <div class="board-demo">
            <p style="font-size: 0.9em; color: #00ff88; margin-bottom: 12px;">📍 Current: Square 15 - "Object-Oriented Programming"</p>
            <div class="stats-grid">
                <div class="stat-box" style="border-color: #00ff88;">
                    <div class="stat-label" style="color: #00ff88;">Completed</div>
                    <div class="stat-value">14 / 50</div>
                </div>
                <div class="stat-box" style="border-color: #ffaa00;">
                    <div class="stat-label" style="color: #ffaa00;">Accuracy</div>
                    <div class="stat-value">87%</div>
                </div>
                <div class="stat-box" style="border-color: #ff6b9d;">
                    <div class="stat-label" style="color: #ff6b9d;">Streak</div>
                    <div class="stat-value">7 days 🔥</div>
                </div>
                <div class="stat-box" style="border-color: #00d4ff;">
                    <div class="stat-label" style="color: #00d4ff;">Total XP</div>
                    <div class="stat-value">3,450</div>
                </div>
            </div>
            <p style="font-size: 0.8em; color: #aaa; margin-top: 12px;">🎯 Next: Complete 5 modules to unlock Boss Battle #2</p>
        </div>
        
        <h3>Includes</h3>
        <ul>
            <li>Interactive board map with visual progress indicators</li>
            <li>Performance graphs (Chart.js) showing learning velocity and skill progression</li>
            <li>Achievement gallery with badges and power-up inventory</li>
            <li>AI recommendations based on performance patterns</li>
        </ul>
        
        <h2>Admin Dashboard</h2>
        
        <div class="board-demo">
            <p style="font-size: 1em; color: #ff6b9d; margin-bottom: 15px; font-weight: bold;">📊 Class Overview: CSP Period 3</p>
            <div style="background: #0f0f1a; padding: 12px; border-radius: 5px; margin-bottom: 12px;">
                <div style="color: #00ff88; font-size: 0.85em; margin-bottom: 8px;">Active Students: 23 / 28 (82%)</div>
                <div style="height: 8px; background: #1a1a2a; border-radius: 4px; overflow: hidden;">
                    <div style="width: 82%; height: 100%; background: linear-gradient(90deg, #00ff88, #00aa66);"></div>
                </div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                <div style="background: #0f0f1a; padding: 10px; text-align: center;">
                    <div style="color: #00d4ff; font-size: 0.75em;">Avg Progress</div>
                    <div style="color: #fff; font-size: 1.3em; margin-top: 4px;">34%</div>
                </div>
                <div style="background: #0f0f1a; padding: 10px; text-align: center;">
                    <div style="color: #ffaa00; font-size: 0.75em;">Struggling</div>
                    <div style="color: #fff; font-size: 1.3em; margin-top: 4px;">4</div>
                </div>
                <div style="background: #0f0f1a; padding: 10px; text-align: center;">
                    <div style="color: #00ff88; font-size: 0.75em;">Completed</div>
                    <div style="color: #fff; font-size: 1.3em; margin-top: 4px;">2</div>
                </div>
            </div>
            <p style="font-size: 0.8em; color: #ff6b9d; margin-top: 12px;">⚠️ 4 students inactive 5+ days - send reminder?</p>
        </div>
        
        <h3>Features</h3>
        <ul>
            <li>User management with progress reset and manual unlocks</li>
            <li>Class analytics: completion rates, difficult modules, usage patterns</li>
            <li>Individual drill-down: timestamps, answers, time spent, hints used</li>
            <li>Content management: add/edit modules, adjust difficulty via web forms</li>
            <li>Export to CSV, generate certificates, LMS integration</li>
            <li>Auto-flag struggling students with intervention tools</li>
        </ul>
        
        <div class="divider"></div>
        
        <h2>Technical Stack</h2>
        
        <h3>Backend</h3>
        <div style="margin: 15px 0;">
            <span class="tech-item">Flask-SQLAlchemy</span>
            <span class="tech-item">Flask-Login</span>
            <span class="tech-item">Flask-WTF</span>
            <span class="tech-item">Flask-Session</span>
            <span class="tech-item">SQLite/PostgreSQL</span>
        </div>
        
        <h3>Database Schema</h3>
        <div class="board-demo">
            <pre style="color: #00ff88; font-size: 0.8em; line-height: 1.5;">
<span style="color: #ff6b9d;">Users:</span> user_id, username, email, password_hash, role, timestamps
<span style="color: #ff6b9d;">Progress:</span> progress_id, user_id, current_square, total_xp, accuracy, streak
<span style="color: #ff6b9d;">Completed_Modules:</span> completion_id, user_id, module_id, score, time, hints
<span style="color: #ff6b9d;">Achievements:</span> achievement_id, user_id, badge_type, earned_at
<span style="color: #ff6b9d;">Power_Ups:</span> powerup_id, user_id, item_type, quantity</pre>
        </div>
        
        <h3>Key Routes</h3>
        <ul>
            <li><code>/dashboard</code> - Student progress view</li>
            <li><code>/game-board</code> - Interactive board interface</li>
            <li><code>/module/&lt;id&gt;</code> - Learning module content</li>
            <li><code>/submit-answer</code> - POST: validate and update progress</li>
            <li><code>/admin/analytics</code> - Admin analytics dashboard</li>
            <li><code>/api/progress</code> - JSON for AJAX updates</li>
        </ul>
        
        <h3>Logic</h3>
        <ul>
            <li>Check <code>current_square</code> before granting module access</li>
            <li>Validate submissions, increment position on passing threshold (70%+)</li>
            <li>Snakes/ladders modify position based on performance triggers</li>
            <li>Award XP, badges, power-ups via database insertions</li>
        </ul>
        
        <div class="divider"></div>
        
        <h2>Deployment</h2>
        <ul>
            <li><span class="highlight">Dev:</span> Local Flask + SQLite</li>
            <li><span class="highlight">Prod:</span> Heroku/AWS/DigitalOcean + PostgreSQL + Redis sessions</li>
            <li><span class="highlight">Optimization:</span> DB indexing, SQLAlchemy lazy loading,</li>
            <li><span class="highlight">Mobile:</span> Responsive design, touch controls, swipe navigation, offline caching</li>
        </ul>
    
        
        <div class="ascii-art" style="margin-top: 40px;">┌────────────────────────────────────────────────┐
│  🎮 LEVEL UP YOUR SKILLS  •  QUEST AWAITS 🏆  │
└────────────────────────────────────────────────┘</div>
    </div>
    
    <!-- Modal -->
    <div id="modal" class="modal" onclick="closeModal(event)">
        <div class="modal-content" onclick="event.stopPropagation()">
            <button class="close-btn" onclick="closeModal()">&times;</button>
            <div class="modal-header" id="modal-title"></div>
            <div class="modal-body" id="modal-body"></div>
        </div>
    </div>
    
    <script>
        const moduleContent = {
            'loops': {
                title: '🔄 Loops',
                content: `
                    <p>Loops allow you to execute a block of code multiple times without writing it repeatedly.</p>
                    
                    <h4>For Loop</h4>
                    <p>Iterates over a sequence (list, string, range, etc.):</p>
                    <pre><code>for i in range(5):
    print(i)  # Prints 0, 1, 2, 3, 4

fruits = ['apple', 'banana', 'cherry']
for fruit in fruits:
    print(fruit)</code></pre>
                    
                    <h4>While Loop</h4>
                    <p>Repeats while a condition is true:</p>
                    <pre><code>count = 0
while count < 5:
    print(count)
    count += 1</code></pre>
                    
                    <h4>Loop Control</h4>
                    <ul>
                        <li><span class="highlight">break</span> - Exit the loop completely</li>
                        <li><span class="highlight">continue</span> - Skip to next iteration</li>
                        <li><span class="highlight">else</span> - Executes when loop completes normally</li>
                    </ul>
                    
                    <pre><code>for i in range(10):
    if i == 3:
        continue  # Skip 3
    if i == 7:
        break  # Stop at 7
    print(i)  # Prints: 0, 1, 2, 4, 5, 6</code></pre>
                `
            }
        };
        
        function showModal(module) {
            const modal = document.getElementById('modal');
            const title = document.getElementById('modal-title');
            const body = document.getElementById('modal-body');
            
            if (moduleContent[module]) {
                title.textContent = moduleContent[module].title;
                body.innerHTML = moduleContent[module].content;
                modal.classList.add('active');
            }
        }
        
        function closeModal(event) {
            const modal = document.getElementById('modal');
            if (!event || event.target === modal) {
                modal.classList.remove('active');
            }
        }
        
        // Close on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    </script>
</body>
</html>