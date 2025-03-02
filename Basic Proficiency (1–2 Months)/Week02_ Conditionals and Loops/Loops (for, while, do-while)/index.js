// Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Write a program to print numbers from 10 to 1 using a while loop.
let i = 10;
while (i > 0) {
    console.log(i);
    i--;
}

// Write a program to print the multiplication table of a number.
for (let i = 1; i <= 12; i++) {
    const multi = i * 3;
    console.log(i + " x 3 = " + multi);
}

// Write a program to calculate the sum of the first 10 natural numbers.
let sum = 0;

for (let i = 1; i <= 10; i++) {
    console.log(sum);
    sum = sum + i; // or sum += i;

}

console.log("Sum of the first 10 natural numbers is: " + sum);


// Write a program to print all even numbers between 1 and 20.


for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }

}
// Write a program to print all odd numbers between 1 and 20.
for (let i = 0; i < 20; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

// Write a program to find the factorial of a number using a loop.
let number = 5;
let result = 1;

for (let i = 1; i <= number; i++) {
    // console.log(i);
    result *= i;
}
console.log(result);


// Write a program to print the Fibonacci series up to 10 terms.
let num = 10;

let num1 = 0;
let num2 = 1;
console.log(num1);
console.log(num2);
let num3;
for (let i = 3; i <= num; i++) {
    // console.log(i);

    num3 = num1 + num2
    console.log(num3);
    num1 = num2;
    num2 = num3;


}



// Write a program to check if a number is prime or not.

let number1 = 6;
let isPrime = true;

if (number1 <= 1) {
    isPrime = false;
}
else {
    for (let i = 2; i <= number1 / 2; i++) {
        if (number1 % i == 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(isPrime);
    console.log(number1 + " is a prime number");
} else {
    console.log(number1 + " is not a prime number");
}



// Write a program to reverse a number (e.g., 123 → 321).
let number2 = 123568;

let reverse = 0;

while (number2 != 0) {
    let lastNumber = number2 % 10;
    // console.log(lastNumber);
    reverse = reverse * 10 + lastNumber;
    number2 = Math.floor(number2 / 10);
    //   console.log( reverse);
}
console.log(reverse);










