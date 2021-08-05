const prompt = require("prompt-sync")();

const num = prompt("Enter the value of n: ");

i = 0
while (i <= num) {
    let powerOf2 = Math.pow(2, i);
    if (powerOf2 <= 256) {
        console.log(powerOf2);
        i++;
    }
    else break;
}