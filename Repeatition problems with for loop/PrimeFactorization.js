const prompt = require("prompt-sync")();

const number = parseInt(prompt("Enter any number to print its prime factors: "));
let isPrime = 0;

for (i = 2; i <= number; i++) {
    let a = number % i;
    if (a == 0) {
        isPrime = 1;
        for (j = 2; j <= i / 2; j++) {
            let b = i % j;
            if (b == 0) {
                isPrime = 0;
            }
        }
        if (isPrime == 1) {
            console.log(i);
        }
    }
}