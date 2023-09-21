// Import stylesheets
import './style.css';

// Prefix Sum of Matrix (Or 2D Array)

let arr = [
  [10, 20, 30],
  [5, 10, 20],
  [2, 4, 6],
];
const length = arr.length;
// prefixArray = new Array(new Array(3).fill(0)).fill(0);
// console.log(length);

for (let i = 0; i < length - 1; i++) {
  for (let j = 0; j < length - 1; j++) {
    arr[i][j + 1] = arr[i][j] + arr[i][j + 1];
  }
}

for (let i = 0; i < length - 1; i++) {
  for (let j = 0; j < length - 1; j++) {
    arr[i + 1][j] = arr[i][j] + arr[i + 1][j];
  }
}
console.log(arr);
