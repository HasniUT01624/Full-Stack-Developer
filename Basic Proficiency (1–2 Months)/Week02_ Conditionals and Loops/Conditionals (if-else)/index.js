// Write a program to check if a number is positive, negative, or zero.
let number = -9;
if (number > 0) {
    console.log("Positive");
}
else if (number < 0) {
    console.log("negative");
}
else {
    console.log("Zero");
}

// Write a program to check if a number is even or odd.
let number1 = 8;
if (number1 % 2 == 0) {
    console.log(number1 + " is even number");
}
else {
    console.log(number1 + " is odd number");
}

// Write a program to find the largest of three numbers.
let num1 = 4;
let num2 = 5;
let num3 = 3;
if ((num1 > num2) && (num1 > num3)) {
    console.log(num1 + " is largest ");
}
else if (num2 > num3) {
    console.log(num2 + " is largest ");
}
else {
    console.log(num3 + " is largest");
}

// Write a program to check if a year is a leap year or not.
let year = 2019;
if (year % 400 == 0) {
    console.log(year + " this is leep year 400 rule")
} if (year % 4 == 0 && year % 100 != 0) {
    console.log(year + " this is leep year")
}
else {
    console.log(year + " Not a leap year");
}

// Write a program to check if a person is eligible to vote (age >= 18).
let age = 16;
if (age >= 18) {
    console.log("this person is eligible to vote");
} else {
    console.log("this person is not eligible to vote");
}

// Write a program to check if a number is divisible by both 3 and 5.
let numbers = 15;
if (numbers % 3 == 0 && numbers % 5 == 0) {
    console.log(numbers + " is divisible by both 3 and 5");
} else {
    console.log(numbers + " not divisible by both 3 and 5.");
}

// Write a program to check if a character is a vowel or consonant.
let char = "G";
char = char.toLowerCase();

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    console.log(char + " is vowel letter");
} else {
    console.log(char + " is not vowel");
}

// Write a program to check if a number is a multiple of 7.
let num7 = 14;
if (num7 % 7 === 0 ){
    console.log( num7 + " number is a multiple of 7");
}else{
    console.log( num7 + " number is not a multiple of 7");  
}

// Write a program to check if a triangle is equilateral, isosceles, or scalene based on its sides.
let side1 = 15;
let side2 = 18;
let side3 = 18;
if (side1 === side2 && side1 === side3 ){
    console.log("triangle is equilateral");
}else if(side1 === side2 || side1 === side3 || side2 === side3){
    console.log("triangle is isosceles");
} 
else{
    console.log("triangle is scalene");
}
// Write a program to check if a number is a palindrome (e.g., 121 is a palindrome).
let num = 1258; 
let temp = num;
let reversedNum = 0;

 while (temp > 0) {
   let lastDigit = temp % 10;
//   console.log(lastDigit);

  reversedNum = reversedNum * 10 + lastDigit;
//   console.log(reversedNum);
  temp = Math.floor(temp / 10);
  console.log(temp);
}

// Step 5: Check if the reversed number is equal to the original number
if (num === reversedNum) {
  console.log(num + " is a palindrome.");
} else {
  console.log(num + " is not a palindrome.");
}