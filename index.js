// Checkerboard
// Given an array with two numbers, the first being the number of rows and the second being the number of columns, return a matrix (an array of arrays) filled with "X" and "O" characters of the given size.

// The characters should alternate like a checkerboard.
// The top-left cell must always be "X".
// For example, given [3, 3], return:

// [
//   ["X", "O", "X"],
//   ["O", "X", "O"],
//   ["X", "O", "X"]
// ]

function createBoard(dimensions) {
  console.log(dimensions);
  // dimensions[0]
  const rows = dimensions[0];
  const cols = dimensions[1];
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      matrix[i].push('j');
    }
  }
  console.log(matrix);
  return dimensions;
}
