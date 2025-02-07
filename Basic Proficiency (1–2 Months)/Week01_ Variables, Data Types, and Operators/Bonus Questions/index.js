// Declare a variable principal,rate,and time and assign them numbers, calculate simple interest using the formula(principal * rate * time)/ 100 and print the result
let principal = 2000;
let rate = 12;
let time = 5;

let interest = (principal * rate * time)/100;
console.log(interest);



// Declare a variable num1 and num2 and assign them numbers. find the remainder when num1 is divided by num2 and print the result.
let num1 = 12;
let num2 = 6;
let remainder = num1 % num2;
console.log(remainder);


// Declare a variable num and assign a number .check if it is positive,negative, or zero print the result
let num = -9;
let result = (num > 0) * 1 + (num < 0) * -1;
let output = (result === 1) ? "Positive" : (result === -1) ? "Negative" : "Zero";  
console.log(output);


// Declare a variable num and assign a number .calculate its square and cube,and print both results.
let number = 4;
let square =  (number ** 2) 
let cube =  (number ** 3);
console.log(number + "'s square is = "+ square,"\n"+ number + "'s cube is = "+ cube);
//  Declare a variable num and assign a number .calculate its factorial and print the result.(fectorial of 5 is 5 * 4 * 3 * 2 * 1 = 120)
let numb = 5;  
let factorial = numb * (numb - 1) * (numb - 2) * (numb - 3) * (numb - 4);  

console.log(factorial);

