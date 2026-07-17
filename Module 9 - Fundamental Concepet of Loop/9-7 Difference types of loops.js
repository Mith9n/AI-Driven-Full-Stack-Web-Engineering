// JavaScript Different Types of Loops


// 1. for Loop
// Use: When you know the number of iterations.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}




// 2. while Loop
// Use: When the number of iterations is unknown and depends on a condition.

let number = 1;

while (number <= 5) {
    console.log(number);
    number++;
}




// 3. do...while Loop
// Use: When the code must execute at least once before checking the condition.

let count = 1;

do {
    console.log(count);
    count++;
} while (count <= 5);




// 4. for...of Loop
// Use: To iterate over the values of an array, string, or other iterable objects.

let fruits = ["Apple", "Mango", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}



// 5. for...in Loop
// Use: To iterate over the keys of an object or the indexes of an array.

let student = {
    name: "Rahim",
    age: 20,
    city: "Dhaka"
};

for (let key in student) {
    console.log(key);
}



// Quick Summary

// for        → Known number of iterations.
// while      → Unknown number of iterations.
// do...while → Executes at least once.
// for...of   → Iterates over values.
// for...in   → Iterates over object keys or array indexes.