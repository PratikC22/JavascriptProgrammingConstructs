const prompt = require("prompt-sync")();

console.log("Enter 3 numbers to perform the arithmetic operations");
const num1 = prompt('Enter First Number: ');
const num2 = prompt('Enter Second Number: ');
const num3 = prompt('Enter Third Number: ');

console.log();

let result1 = Number(num1) + Number(num2) * Number(num3);
console.log("Arithmetic Operation: result1 = num1 + num2 * num3: " + result1);

let result2 = Number(num1) % Number(num2) + Number(num3);
console.log("Arithmetic Operation: result2 = num1 % num2 + num3: " + result2);

let result3 = Number(num3) + Number(num1) / Number(num2);
console.log("Arithmetic Operation: result3 = num3 + num1 / num2: " + result3);

let result4 = Number(num1) * Number(num2) + Number(num3);
console.log("Arithmetic Operation: result4 = num1 * num2 + num3: " + result4);

console.log();

let minValue = Math.min(result1, result2, result3, result4);
let maxValue = Math.max(result1, result2, result3, result4);

console.log("Minimum value is " + minValue);
console.log("Maximum value is " + maxValue);