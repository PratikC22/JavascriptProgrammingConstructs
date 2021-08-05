const prompt = require("prompt-sync")();

function searchNumber(upperBound) {
    let low = 0;
    let high = upperBound - 1;
    let choice = 0;

    while (low <= high) {
        let midVal = (low + high) / 2;
        console.log("Press 0 if the number is " + midVal);
        console.log("Press 1 if the number is between " + low + " to " + midVal);
        console.log("Press 2 if the number is between " + (midVal + 1) + " to " + high);
        choice = parseInt(prompt());

        if (choice == 0) {
            console.log("Got the number " + midVal);
            break;
        }
        else if (choice == 1) {
            high = midVal;
        }

        else if (choice == 2) {
            low = midVal + 1;
        }

    }
}

const upperBound = prompt('Enter the upper bound to determine the element: ');
const number = prompt('Think of a number between 0 to ' + (upperBound - 1) + ": ");
searchNumber(upperBound);