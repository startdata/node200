const students = [
  { name: "a", age: 1, score: 10 },
  { name: "b", age: 2, score: 20 },
  { name: "c", age: 3, score: 30 },
];

const scores = students.map((aa) => aa.score);

const sum = scores.reduce((a, b) => a + b, 0);
console.log("sum", sum);
