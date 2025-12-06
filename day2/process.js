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

fs.writeFileSync("./output.txt", `Part 1: ${invalidIds.reduce((a, b) => a + b, 0).toString()}`);
