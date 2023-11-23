let calculator = {
  read(a, b) {
    this.number1 = a;
    this.number2 = b;
  },

  sum() {
    return this.number1 + this.number2;
  },

  mul() {
    return this.number1 * this.number2;
  },
};

calculator.read(3, 5);
console.log(calculator.sum()); // 8
console.log(calculator.mul()); // 15

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
