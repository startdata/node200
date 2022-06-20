const trunc1 = Math.trunc(24.2);
const trunc2 = Math.trunc(42.812343123);
const trunc3 = Math.trunc(0.88);
const trunc4 = Math.trunc(-0.88);
const trunc5 = Math.trunc('-1.123');
const trunc6 = Math.trunc(NaN);
const trunc7 = Math.trunc('foo');
const trunc8 = Math.trunc();

console.log('trunc1:', trunc1);
console.log('trunc2:', trunc2);
console.log('trunc3:', trunc3);
console.log('trunc4:', trunc4);
console.log('trunc5:', trunc5);
console.log('trunc6:', trunc6);
console.log('trunc7:', trunc7);
console.log('trunc8:', trunc8);