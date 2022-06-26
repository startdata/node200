const number = 88.7;
const divide = 1/2;

console.log('type:%s %d', typeof number, number);
console.log('round', typeof number, Math.round(number));
console.log('divide:%d,%d', divide, Math.round(divide));


const maxResult = Math.max(-10,10,20,30,40);
const minResult = Math.min(-10,10,20,30,40);

console.log('max :', maxResult);
console.log('min :', minResult);

const abs1 = Math.abs('-1');
const abs2 = Math.abs(-3.141592);
const abs3 = Math.abs([2]);
const abs4 = Math.abs([1,2]);
const abs5 = Math.abs({});
const abs6 = Math.abs(null);
const abs7 = Math.abs('');
const abs8 = Math.abs([]);


console.log('abs1:', abs1);
console.log('abs2:', abs2);
console.log('abs3:', abs3);
console.log('abs4:', abs4);
console.log('abs5:', abs5);
console.log('abs6:', abs6);
console.log('abs7:', abs7);
console.log('abs8:', abs8);

