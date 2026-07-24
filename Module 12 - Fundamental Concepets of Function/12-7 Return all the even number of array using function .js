function return_even_numbers(numbers){
    let store = [];
    for( let value of numbers){
        if(value % 2 == 0){
            store.push(value);
        }
    }
    return store;

}

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(return_even_numbers(array));