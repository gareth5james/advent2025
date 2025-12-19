const fs = require("fs");

const input = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\n\n")
  .map((section) => section.split("\n"))
  .map((line, i) => {
    if (i === 0) {
      return line.map((range) => range.split("-"));
    } else {
      return line;
    }
  });

let freshCount = 0;

for (ingredient of input[1]) {
  let isFresh = false;
  for (range of input[0]) {
    const min = parseInt(range[0]);
    const max = parseInt(range[1]);
    if (parseInt(ingredient) >= min && parseInt(ingredient) <= max)
      isFresh = true;
  }
  if (isFresh) freshCount++;
}

fs.writeFileSync("./output.txt", `Part 1: ${freshCount}`);

let possibleFreshIdCount = 0;

const ranges = input[0].map((r) => [parseInt(r[0]), parseInt(r[1])]);
if (ranges.length === 0) {
  possibleFreshIdCount = 0;
} else {
  ranges.sort((a, b) => a[0] - b[0]);
  let mergedStart = ranges[0][0];
  let mergedEnd = ranges[0][1];
  for (let i = 1; i < ranges.length; i++) {
    const [start, end] = ranges[i];
    if (start <= mergedEnd + 1) {
      if (end > mergedEnd) mergedEnd = end;
    } else {
      possibleFreshIdCount += mergedEnd - mergedStart + 1;
      mergedStart = start;
      mergedEnd = end;
    }
  }
  possibleFreshIdCount += mergedEnd - mergedStart + 1;
}

fs.appendFileSync("./output.txt", `\nPart 2: ${possibleFreshIdCount}`);
