---
layout: base
title: Tic-Tac-Toe
permalink: /tictactoe
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: black;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            font-family: Arial, sans-serif;
        }

        h1 {
            color: white;
            margin-bottom: 20px;
            font-size: 2.5rem;
        }

        .game-info {
            color: white;
            font-size: 1.5rem;
            margin-bottom: 30px;
            text-align: center;
        }

        .game-board {
            display: grid;
            grid-template-columns: repeat(3, 120px);
            grid-template-rows: repeat(3, 120px);
            gap: 10px;
            margin-bottom: 30px;
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
            transition: background-color 0.2s ease;
        }

        .square:hover {
            background-color: #f0f0f0;
        }

        .square:disabled {
            cursor: not-allowed;
            background-color: #e0e0e0;
        }

        .reset-button {
            background-color: white;
            color: black;
            border: none;
            padding: 15px 30px;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.2s ease;
        }

        .reset-button:hover {
            background-color: #f0f0f0;
        }

        .winner-message {
            color: #00ff00;
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 20px;
            text-align: center;
        }

        .tie-message {
            color: #ffff00;
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Tic Tac Toe</h1>
    
    <div class="game-info" id="gameInfo">
        Player X's Turn
    </div>
    
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
    
    <button class="reset-button" onclick="resetGame()">New Game</button>

    <script>
        let currentPlayer = 'X';
        let gameBoard = ['', '', '', '', '', '', '', '', ''];
        let gameActive = true;

        const winningConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        function makeMove(index) {
            if (gameBoard[index] !== '' || !gameActive) {
                return;
            }

            // Make the move
            gameBoard[index] = currentPlayer;
            document.querySelector(`[data-index="${index}"]`).textContent = currentPlayer;
            document.querySelector(`[data-index="${index}"]`).disabled = true;

            // Check for win
            if (checkWinner()) {
                document.getElementById('gameInfo').innerHTML = `<div class="winner-message">Player ${currentPlayer} Wins! 🎉</div>`;
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
            document.getElementById('gameInfo').textContent = `Player ${currentPlayer}'s Turn`;
        }

        function checkWinner() {
            return winningConditions.some(condition => {
                return condition.every(index => {
                    return gameBoard[index] === currentPlayer;
                });
            });
        }

        function disableAllSquares() {
            document.querySelectorAll('.square').forEach(square => {
                square.disabled = true;
            });
        }

        function resetGame() {
            currentPlayer = 'X';
            gameBoard = ['', '', '', '', '', '', '', '', ''];
            gameActive = true;
            
            document.getElementById('gameInfo').textContent = "Player X's Turn";
            
            document.querySelectorAll('.square').forEach(square => {
                square.textContent = '';
                square.disabled = false;
            });
        }
    </script>
</body>
</html>