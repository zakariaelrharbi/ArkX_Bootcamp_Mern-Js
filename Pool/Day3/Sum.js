function sum(numbers) {
    let s = 0;
    if (numbers.length === 0) return s;
      for (let i = 0; i < numbers.length; i++) {
        s += numbers[i];
      }
    return s;
  }
  console.log("===================");
  console.log(sum([1, 2, 3, 4]));
  console.log(sum([-1, 123.123, 0, 123]));