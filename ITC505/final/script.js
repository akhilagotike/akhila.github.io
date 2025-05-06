let size = 3;
let grid = [];

function buildGrid() {
  const container = document.getElementById("puzzle-grid");
  container.innerHTML = "";
  size = parseInt(document.getElementById("level").value);
  grid = [];

  container.style.gridTemplateColumns = `repeat(${size}, 60px)`;

  for (let r = 0; r < size; r++) {
    const row = [];
    for (let c = 0; c < size; c++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.dataset.row = r;
      tile.dataset.col = c;
      tile.addEventListener("click", () => flipTile(r, c));
      row.push(tile);
      container.appendChild(tile);
    }
    grid.push(row);
  }
}

function flipTile(row, col) {
  const directions = [
    [0, 0],
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (const [dx, dy] of directions) {
    const x = row + dx;
    const y = col + dy;
    if (x >= 0 && y >= 0 && x < size && y < size) {
      grid[x][y].classList.toggle("off");
    }
  }

  checkClear();
}

function shuffleGrid() {
  const totalFlips = size * 2 + Math.floor(Math.random() * size);
  for (let i = 0; i < totalFlips; i++) {
    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size);
    flipTile(x, y);
  }
}

function checkClear() {
  const allOn = grid.flat().every(tile => !tile.classList.contains("off"));
  if (allOn) {
    setTimeout(() => alert("You win!"), 100);
  }
}

function initGame() {
  buildGrid();
  shuffleGrid();
}

document.getElementById("start-btn").addEventListener("click", initGame);
document.getElementById("level").addEventListener("change", initGame);
window.onload = initGame;
