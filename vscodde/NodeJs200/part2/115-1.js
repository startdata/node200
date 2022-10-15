const employeeList = [
  { name: "a", age: 1, department: "dev" },
  { name: "b", age: 2, department: "design" },
  { name: "c", age: 3, department: "dev" },
];

const devAgeList = employeeList
  .filter((emp) => emp.department === "dev")
  .map((emp) => emp.age);
console.log(devAgeList);
// console.log(devAgeList.reduce((a,b) = a+b));
