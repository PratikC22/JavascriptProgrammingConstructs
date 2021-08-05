const prompt = require("prompt-sync")();

const lowerBound = prompt("Enter lower limit : ");
const upperBound = prompt("Enter upper limit : ");
console.log(`The prime numbers between ${lowerBound} and ${upperBound} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerBound; i <= upperBound; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) console.log(i);
}