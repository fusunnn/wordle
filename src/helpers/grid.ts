import { Cell } from "../types/cell";

export function makeGrid(): Cell[][] {
  const grid: Cell[][] = [];

  for (let i = 0; i < 6; i++) {
    let row = [];
    for (let j = 0; j < 5; j++) {
      let initCell: Cell = { letter: "", status: "inactive" };
      row.push(initCell);
    }
    grid.push(row);
  }
  return grid;
}
