let i = 0 ;

do{
    console.log(i)
    i++;
}while(i < 10);

/*
Problem 1: Print Even Numbers
Problem Statement

Write a JavaScript program using a do...while loop to print all even numbers from 1 to 20.

Rules
Use a do...while loop.
Print only even numbers.
Do not use an array.
*/

let value = 1 ;

do {
    if(value % 2 ==0){
        console.log(value);
    }
    value ++;
    
} while(value <= 20)


/* Problem 2: Sum of Odd Numbers ⭐
Problem Statement

Write a JavaScript program using a do...while loop to calculate the sum of all odd numbers from 1 to 50.

Rules
Use a do...while loop.
Add only odd numbers.
Print the final sum after the loop ends */

let num = 1 ;
let sum = 0;

do{
    if(num % 2 == 0){
        sum += num;
    }
    num ++;

} while(num <= 50);

console.log(sum);