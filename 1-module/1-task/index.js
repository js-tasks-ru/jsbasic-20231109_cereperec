function factorial(n) {
  if (n < 2) {
    return 1;
  }

  let j = 1;
  for (let i = 1; i <= n; i++) {
    j *= i;
  }
  return j;
}

console.log(factorial(4));
