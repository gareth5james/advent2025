const fs = require("fs");

const input = fs
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n")
  .map((line) => line.split("").map(Number));

let total = 0;
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
  total += max1 * 10 + max2;
}

fs.writeFileSync("./output.txt", `Part 1: ${total.toString()}`);

total = 0n;

for (const line of input) {
  const digits = line;
  const toRemove = digits.length - 12;

  const stack = [];
  let removalsLeft = toRemove;

  for (const d of digits) {
    while (
      stack.length > 0 &&
      removalsLeft > 0 &&
      stack[stack.length - 1] < d
    ) {
      stack.pop();
      removalsLeft--;
    }
    stack.push(d);
  }

  const bestDigits = stack.slice(0, 12);
  const value = BigInt(bestDigits.join(""));

  total += value;
}

fs.appendFileSync("./output.txt", `\nPart 2: ${total.toString()}`);
