const sumNumber = (start, end, acc) => {
  if (start > end) return acc;
  return sumNumber(start + 1, end, acc + start);
};

console.log("return", sumNumber(1, 10, 0));
