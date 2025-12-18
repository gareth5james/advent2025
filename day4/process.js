const fs = require("fs");

const input = fs
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n")
  .map((line) => line.split(""));

let rollCount = 0;
const character = "@";

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    let count = 0;
    if (input[i][j] === character) {
      if (i === 0 && j === 0) {
        if (input[i + 1][j] === character) count++;
        if (input[i][j + 1] === character) count++;
        if (input[i + 1][j + 1] === character) count++;
      } else if (i === 0 && j === input[i].length - 1) {
        if (input[i + 1][j] === character) count++;
        if (input[i][j - 1] === character) count++;
        if (input[i + 1][j - 1] === character) count++;
      } else if (i === input.length - 1 && j === 0) {
        if (input[i - 1][j] === character) count++;
        if (input[i][j + 1] === character) count++;
        if (input[i - 1][j + 1] === character) count++;
      } else if (i === input.length - 1 && j === input[i].length - 1) {
        if (input[i - 1][j] === character) count++;
        if (input[i][j - 1] === character) count++;
        if (input[i - 1][j - 1] === character) count++;
      } else if (i === 0) {
        if (input[i][j - 1] === character) count++;
        if (input[i][j + 1] === character) count++;
        if (input[i + 1][j - 1] === character) count++;
        if (input[i + 1][j] === character) count++;
        if (input[i + 1][j + 1] === character) count++;
      } else if (i === input.length - 1) {
        if (input[i][j - 1] === character) count++;
        if (input[i][j + 1] === character) count++;
        if (input[i - 1][j - 1] === character) count++;
        if (input[i - 1][j] === character) count++;
        if (input[i - 1][j + 1] === character) count++;
      } else if (j === 0) {
        if (input[i - 1][j] === character) count++;
        if (input[i + 1][j] === character) count++;
        if (input[i - 1][j + 1] === character) count++;
        if (input[i][j + 1] === character) count++;
        if (input[i + 1][j + 1] === character) count++;
      } else if (j === input[i].length - 1) {
        if (input[i - 1][j] === character) count++;
        if (input[i + 1][j] === character) count++;
        if (input[i - 1][j - 1] === character) count++;
        if (input[i][j - 1] === character) count++;
        if (input[i + 1][j - 1] === character) count++;
      } else {
        if (input[i - 1][j - 1] === character) count++;
        if (input[i - 1][j] === character) count++;
        if (input[i - 1][j + 1] === character) count++;
        if (input[i][j - 1] === character) count++;
        if (input[i][j + 1] === character) count++;
        if (input[i + 1][j - 1] === character) count++;
        if (input[i + 1][j] === character) count++;
        if (input[i + 1][j + 1] === character) count++;
      }
      if (count < 4) rollCount++;
    }
  }
}

fs.writeFileSync("./output.txt", `Part 1: ${rollCount}`);

let tempInput = input.map((line) =>
  line.map((ch) => {
    return { char: ch, move: false };
  })
);

rollCount = 0;
let trueCount = 1;

while (trueCount > 0) {
  trueCount = 0;
  tempInput = tempInput.map((line) =>
    line.map((obj) => {
      if (obj.move) {
        return { char: ".", move: false };
      } else {
        {
          return obj;
        }
      }
    })
  );
  for (let i = 0; i < tempInput.length; i++) {
    for (let j = 0; j < tempInput[i].length; j++) {
      let count = 0;
      if (tempInput[i][j].char === character) {
        if (i === 0 && j === 0) {
          if (tempInput[i + 1][j].char === character) count++;
          if (tempInput[i][j + 1].char === character) count++;
          if (tempInput[i + 1][j + 1].char === character) count++;
        } else if (i === 0 && j === tempInput[i].length - 1) {
          if (tempInput[i + 1][j].char === character) count++;
          if (tempInput[i][j - 1].char === character) count++;
          if (tempInput[i + 1][j - 1].char === character) count++;
        } else if (i === tempInput.length - 1 && j === 0) {
          if (tempInput[i - 1][j].char === character) count++;
          if (tempInput[i][j + 1].char === character) count++;
          if (tempInput[i - 1][j + 1].char === character) count++;
        } else if (
          i === tempInput.length - 1 &&
          j === tempInput[i].length - 1
        ) {
          if (tempInput[i - 1][j].char === character) count++;
          if (tempInput[i][j - 1].char === character) count++;
          if (tempInput[i - 1][j - 1].char === character) count++;
        } else if (i === 0) {
          if (tempInput[i][j - 1].char === character) count++;
          if (tempInput[i][j + 1].char === character) count++;
          if (tempInput[i + 1][j - 1].char === character) count++;
          if (tempInput[i + 1][j].char === character) count++;
          if (tempInput[i + 1][j + 1].char === character) count++;
        } else if (i === tempInput.length - 1) {
          if (tempInput[i][j - 1].char === character) count++;
          if (tempInput[i][j + 1].char === character) count++;
          if (tempInput[i - 1][j - 1].char === character) count++;
          if (tempInput[i - 1][j].char === character) count++;
          if (tempInput[i - 1][j + 1].char === character) count++;
        } else if (j === 0) {
          if (tempInput[i - 1][j].char === character) count++;
          if (tempInput[i + 1][j].char === character) count++;
          if (tempInput[i - 1][j + 1].char === character) count++;
          if (tempInput[i][j + 1].char === character) count++;
          if (tempInput[i + 1][j + 1].char === character) count++;
        } else if (j === tempInput[i].length - 1) {
          if (tempInput[i - 1][j].char === character) count++;
          if (tempInput[i + 1][j].char === character) count++;
          if (tempInput[i - 1][j - 1].char === character) count++;
          if (tempInput[i][j - 1].char === character) count++;
          if (tempInput[i + 1][j - 1].char === character) count++;
        } else {
          if (tempInput[i - 1][j - 1].char === character) count++;
          if (tempInput[i - 1][j].char === character) count++;
          if (tempInput[i - 1][j + 1].char === character) count++;
          if (tempInput[i][j - 1].char === character) count++;
          if (tempInput[i][j + 1].char === character) count++;
          if (tempInput[i + 1][j - 1].char === character) count++;
          if (tempInput[i + 1][j].char === character) count++;
          if (tempInput[i + 1][j + 1].char === character) count++;
        }
        if (count < 4) {
          rollCount++;
          tempInput[i][j].move = true;
          trueCount++;
        }
      }
    }
  }
}

fs.appendFileSync("./output.txt", `\nPart 2: ${rollCount}`);
