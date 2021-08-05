//Getting five random two digit numbers
let num1 = Math.floor(Math.random() * 90 + 10);
let num2 = Math.floor(Math.random() * 90 + 10);
let num3 = Math.floor(Math.random() * 90 + 10);
let num4 = Math.floor(Math.random() * 90 + 10);
let num5 = Math.floor(Math.random() * 90 + 10);

//Adding them and finding average
let sum = num1 + num2 + num3 + num4 + num5;
let avg = sum / 5;

//Printing average
console.log("Average of sum of five random numbers is " + avg);