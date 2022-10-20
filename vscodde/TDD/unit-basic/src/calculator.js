class Calculator {
  constructor() {
    this.value = 0;
  }

  set(num) {
    this.value = num;
  }
  clear(num) {
    this.value = 0;
  }
  add(num) {
    const sum = this.value + num;
    if (sum > 102) {
      throw new Error("value can not");
    }
    this.value = sum;
  }
  subtract(num) {
    this.value = this.value - num;
  }

  multiply(num) {
    this.value = this.value * num;
  }
  divide(num) {
    this.value = this.value / num;
  }
}

module.exports = Calculator;
