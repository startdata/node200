const userList = [
  { name: "a", age: 1, score: 10 },
  { name: "b", age: 4, score: 60 },
  { name: "c", age: 2, score: 20 },
  { name: "d", age: 6, score: 50 },
];

userList.forEach(function (user) {
  console.log(user);
});

userList.forEach((user) => console.log(user));
