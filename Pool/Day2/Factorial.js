
let num = 5;
let result = 1;
if (num === 0 || num === 1) result = 1;
else {
    for (let i = 1; i <= num; i++) {
        result = result * i;
    }
}
console.log(result); 

// Factorial
// let num = 5;
// function Factorial(n) {
//     if (n == 0) {
//         return 1;
//     } else {
//         return n * Factorial(n - 1);
//     }
// }
// let result = Factorial(num);
// console.log(result);