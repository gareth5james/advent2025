const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", "utf8")
  .split(",")
  .map((pair) => pair.split("-"));

//Part 1
let invalidIds = [];

for (id of input) {
  for (let i = parseInt(id[0]); i <= parseInt(id[1]); i++) {
    let num = i.toString();
    if (
      num.toString().length % 2 === 0 &&
      num.slice(0, num.length / 2) === num.slice(num.length / 2, num.length)
    )
      invalidIds.push(i);
  }
}

fs.writeFileSync(
  "./output.txt",
  `Part 1: ${invalidIds.reduce((a, b) => a + b, 0).toString()}`
);

//Part 2
invalidIds = [];

for (const range of input) {
  const start = parseInt(range[0], 10);
  const end = parseInt(range[1], 10);

  for (let i = start; i <= end; i++) {
    const numStr = i.toString();
    const len = numStr.length;
    let isRepeating = false;

    for (let partLen = 1; partLen <= Math.floor(len / 2); partLen++) {
      if (len % partLen !== 0) continue;

      const part = numStr.slice(0, partLen);
      const repeated = part.repeat(len / partLen);
      if (repeated === numStr) {
        isRepeating = true;
        break;
      }
    }

    if (isRepeating) invalidIds.push(i);
  }
}

fs.appendFileSync(
  "./output.txt",
  ` Part 2: ${invalidIds.reduce((a, b) => a + b, 0).toString()}`
);
