const printHello = () => console.log('hello'); // {} 중
const printHello2 = () => 'hello2';
const printMessage = message => console.log(messge);
const plus = (a,b) => a+b;
const minus = (a,b) => a-b;

printHello();
console.log(printHello2());
printMessage('message');
console.log('plus : %d', plus(10,20));
console.log('minus : %d', minus(10,20));


const studentList = [
    {name: 'kyeogrok', age: 31, math: 85, science: 75},
    {name: 'jihyun', age: 31, math: 95, science: 83},
    {name: 'minsup', age: 35, math: 76, science: 98},
];
const pluss = (a,b) => a+b;
studentList.forEach(student => console.log(`${student.name} total: ${pluss(student.math, student.science)}`));

console.log('--------------------');

studentList.forEach((student) => {
    console.log(`${student.name} total: ${pluss(student.math, student.science)}`);
});
