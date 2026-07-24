// Problem 1: Print 1 to 10

let i = 1;

while(i <= 10){
    console.log(i);
    i++;
}

// Problem 2: Print Even Numbers

let number = 0 ;

while(number <= 10){
    if(number % 2 == 0){
        console.log(number);
    }
    number++;
}

// Problem 3: Sum of 1 to 100

let num = 1;
let sum = 0;

while ( num <= 100){
    sum += num;
    num ++;
}

console.log(sum);

// Problem 4: Multiplication Table


let tableNumber = 7;
let multiplier = 1;

while (multiplier <= 10) {
    console.log(tableNumber, "*", multiplier, "=", tableNumber * multiplier);
    multiplier++;
}

// Problem 5: Count Down

let nums = 50;

while(50 >= 1){  
    console.log(nums);
    nums -- ;

}

// 0 <= 50 , 50 >= 0 