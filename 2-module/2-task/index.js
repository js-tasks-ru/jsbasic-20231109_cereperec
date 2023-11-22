function isEmpty(obj) {
  let j = 0;
  for (key in obj) {
    j += 1;
  }
  return j == 0;
}

// первое сам придумыва. ДЛя второго варианта нашел метод в интернете, вроде тоже работает
function isEmpty2(obj) {
  return Object.keys(obj).length == 0;
}
