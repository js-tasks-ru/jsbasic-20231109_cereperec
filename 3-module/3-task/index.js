function camelize(str) {
  let arr = str.split("-");
  let newArr = [];
  arr.forEach((element, index) => {
    if (index > 0) {
      element = element[0].toUpperCase() + element.slice(1);
    }
    newArr.push(element);
  });
  return newArr.join('');
}
