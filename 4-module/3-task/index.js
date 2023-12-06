
function highlight(table) {
  const rows = table.querySelectorAll('tbody tr');

  rows.forEach(tr => {
    let row = tr.querySelectorAll('td');
    row.forEach((td, index) => {
      if (index == 1) {
        if (Number(td.textContent) < 18) {
          tr.style.textDecoration = "line-through";
        }
      }
      if (index == 2) {
        if ((td.textContent) == 'm') {
          tr.classList.add('male');
        } else {
          tr.classList.add('female');
        }
      }
      if (index == 3) {
        if (td.dataset.available) {
          console.log(td.dataset.available);
          td.dataset.available == "true" ? tr.classList.add('available') : tr.classList.add('unavailable');
        } else {
          tr.setAttribute('hidden', 'hidden');
        }}
    });
  });
}
