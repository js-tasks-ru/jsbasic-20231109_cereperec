function makeDiagonalRed(table) {
  const rows = Array.from(table.rows);
  rows.forEach((el, index) => {
    const arrayTd = Array.from(el.cells);
    arrayTd[index].style.backgroundColor = 'red';
  });
}
