const fs = require("fs");
const { parse } = require("path");

const input = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\n")
  .map((item) => item.trim().split(/\s+/));

const inputRotated = input[0]
  .map((_, colIndex) => input.map((row) => row[colIndex]))
  .map((line) => {
    return line.map((item, index) => {
      if (index < 4) return parseInt(item);
      return item;
    });
  });

let total = 0;

inputRotated.forEach((line) => {
  const [a, b, c, d, operator] = line;

  let computed;
  switch (operator) {
    case "+":
      computed = a + b + c + d;
      break;
    case "*":
      computed = a * b * c * d;
      break;
    case "-":
      computed = a - b - c - d;
      break;
    case "/":
      computed = a / b / c / d;
      break;
    default:
      computed = null;
  }

  total += computed;
});

fs.writeFileSync("./output.txt", `Part 1: ${total}`);

const inputRotatedRTL = input[0]
  .map((_, colIndex) => input.map((row) => row[colIndex]))
  .map((row) => {
    console.log(row);
    const a =
      (row[0]?.[3] ?? "") +
      (row[1]?.[3] ?? "") +
      (row[2]?.[3] ?? "") +
      (row[3]?.[3] ?? "");
    const b =
      (row[0]?.[2] ?? "") +
      (row[1]?.[2] ?? "") +
      (row[2]?.[2] ?? "") +
      (row[3]?.[2] ?? "");
    ("");
    const c =
      (row[0]?.[1] ?? "") +
      (row[1]?.[1] ?? "") +
      (row[2]?.[1] ?? "") +
      (row[3]?.[1] ?? "");
    const d =
      (row[0]?.[0] ?? "") +
      (row[1]?.[0] ?? "") +
      (row[2]?.[0] ?? "") +
      (row[3]?.[0] ?? "");
    ("");
    const operator = row[4];
    console.log([a, b, c, d, operator]);
    return [a, b, c, d, operator];
  });

/*
inputRotatedRTL.forEach((line) => {
  const [a, b, c, d, operator] = line;

  let computed;
  switch (operator) {
    case "+":
      computed = a + b + c + d;
      break;
    case "*":
      computed = a * b * c * d;
      break;
    case "-":
      computed = a - b - c - d;
      break;
    case "/":
      computed = a / b / c / d;
      break;
    default:
      computed = null;
  }

  total += computed;
});

//fs.appendFileSync("./output.txt", `\nPart 2: ${total}`);
*/
