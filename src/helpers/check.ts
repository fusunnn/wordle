import { Cell } from "../types/cell";
import { decrypt } from "./decrypt";
import { count, countCellLetter } from "./count";

//function to check guess against real answer - I never store the decrypted answer to prevent hackers
export function checkAnswer(encrypted: string, row: Cell[]): Cell[] {
  let newRow = [];
  for (let i = 0; i < row.length; i++) {
    let currLetter = row[i].letter.toLowerCase();
    if (currLetter === decrypt(encrypted)[i]) {
      const newCell: Cell = {
        letter: row[i].letter,
        status: "correct",
      };
      newRow.push(newCell);
    } else if (
      decrypt(encrypted).includes(currLetter) &&
      countCellLetter(newRow, currLetter) + 1 <=
        count(decrypt(encrypted), currLetter)
    ) {
      const newCell: Cell = {
        letter: row[i].letter,
        status: "half",
      };
      newRow.push(newCell);
    } else {
      const newCell: Cell = {
        letter: row[i].letter,
        status: "incorrect",
      };
      newRow.push(newCell);
    }
  }
  return newRow;
}
