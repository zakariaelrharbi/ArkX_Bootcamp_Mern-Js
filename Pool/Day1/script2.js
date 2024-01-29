// Maximum 
let a1 = -15;
let b1 = 6;
let c = 2.6;
let maxNumber;

if (a1 > b1 && a1 > c) {
    maxNumber = a1;
} else if (b1 > a1 && b1 > c) {
    maxNumber = b1;
}else{
    maxNumber = c;
}
console.log(maxNumber)

// The Teacher
let score = 83;

if (score > 85) {
    console.log("A");
}
if (score > 70 && score <= 85) {
    console.log("B");
}
if (score > 55 && score <= 70) {
    console.log("C");
}
if (score > 40 && score <= 55) {
    console.log("D");
}
if (score > 15 && score <= 40) {
    console.log("E");
}
if (score <= 15) {
    console.log("D");
}