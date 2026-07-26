// Find te Largest and smallest value (using function);

function find_the_largest_emelent(array){
    let max_element = array[0];
    
   
    for(let i = 0 ; i < array.length ;i++){
        if( max_element < array[i]){
            max_element = array[i];
        }
    }

    return max_element;
}

let array =[10,12,14,51,23,44,29];
console.log(find_the_largest_emelent(array));



function find_the_smallest_emelent(arr){
    let min_element = array[0];
    
   
    for(let i = 0 ; i < arr.length ;i++){
        if( min_element > arr[i]){
            min_element = arr[i];
        }
    }

    return min_element;
}

let arr =[10,12,14,51,23,44,29];
console.log(find_the_smallest_emelent(arr));