export interface Cell {
  letter: string;
  status: "correct" | "half" | "incorrect" | "inactive";
}
