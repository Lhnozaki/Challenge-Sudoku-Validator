"use strict";

const Test = require("tape");

const Sudoku = require("./../Sudoku");
const SudokuValidator = require("./../SudokuValidator").SudokuValidator;

Test("Sudoku-Validator", suite => {
  Test("3x3 Grid (9)", t => {
    let sudoku = new SudokuValidator(Sudoku.nineTrue());
    t.equal(sudoku.validate(9), true, "Should be a valid Sudoku Grid");
    t.end();
  });
  Test("Second 3x3 Grid (9)", t => {
    let sudoku = new SudokuValidator(Sudoku.nineTrueTwo());
    t.equal(sudoku.validate(9), true, "Should also be a valid Sudoku Grid");
    t.end();
  });
  Test("Bad 3x3 Grid (9)", t => {
    let sudoku = new SudokuValidator(Sudoku.nineFalse());
    t.equal(sudoku.validate(9), false, "Should return false for invalid grid");
    t.end();
  });
  Test("Badder 3x3 Grid (9)", t => {
    let sudoku = new SudokuValidator(Sudoku.nineFalseTwo());
    t.equal(
      sudoku.validate(9),
      false,
      "Should also return false for invalid grid"
    );
    t.end();
  });

  Test("2x2 Grid (4)", t => {
    let sudoku = new SudokuValidator(Sudoku.fourTrue());
    t.equal(sudoku.validate(4), true, "Should return true");
    t.end();
  });
  Test("Bad 2x2 Grid (4)", t => {
    let sudoku = new SudokuValidator(Sudoku.fourFalse());
    t.equal(sudoku.validate(4), false, "Should return false");
    t.end();
  });

  Test("4x4 Grid (16)", t => {
    let sudoku = new SudokuValidator(Sudoku.sixteenTrue());
    t.equal(sudoku.validate(16), true, "Should return true");
    t.end();
  });
  Test("Bad 4x4 Grid (16)", t => {
    let sudoku = new SudokuValidator(Sudoku.sixteenFalse());
    t.equal(sudoku.validate(16), false, "Should return false");
    t.end();
  });
  suite.end();
});
