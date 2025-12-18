const fs = require("fs");

const input = fs
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n")
  .map((line) => line.split(""));

const character = "@";

const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

function countNeighbors(grid, i, j, character, accessor = (v) => v) {
  let count = 0;

  for (const [di, dj] of directions) {
    const ni = i + di;
    const nj = j + dj;

    if (
      ni >= 0 &&
      ni < grid.length &&
      nj >= 0 &&
      nj < grid[ni].length &&
      accessor(grid[ni][nj]) === character
    ) {
      count++;
    }
  }

  return count;
}

let rollCount = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === character) {
      const neighbors = countNeighbors(input, i, j, character);
      if (neighbors < 4) rollCount++;
    }
  }
}

fs.writeFileSync("./output.txt", `Part 1: ${rollCount}`);

let tempInput = input.map((row) =>
  row.map((ch) => ({ char: ch, move: false }))
);

rollCount = 0;
let trueCount = 1;

while (trueCount > 0) {
  trueCount = 0;

  tempInput = tempInput.map((row) =>
    row.map((cell) => (cell.move ? { char: ".", move: false } : cell))
  );

  for (let i = 0; i < tempInput.length; i++) {
    for (let j = 0; j < tempInput[i].length; j++) {
      if (tempInput[i][j].char === character) {
        const neighbors = countNeighbors(
          tempInput,
          i,
          j,
          character,
          (cell) => cell.char
        );

        if (neighbors < 4) {
          rollCount++;
          tempInput[i][j].move = true;
          trueCount++;
        }
      }
    }
  }
}

fs.appendFileSync("./output.txt", `\nPart 2: ${rollCount}`);
