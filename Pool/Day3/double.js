function double(numbers) {
    let double_arr = [];
  if (numbers.length === 0) return double_arr;
  for (let i = 0; i < numbers.length; i++) {
    double_arr.push(numbers[i] * 2);
  }
  return double_arr;
}

console.log("===================");
console.log(double([123, 3, 4, 2, 1]));
console.log(double([4, , 1]));