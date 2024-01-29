// Javascript : The Basics

// Warm up : Decalaration and initialisation .
let firstname = "Zakaria";
let lastname = "ElRhabi";
let PI = 3.14;
let radious = 1;
let favoriteSuperhero = "Raymond Reddington";
let favoriteQuote = "\"You have to make your choices, you have to be happy with them\""
console.log(typeof PI);

// Tell Your name
let fullName = firstname + " " + lastname;

// Maths
let area = PI * radious**2;
let perimeter = 2 * PI * radious;

// Motivation : Quotes
let motivation = "A wise man named" + " " + favoriteSuperhero + ":" + " " + favoriteQuote;

// Variable swap
let a = 3;
let b = 10;
let temp;

temp = a;
a = b;
b = temp;

console.log("After swapping: a = ", a, " and b = ", b);