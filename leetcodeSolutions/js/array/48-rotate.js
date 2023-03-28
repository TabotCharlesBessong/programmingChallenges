const rotateMatrix = (matrix) => {
  const n = matrix.length;
  console.log(n)
  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - i - 1; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = temp;
    }
  }
  return matrix;
}

console.log(rotateMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]))

// matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
// console.log(matrix.length)