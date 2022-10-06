const studentList = [
  { name: "a", age: 10, math: 10, english: 10 },
  { name: "b", age: 20, math: 20, english: 20 },
  { name: "c", age: 30, math: 30, english: 30 },
  { name: "d", age: 40, math: 40, english: 40 },
  { name: "e", age: 50, math: 50, english: 50 },
  { name: "f", age: 60, math: 60, english: 60 },
  { name: "g", age: 70, math: 70, english: 70 },
];

studentList.sort((now, next) => now.math - next.math);
console.log("studentList", studentList);

const compare = (now, next) => {
  console.log("--------");
  console.log("now", now);
  console.log("next", next);
};
studentList.sort(compare);
