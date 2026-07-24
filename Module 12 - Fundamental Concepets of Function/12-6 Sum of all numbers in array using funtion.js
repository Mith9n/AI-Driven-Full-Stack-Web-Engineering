function sum_of_array(numbers){
    let sum = 0;

    for( let values of numbers){
        sum += values;
    }

    return sum ;

}

const array = [10,20,30,40,50];
console.log(sum_of_array(array));



function array_sum(numbs){
    let sum = 0;
    
    for(let index in numbs){
        sum += numbs[index];
    }
    return sum ;

}

const arry = [10,20,30,40,50];
console.log(array_sum(arry));