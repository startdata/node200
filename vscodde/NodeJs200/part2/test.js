const arr1 = [
  { name: "a", age: 1, test: 100 },
  { name: "b", age: 2, test: 20 },
  { name: "c", age: 3, test: 10 },
  { name: "d", age: 4, test: 40 },
  { name: "e", age: 1, test: 300 },
  { name: "f", age: 6, test: 100 },
  { name: "g", age: 5, test: 800 },
];

const arr2 = [
  { name: "a", age: 1, test: 100 },
  { name: "b", age: 2, test: 20 },
  { name: "c", age: 3, test: 10 },
  { name: "e", age: 1, test: 300 },
  { name: "g", age: 5, test: 800 },
];

const aa = () => {
  let arrResult = [];
  for (let i = 0; arr1.length; i++) {
    for (let j = 0; arr2.length; j++) {
      if (arr1[i].name === arr2[j].name) {
        arrResult.push(arr1[i]);
      }
    }
  }
  return arrResult;
};

const aMinusB = arr1.filter(
  (item) =>
    !arr2.some((item2) => item2.name === item.name && item2.name === item.name)
);
