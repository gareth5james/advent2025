const fs = require("fs");

const input = fs
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n")
  .map((line) => line.split("").map(Number));

let count = 0;
for (const line of input) {
  let max1 = 0;
  let max2 = 0;
  for (let i = 0; i < line.length; i++) {
    const joltage = parseInt(line[i]);
    if (joltage > max1 && i != line.length - 1) {
      max1 = joltage;
      max2 = 0;
    } else if (joltage > max2) max2 = joltage;
  }
  count += max1 * 10 + max2;
}

fs.writeFileSync("./output.txt", `Part1: ${count.toString()}`);
