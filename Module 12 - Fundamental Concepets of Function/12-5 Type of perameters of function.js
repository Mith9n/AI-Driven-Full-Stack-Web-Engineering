// Normal Parameters

function greet(){
    console.log("Hello , Everyone !!");
}

greet();


// Default Parameters

function greeting(name = "Guest"){
    console.log(`Hello ${name} , welcome  to , todays class.`)
}

greeting();
greeting("Maruf");

// Multiple Parameters

function numbers(num1,num2){
    let sum = num1 + num2 ;
    return sum ;
}

console.log(numbers(20,10));


// Rest Parameters (...)

function Numbers(...num) {
    let summ = 0;

    for (let number of num) {
        summ += number;
    }

    console.log(summ);
}

Numbers(10, 20, 30, 40, 50);

//Function as Parameter (Callback)

function greet(name) {
    return `Hello ${name}`;
}

function display(callback) {
    console.log(callback("Maruf"));
}

display(greet);

// Destructuring Parameters

function student({ name, age }) {
    console.log(name);
    console.log(age);
}

student({
    name: "Maruf",
    age: 22
});