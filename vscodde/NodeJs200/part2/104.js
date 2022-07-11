const coffeeMachine = liquid => espresso => `${espresso}+${liquid}`

const americanoMachine = coffeeMachine('water');
const latteMachine = coffeeMachine('milk');

const americano = americanoMachine('coffe bean');
const latte = latteMachine('coffee bean');

console.log(americano);
console.log(latte);