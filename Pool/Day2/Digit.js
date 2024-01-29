// A program that give you how many digits in this number
let num = 123542;
let count = 0;

while (num !== 0) {
    num = Math.floor(num / 10);
    count++;
}
console.log(count);