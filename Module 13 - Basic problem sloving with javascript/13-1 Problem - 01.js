// Number problem - Even odd check (using functon)

function Even_odd_checker(number){
    if (number % 2 === 0){
        console.log("Even");
    }else console.log("Odd");
}

Even_odd_checker(1);

//  sum of range (using functon)

function range_of_sum (range){
    let sum = 0;
    for(let i = 1; i <= range; i++){
        sum+=i;
    }

    return sum;
}

console.log(range_of_sum (7));

