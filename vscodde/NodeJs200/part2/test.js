// let sstring = "abcd";
// const rr = [...sstring];
// const tt = (sstring, num1, num2) => {
//   rr.splice(num1, 1, sstring[num1]);
//   rr.splice();
// };

const aa = (n) => {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer.push(i);
    }
  }
  return answer;
};

console.log(aa(7));
