const students = [
  { name: "a", age: 31, score: 85 },
  { name: "b", age: 31, score: 95 },
  { name: "c", age: 35, score: 76 },
  { name: "d", age: 24, score: 70 },
  { name: "e", age: 26, score: 58 },
  { name: "f", age: 29, score: 93 },
  { name: "g", age: 27, score: 28 },
];

const between21to30StudentsAverage = students
  .filter((student) => student.age >= 21 && student.age < 30)
  .map((student) => student.score)
  .reduce((pre, cur, index, arr) => pre + cur / arr.length, 0);

console.log("avg", between21to30StudentsAverage);
