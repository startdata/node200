const students = [
    {name: 'kyongrok', age: 31, math:80,english: 87},
    {name: 'jihyun', age: 28, math:98,english: 97},
    {name: 'minsup', age: 26, math:70,english: 77},
    {name: 'dasom', age: 20, math:85,english: 93},
    {name: 'yuna', age: 36, math:90,english: 83}
]

const mathUpper80 = students.filter(student => student.math > 80);
const mathUpper80AndEnglishUpper70 = students.filter(student => student.math > 90 && student.english > 70);

console.log('mathUpper80', mathUpper80);
console.log('mathUpper80AndEnglishUpper70', mathUpper80AndEnglishUpper70);