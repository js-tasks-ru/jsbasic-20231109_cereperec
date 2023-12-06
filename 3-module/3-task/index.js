function camelize(str) {
  return str.split("-").map((element, index) => {
    if (index > 0) {
      element = element[0].toUpperCase() + element.slice(1);
    }
    return element;
  }).join('');
}
