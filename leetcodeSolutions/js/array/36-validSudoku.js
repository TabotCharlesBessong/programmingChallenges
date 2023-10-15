
// brute force
// const isValidSudoku = (board) => {
//   for(let i = 0; i < board.length; i++) {
//     const set = new Set()
//     for(let j = 0; j < board[i].length; j++) {
//       const cell = board[i][j]
//       if(cell === '.') continue
//       if(set.has(cell)) return false
//       set.add(cell)
//     }
//   }
//   for(let i = 0; i < board.length; i++) {
//     const set = new Set()
//     for(let j = 0; j < board[i].length; j++) {
//       const cell = board[j][i]
//       if(cell === '.') continue
//       if(set.has(cell)) return false
//       set.add(cell)
//     }
//   }

//   for(let i = 0; i < 3; i++) {
//     for(let j = 0; j < 3; j++) {
//       for(let k = 0; k < 3; k++) {
//         for(let l = 0; l < 3; l++) {
//           const cell = board[3 * i + k][3 * j + l]
//           if(cell === '.') continue
//           if(set.has(cell)) return false
//           self.add(cell)
//         }
//       }
//     }
//   }
//   return true
// }

function isValidSudoku(board) {
  const rows = Array(9)
    .fill(0)
    .map(() => new Set());
  const columns = Array(9)
    .fill(0)
    .map(() => new Set());
  const boxes = Array(9)
    .fill(0)
    .map(() => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = board[i][j];
      if (cell !== ".") {
        if (
          rows[i].has(cell) ||
          columns[j].has(cell) ||
          boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(cell)
        ) {
          return false;
        }
        rows[i].add(cell);
        columns[j].add(cell);
        boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(cell);
      }
    }
  }

  return true;
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const board1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "8"], // Invalid: Duplicate '8' in the last cell of the last row
];

const isValid1 = isValidSudoku(board1);
console.log(isValid1);

const isValid = isValidSudoku(board);
console.log(isValid);