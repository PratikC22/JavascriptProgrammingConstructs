const prompt = require("prompt-sync")();

const num = prompt("Enter number to know units place");

if (num == 1) console.log("Units");
else if (num == 10) console.log("Tens");
else if (num == 100) console.log("Hundreds");
else if (num == 1000) console.log("Thousands");
else if (num == 10000) console.log("Ten Thousands");
else if (num == 100000) console.log("Hundred Thousands / Lakh");
else if (num == 1000000) console.log("Million / Ten lakh");
