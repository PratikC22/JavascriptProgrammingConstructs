const prompt = require("prompt-sync")();

const num = parseInt(prompt("Enter a number: "));
let fact = 1;

for (i = 2; i <= num; i++) {
    fact = fact * i;
}
console.log(`Factorial of the ${num} is : ` + fact);