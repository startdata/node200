const aa = [0, 31, 24, 10, 1, 9];

const tt = (numbers) => {
  const q = numbers.sort((a, b) => b - a);
  console.log(q);
  const w = Number(q[0]);
  const e = Number(q[1]);
  return w * e;
};

console.log(tt(aa));

const mm = aa.filter((item) => {});
