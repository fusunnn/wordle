import { Cell } from "../types/cell";
import { decrypt } from "./decrypt";
import { count, countCellLetter } from "./count";

//function to check guess against real answer - I never store the decrypted answer to prevent hackers
export function checkAnswer(encrypted: string, row: Cell[], key: string) {
  const placeholderCell: Cell = {
    letter: "",
    status: "inactive",
  };

  let newRow: Cell[] = [
    placeholderCell,
    placeholderCell,
    placeholderCell,
    placeholderCell,
    placeholderCell,
  ];
  let hasWon: boolean = true;

  //first for loop to prioritize correct positions - even if an orange is earlier in the word it will give priority to correct positions
  for (let i = 0; i < row.length; i++) {
    let currLetter = row[i].letter.toLowerCase();

    //check if letter is correct and correct position
    if (currLetter === decrypt(encrypted, key)[i]) {
      const newCell: Cell = {
        letter: row[i].letter,
        status: "correct",
      };
      newRow[i] = newCell;
    }
  }
  //second for loop for the rest of the checks
  for (let i = 0; i < row.length; i++) {
    let currLetter = row[i].letter.toLowerCase();

    if (
      //check if letter is in the word and check for number of occurences
      decrypt(encrypted, key).includes(currLetter) &&
      countCellLetter(newRow, currLetter) + 1 <=
        count(decrypt(encrypted, key), currLetter) &&
      newRow[i] === placeholderCell
    ) {
      hasWon = false;
      const newCell: Cell = {
        letter: row[i].letter,
        status: "half",
      };
      newRow[i] = newCell;
    } else if (newRow[i] === placeholderCell) {
      hasWon = false;
      //case where letter is not even in the word
      const newCell: Cell = {
        letter: row[i].letter,
        status: "incorrect",
      };
      newRow[i] = newCell;
    }
  }

  return { newRow: newRow, hasWon: hasWon };
}
