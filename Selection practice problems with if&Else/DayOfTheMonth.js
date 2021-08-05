const prompt = require("prompt-sync")();
const month = prompt("Enter month : ");
const day = prompt("Enter day : ");
let isInDateRange = false;

if (month == 3 && day >= 20) {
    isInDateRange = true;
} else if (month == 4 || month == 6) {
    isInDateRange = true;
} else if (month == 6 && day <= 20) {
    isInDateRange = true;
}

console.log("The given day and month is in range " + isInDateRange);
