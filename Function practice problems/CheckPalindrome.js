const prompt = require("prompt-sync")();

function checkPalindrome(num) {

    while (num > 0) {
        rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }

    if (rev == SecondNumber) return 0;
    else return 1;
}

let firstNumber = parseInt(prompt("Enter the first number: "));
let SecondNumber = parseInt(prompt("Enter the second number: "));
let rem = 0;
let rev = 0;

if (checkPalindrome(firstNumber) == 0) console.log(firstNumber + " & " + SecondNumber + " are palindrome");
else console.log(firstNumber + " & " + SecondNumber + " are not palindrome");