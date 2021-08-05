const prompt = require("prompt-sync")();

const num = prompt("Enter the value of n: ");
let sum = 0;

process.stdout.write("The series is: ")
for (i = 1; i <= num; i++) {
    if (i != num) {
        //To print the output in a single line
        process.stdout.write('1/' + i + ' + ');
        sum += 1 / i;
    }
    else {
        console.log('1/' + i);
        sum += 1 / i;
    }
}
console.log("Harmonic Value for the series is: " + sum);