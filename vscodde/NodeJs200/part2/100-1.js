const scores = [85, 92, 76];

const average = (list, total, length) => {
  if (length === list.length) return total / length;
  return average(list, total + list[length], length + 1);
};

console.log("average:", average(srores, 0, 0));
