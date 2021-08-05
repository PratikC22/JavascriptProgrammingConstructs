const prompt = require("prompt-sync")();

const yr = prompt("Enter year (YYYY): ");
if (((yr % 4 == 0) && (yr % 100 != 0)) || (yr % 400 == 0)) {
    console.log(yr + " is a leap year");
}
else {
    console.log(yr + " is a not leap year");
}