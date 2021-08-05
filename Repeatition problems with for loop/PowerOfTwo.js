const prompt = require("prompt-sync")();

const num = prompt("Enter the value of n: ");

for (i = 0; i <= num; i++) {
    console.log(Math.pow(2, i));
}