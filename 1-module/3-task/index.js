function ucFirst(str) {
  if (str.length < 1) {
    return '';
  }

  let letterUp = str[0].toUpperCase();
  return letterUp + str.slice(1);
}
