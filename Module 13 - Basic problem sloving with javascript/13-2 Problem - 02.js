// factorial of a number (using function)

function fectorial_calculate(number){
    let factro = 1;
    for(let i = 1 ; i <= number ;i++){
        factro *=i;
    }

    return factro;

}

console.log(fectorial_calculate(5));


// Fizzbuzz ( 1 t0 N)


function fizzbuzz(N){
    for(let i = 1 ; i <= N ; i++){
        if( i % 3 === 0 ){
            console.log("Fizz");
        }else if (i % 5 === 0){
            console.log("Buzz");
        }else if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        } else console.log(i);
    }
    
}

fizzbuzz(25);


    
