---
layout: base
title: Tic-Tac-Toe
permalink: /tictactoe
---


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe - Enhanced</title>
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            padding: 20px;
            background-color: black;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            font-family: Arial, sans-serif;
            overflow-x: hidden;
        }

        h1 {
            color: white;
            margin-bottom: 20px;
            font-size: 2.5rem;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        .setup-screen {
            color: white;
            text-align: center;
            margin-bottom: 30px;
        }

        .setup-screen input {
            margin: 10px;
            padding: 10px;
            font-size: 1rem;
            border: 2px solid white;
            border-radius: 5px;
            background: black;
            color: white;
        }

        .setup-screen input::placeholder {
            color: #ccc;
        }

        .mode-selector {
            margin: 20px 0;
        }

        .mode-selector button {
            margin: 0 10px;
            padding: 10px 20px;
            font-size: 1rem;
            border: 2px solid white;
            background: black;
            color: white;
            cursor: pointer;
            border-radius: 5px;
            transition: all 0.3s ease;
        }

        .mode-selector button:hover, .mode-selector button.selected {
            background: white;
            color: black;
        }

        .game-area {
            display: none;
        }

        .game-info {
            color: white;
            font-size: 1.5rem;
            margin-bottom: 20px;
            text-align: center;
            min-height: 40px;
        }

        .score-board {
            color: white;
            display: flex;
            justify-content: center;
            gap: 40px;
            margin-bottom: 20px;
            font-size: 1.2rem;
        }

        .score-item {
            text-align: center;
        }

        .game-container {
            position: relative;
        }

        .game-board {
            display: grid;
            grid-template-columns: repeat(3, 120px);
            grid-template-rows: repeat(3, 120px);
            gap: 10px;
            margin-bottom: 30px;
            position: relative;
        }

        .square {
            background-color: white;
            border: none;
            cursor: pointer;
            font-size: 3rem;
            font-weight: bold;
            color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .square:hover:not(:disabled) {
            background-color: #f0f0f0;
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        }

        .square:disabled {
            cursor: not-allowed;
        }

        .square .symbol {
            animation: symbolAppear 0.5s ease-out;
            transform-origin: center;
        }

        @keyframes symbolAppear {
            0% {
                opacity: 0;
                transform: scale(0) rotate(180deg);
            }
            50% {
                transform: scale(1.2) rotate(90deg);
            }
            100% {
                opacity: 1;
                transform: scale(1) rotate(0deg);
            }
        }



        .controls {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .btn {
            background-color: white;
            color: black;
            border: none;
            padding: 15px 30px;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            border-radius: 5px;
            transition: all 0.3s ease;
        }

        .btn:hover {
            background-color: #f0f0f0;
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(255, 255, 255, 0.3);
        }

        .winner-message {
            color: #00ff00;
            font-size: 2rem;
            font-weight: bold;
            text-shadow: 0 0 10px #00ff00;
            animation: pulse 2s infinite;
        }

        .tie-message {
            color: #ffff00;
            font-size: 2rem;
            font-weight: bold;
            text-shadow: 0 0 10px #ffff00;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        /* Particle effects */
        .particle {
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
        }

        .particle-gold {
            background: gold;
            box-shadow: 0 0 6px gold;
        }

        .particle-silver {
            background: silver;
            box-shadow: 0 0 6px silver;
        }

        @keyframes particleFall {
            0% {
                transform: translateY(-100vh) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }

        .difficulty-selector {
            margin: 15px 0;
            color: white;
        }

        .difficulty-selector select {
            margin-left: 10px;
            padding: 5px;
            font-size: 1rem;
            background: black;
            color: white;
            border: 2px solid white;
            border-radius: 3px;
        }

        @media (max-width: 600px) {
            .game-board {
                grid-template-columns: repeat(3, 100px);
                grid-template-rows: repeat(3, 100px);
            }
            
            .square {
                font-size: 2.5rem;
            }
            
            h1 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <h1>Tic Tac Toe Enhanced</h1>
    
    <div class="setup-screen" id="setupScreen">
        <h2>Setup Game</h2>
        
        <div class="mode-selector">
            <button onclick="selectMode('human')" class="selected" id="humanMode">vs Human</button>
            <button onclick="selectMode('ai')" id="aiMode">vs AI</button>
        </div>
        
        <div id="humanInputs">
            <div>
                <input type="text" id="player1Name" placeholder="Player 1 Name (X)" maxlength="15">
                <input type="text" id="player2Name" placeholder="Player 2 Name (O)" maxlength="15">
            </div>
        </div>
        
        <div id="aiInputs" style="display: none;">
            <div>
                <input type="text" id="humanPlayerName" placeholder="Your Name" maxlength="15">
                <div class="difficulty-selector">
                    <label>AI Difficulty:</label>
                    <select id="aiDifficulty">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
            </div>
        </div>
        
        <div style="margin-top: 20px;">
            <button class="btn" onclick="startGame()">Start Game</button>
        </div>
    </div>
    
    <div class="game-area" id="gameArea">
        <div class="score-board">
            <div class="score-item">
                <div id="player1Score">Player 1: 0</div>
            </div>
            <div class="score-item">
                <div id="player2Score">Player 2: 0</div>
            </div>
        </div>
        
        <div class="game-info" id="gameInfo">
            Player X's Turn
        </div>
        
        <div class="game-container">
            <div class="game-board" id="gameBoard">
                <button class="square" data-index="0" onclick="makeMove(0)"></button>
                <button class="square" data-index="1" onclick="makeMove(1)"></button>
                <button class="square" data-index="2" onclick="makeMove(2)"></button>
                <button class="square" data-index="3" onclick="makeMove(3)"></button>
                <button class="square" data-index="4" onclick="makeMove(4)"></button>
                <button class="square" data-index="5" onclick="makeMove(5)"></button>
                <button class="square" data-index="6" onclick="makeMove(6)"></button>
                <button class="square" data-index="7" onclick="makeMove(7)"></button>
                <button class="square" data-index="8" onclick="makeMove(8)"></button>
            </div>
        </div>
        
        <div class="controls">
            <button class="btn" onclick="resetGame()">New Game</button>
            <button class="btn" onclick="backToSetup()">Change Settings</button>
        </div>
    </div>

    <script>
        let currentPlayer = 'X';
        let gameBoard = ['', '', '', '', '', '', '', '', ''];
        let gameActive = true;
        let gameMode = 'human';
        let player1Name = 'Player 1';
        let player2Name = 'Player 2';
        let isAIGame = false;
        let aiDifficulty = 'medium';
        
        // Score tracking
        let scores = {
            player1: 0,
            player2: 0
        };

        const winningConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];



        function selectMode(mode) {
            gameMode = mode;
            document.querySelectorAll('.mode-selector button').forEach(btn => btn.classList.remove('selected'));
            
            if (mode === 'human') {
                document.getElementById('humanMode').classList.add('selected');
                document.getElementById('humanInputs').style.display = 'block';
                document.getElementById('aiInputs').style.display = 'none';
            } else {
                document.getElementById('aiMode').classList.add('selected');
                document.getElementById('humanInputs').style.display = 'none';
                document.getElementById('aiInputs').style.display = 'block';
            }
        }

        function startGame() {
            if (gameMode === 'human') {
                player1Name = document.getElementById('player1Name').value || 'Player 1';
                player2Name = document.getElementById('player2Name').value || 'Player 2';
                isAIGame = false;
            } else {
                player1Name = document.getElementById('humanPlayerName').value || 'You';
                player2Name = 'AI';
                aiDifficulty = document.getElementById('aiDifficulty').value;
                isAIGame = true;
            }
            
            document.getElementById('setupScreen').style.display = 'none';
            document.getElementById('gameArea').style.display = 'block';
            
            updateScoreDisplay();
            resetGameBoard();
        }

        function backToSetup() {
            document.getElementById('setupScreen').style.display = 'block';
            document.getElementById('gameArea').style.display = 'none';
            scores = { player1: 0, player2: 0 };
        }

        function updateScoreDisplay() {
            document.getElementById('player1Score').textContent = `${player1Name}: ${scores.player1}`;
            document.getElementById('player2Score').textContent = `${player2Name}: ${scores.player2}`;
        }

        function makeMove(index) {
            if (gameBoard[index] !== '' || !gameActive) {
                return;
            }

            // Make the move with animation
            gameBoard[index] = currentPlayer;
            const square = document.querySelector(`[data-index="${index}"]`);
            const symbol = document.createElement('span');
            symbol.className = 'symbol';
            symbol.textContent = currentPlayer;
            square.appendChild(symbol);
            square.disabled = true;

            // Check for win
            const winCondition = checkWinner();
            if (winCondition) {
                const winner = currentPlayer === 'X' ? player1Name : player2Name;
                document.getElementById('gameInfo').innerHTML = `<div class="winner-message">${winner} Wins! 🎉</div>`;
                
                // Update scores
                if (currentPlayer === 'X') {
                    scores.player1++;
                } else {
                    scores.player2++;
                }
                updateScoreDisplay();
                
            
                createParticleEffect();
                disableAllSquares();
                gameActive = false;
                return;
            }

            // Check for tie
            if (gameBoard.every(square => square !== '')) {
                document.getElementById('gameInfo').innerHTML = `<div class="tie-message">It's a Tie! 🤝</div>`;
                gameActive = false;
                return;
            }

            // Switch player
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            const nextPlayerName = currentPlayer === 'X' ? player1Name : player2Name;
            document.getElementById('gameInfo').textContent = `${nextPlayerName}'s Turn`;

            // AI move if it's AI's turn
            if (isAIGame && currentPlayer === 'O' && gameActive) {
                setTimeout(() => makeAIMove(), 500);
            }
        }

        function checkWinner() {
            for (let condition of winningConditions) {
                if (condition.every(index => gameBoard[index] === currentPlayer)) {
                    return condition;
                }
            }
            return null;
        }



        function createParticleEffect() {
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.className = `particle ${Math.random() > 0.5 ? 'particle-gold' : 'particle-silver'}`;
                    
                    particle.style.left = Math.random() * window.innerWidth + 'px';
                    particle.style.animation = `particleFall ${2 + Math.random() * 2}s linear forwards`;
                    
                    document.body.appendChild(particle);
                    
                    setTimeout(() => particle.remove(), 4000);
                }, i * 50);
            }
        }

        function makeAIMove() {
            if (!gameActive) return;
            
            let move;
            switch(aiDifficulty) {
                case 'easy':
                    move = getRandomMove();
                    break;
                case 'medium':
                    move = Math.random() > 0.3 ? getBestMove() : getRandomMove();
                    break;
                case 'hard':
                    move = getBestMove();
                    break;
            }
            
            if (move !== -1) {
                makeMove(move);
            }
        }

        function getRandomMove() {
            const availableMoves = gameBoard.map((cell, index) => cell === '' ? index : null).filter(val => val !== null);
            return availableMoves.length > 0 ? availableMoves[Math.floor(Math.random() * availableMoves.length)] : -1;
        }

        function getBestMove() {
            // Try to win
            for (let i = 0; i < 9; i++) {
                if (gameBoard[i] === '') {
                    gameBoard[i] = 'O';
                    if (checkWinner()) {
                        gameBoard[i] = '';
                        return i;
                    }
                    gameBoard[i] = '';
                }
            }
            
            // Block player from winning
            for (let i = 0; i < 9; i++) {
                if (gameBoard[i] === '') {
                    gameBoard[i] = 'X';
                    if (checkWinner()) {
                        gameBoard[i] = '';
                        return i;
                    }
                    gameBoard[i] = '';
                }
            }
            
            // Take center if available
            if (gameBoard[4] === '') return 4;
            
            // Take corners
            const corners = [0, 2, 6, 8];
            const availableCorners = corners.filter(i => gameBoard[i] === '');
            if (availableCorners.length > 0) {
                return availableCorners[Math.floor(Math.random() * availableCorners.length)];
            }
            
            // Take any available space
            return getRandomMove();
        }

        function disableAllSquares() {
            document.querySelectorAll('.square').forEach(square => {
                square.disabled = true;
            });
        }

        function resetGame() {
            resetGameBoard();
        }

        function resetGameBoard() {
            currentPlayer = 'X';
            gameBoard = ['', '', '', '', '', '', '', '', ''];
            gameActive = true;
            
            // Remove any leftover elements
            
            
            const nextPlayerName = player1Name;
            document.getElementById('gameInfo').textContent = `${nextPlayerName}'s Turn`;
            
            document.querySelectorAll('.square').forEach(square => {
                square.innerHTML = '';
                square.disabled = false;
            });
        }
    </script>
</body>
</html>