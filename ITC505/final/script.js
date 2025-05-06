let boardSize = 3;
let board = [];

function getBoardSizeByDifficulty() {
  const difficulty = document.getElementById("difficulty").value;
  if (difficulty === "easy") return 3;
  if (difficulty === "medium") return 5;
  if (difficulty === "hard") return 7;
}

function createBoard() {
  const gameBoard = document.getElementById('game-board');
  gameBoard.innerHTML = "";
  boardSize = getBoardSizeByDifficulty();
  board = [];

  // Update CSS grid template based on board size
  gameBoard.style.gridTemplateColumns = `repeat(${boardSize}, 60px)`;

  for (let row = 0; row < boardSize; row++) {
    board[row] = [];
    for (let col = 0; col < boardSize; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.addEventListener('click', () => handleClick(row, col));
      board[row][col] = cell;
      gameBoard.appendChild(cell);
    }
  }
}

function toggleCell(row, col) {
  if (row < 0 || col < 0 || row >= boardSize || col >= boardSize) return;
  board[row][col].classList.toggle('is-off');
}

function handleClick(row, col) {
  toggleCell(row, col);         // center
  toggleCell(row - 1, col);     // up
  toggleCell(row + 1, col);     // down
  toggleCell(row, col - 1);     // left
  toggleCell(row, col + 1);     // right
  checkWin();
}

function randomizeBoard() {
  const difficulty = document.getElementById("difficulty").value;
  let clicks;

  switch (difficulty) {
    case "easy":
      clicks = Math.floor(Math.random() * 3) + 3;  // 3–5
      break;
    case "medium":
      clicks = Math.floor(Math.random() * 5) + 6;  // 6–10
      break;
    case "hard":
      clicks = Math.floor(Math.random() * 5) + 11; // 11–15
      break;
  }

  for (let i = 0; i < clicks; i++) {
    const r = Math.floor(Math.random() * boardSize);
    const c = Math.floor(Math.random() * boardSize);
    handleClick(r, c);
  }
}

function checkWin() {
  const allOff = board.flat().every(cell => !cell.classList.contains('is-off'));
  if (allOff) {
    setTimeout(() => alert("You win!"), 100);
  }
}

function startNewGame() {
  createBoard();
  randomizeBoard();
}

document.getElementById('new-game').addEventListener('click', startNewGame);
document.getElementById('difficulty').addEventListener('change', startNewGame);
window.onload = startNewGame;
