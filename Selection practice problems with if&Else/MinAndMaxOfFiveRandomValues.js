
//Creating a function to return a random number between range min and max
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

//Using function to get random 3 digit values
let num1 = getRndInteger(100,999);
let num2 = getRndInteger(100,999);
let num3 = getRndInteger(100,999);
let num4 = getRndInteger(100,999);
let num5 = getRndInteger(100,999);

//Printing five random numbers
console.log("Five randoms are: " + num1 + " " + num2 + " " + num3 + " " + num4 + " " + num5);


//Printing min and max using Math.min and Math.max
let minValue = Math.min(num1, num2, num3, num4, num5);
let maxValue = Math.max(num1, num2, num3, num4, num5);

console.log("Printing minimum and maximum value using Math.min and Math.max");
console.log("Minimum random number among five is " + minValue);
console.log("Maximum random number among five is " + maxValue);