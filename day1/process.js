const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8').split("\n").map(input => {return {direction: input.slice(0, 1), number: parseInt(input.slice(1))}});

// Part 1 
let i = 50;
let count = 0;

input.forEach(({ direction, number }) => {
  if (direction === 'R') {
    i = (i + number) % 100;
    if (i === 0) count++;
  } else if (direction === 'L') {
    i = (i - number + 100) % 100;
    if (i === 0) count++;  }
});

fs.writeFileSync('./output.txt', `Part 1: ${count.toString()}`);

// Part 2
i = 50;
count = 0;

input.forEach(({ direction, number }) => {
  for (let step = 0; step < number; step++) {
    if (direction === 'R') {
      i = (i + 1) % 100;
      if (i === 0) count++;
    } else if (direction === 'L') {
      i = (i - 1 + 100) % 100;
      if (i === 0) count++;
    }
  }
});

fs.appendFileSync('./output.txt', `\nPart 2: ${count.toString()}`);