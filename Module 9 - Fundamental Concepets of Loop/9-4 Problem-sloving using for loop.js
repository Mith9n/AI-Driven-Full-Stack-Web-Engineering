/* Problem 5: FizzBuzz ⭐
Problem Statement

Write a JavaScript program using a for loop to print numbers from 1 to 30.

Follow these rules:

If a number is divisible by 3, print "Fizz".
If a number is divisible by 5, print "Buzz".
If a number is divisible by both 3 and 5, print "FizzBuzz".
Otherwise, print the number itself.*/



for( let i =1 ; i <=30 ;i++){
    if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz\n");
    else if(i % 3 == 0) console.log("Fizz\n");
    else if(i % 5 == 0)console.log("Buzz\n");
    else console.log(i,"\n");
}