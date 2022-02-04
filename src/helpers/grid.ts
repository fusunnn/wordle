export function makeGrid() {
  const grid = [];
  for (let i = 0; i < 6; i++) {
    let row = [];
    for (let j = 0; j < 5; j++) {
      row.push(0);
    }
    grid.push(row);
  }
  return grid;
}
