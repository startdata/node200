const listEmployee = [
    {name: 'kyeongrok', age: 31, salary: 4000},
    {name: 'jihyun', age: 31, salary: 5000},
    {name: 'minsub', age: 35, salary: 6000},
];

const raisedSalaryList = listEmployee.map(employee => (employee.salary *1.1));

raisedSalaryList.forEach(salary => console.log('salary: %d', salary));