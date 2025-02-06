// Declare three variables a, b, and c and assign them numbers. Calculate the sum of their squares (a² + b² + c²) and print the result.
let a, b, c;
a = 2;
b = 9;
c = 3;

let sum = a ** 2 + b ** 2 + c ** 2
console.log(sum);

// Declare two variables num1 and num2 and assign them numbers. Swap their values without using a third variable and print the updated values.
let num1, num2;
num1 = 2;
num2 = 3;

num1 = num1 + num2;
console.log( "number1 is " + num1)

num2 = num1 - num2
console.log("number2 is " + num2);

num1 = num1 - num2;
console.log("number1 is " + num1);


// Declare a variable year and assign a year (e.g., 2025). Check if it is a leap year and print true or false. (A leap year is divisible by 4 but not by 100, unless it is also divisible by 400.)
let year = 2024;
let y400 = year % 400 === 0;
console.log(y400);

let y4 = year % 4 === 0;
console.log(y4);

let y100 = year % 100 === 0;
console.log(y100);

let leepYear = (y4 && !y100) || y400;
console.log("true is Represent leep year otherwise not so this year is = "+leepYear);

// Declare a variable number and assign a number to it. Check if it is even or odd and print the result.
let number = 59;
let even = number % 2 === 0;
console.log("is true Represent even number , is false Represent ood number = " + even);


// Declare a variable score and assign a number to it. Check if the score is greater than or equal to 50 and print "Pass" or "Fail".
let score = 28;
let mark =  (score >= 50) ? "Paas": "File";
console.log(mark);
