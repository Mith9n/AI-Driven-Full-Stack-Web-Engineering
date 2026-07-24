/*Problem 1: Stop at 25 (break)
Problem Statement

Write a JavaScript program using a for loop to print numbers from 1 to 50.

Rules
Print each number.
If the number becomes 25, stop the loop immediately using the break statement.
Number 25 should also be printed before the loop stops. */

for (i = 1; i <= 50; i++) {
    console.log(i);
    if (i == 25) {
        break;
    }
}

/* Problem 2: Skip Multiples of 3 (continue)
Problem Statement

Write a JavaScript program using a for loop to print numbers from 1 to 20.

Rules
If a number is divisible by 3, skip it using the continue statement.
Print all other numbers. */

for (let num = 1 ; i <= 20 ;i++){
    console.log(num);
    if(i==3){
        continue;
    }
}

/* Bonus Challenge (Uses both break and continue)

Write a JavaScript program using a for loop to print numbers from 1 to 100.

Rules
Skip all numbers divisible by 5 using continue.
If the number becomes 80, stop the loop using break.
Print all remaining numbers. */

for (let number = 1; number <= 100; number++) {

    if (number === 80) {
        break;
    }

    if (number % 5 === 0) {
        continue;
    }

    console.log(number);
}