/*  SudokuValidator(sudoku)
 *
 *  @param sudoku                       a multidimensional array containing the sudoku puzzle
 *
 *  @public property sudoku             the sudoku grid
 *
 *  @public method validate(num)        num is the perfect squared value of an integer
                                        for example: 9(result of 3^3) & 4 (2^2).
 */

exports.SudokuValidator = SudokuValidator;

function SudokuValidator(sudoku) {
  this.sudoku = sudoku;
}

SudokuValidator.prototype.validate = function(num) {
  // Do work here
  let findOrder = n => {
    let arr = [];
    for (i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
  };

  return this.sudoku.length !== num
    ? false
    : this.sudoku.every(
        e => e.sort((a, b) => a - b).join() === findOrder(num).join()
      )
    ? true
    : false;
};
