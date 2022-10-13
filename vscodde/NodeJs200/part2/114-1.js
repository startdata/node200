const students = [
  { name: "a", age: 1, score: 10 },
  { name: "b", age: 2, score: 20 },
  { name: "c", age: 3, score: 30 },
];

const upper10 = students
  .filter((student) => student.score > 10)
  .map((student) => student.score)
  .reduce((a, b) => a + b);

console.log("sum", upper10);
