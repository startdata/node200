let sstring = "abcd";
const rr = [...sstring];
const tt = (sstring, num1, num2) => {
  rr.splice(num1, 1, sstring[num1]);
  rr.splice();
};

console.log(rr);
