function sumSalary(salaries) {
  let sum = 0;
  for (key in salaries) {
    if (typeof salaries[key] == "number" && isFinite(salaries[key])) {
      sum += salaries[key];
    }
  }
  console.log(sum);
  return sum;
}
