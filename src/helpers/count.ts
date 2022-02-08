import { Cell } from "../types/cell";

export function count(array: string[], value: string): number {
  var count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      count++;
    }
  }
  return count;
}

export function countCellLetter(row: Cell[], value: string) {
  let count = 0;
  for (let i = 0; i < row.length; i++) {
    if (row[i].letter.toLowerCase() === value) {
      count++;
    }
  }
  return count;
}
