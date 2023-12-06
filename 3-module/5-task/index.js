function getMinMax(str) {
  let arr = str.split(" ");
  let result = {
    min: null,
    max: null
  };

  arr.forEach(element => {
    if (Boolean(Number(element))) {

      if (Number(element) < result.min) {
        result.min = Number(element);
      }

      if (Number(element) > result.max) {
        result.max = Number(element);
      }

      console.log(`min: ${result.min}, max: ${result.max}`);
    }
  });

  console.log(result);
  return (result);
}

const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
getMinMax(inputData);
