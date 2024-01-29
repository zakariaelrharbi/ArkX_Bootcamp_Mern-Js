function countEven(numbers) {
    let c = 0;
    if(numbers.length == 0) return c;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) c++;
    }
    return c;
  }
  console.log("===================");
  console.log(countEven([123, 3, 4, 2, 1]));
  console.log(countEven([4, , 1]));