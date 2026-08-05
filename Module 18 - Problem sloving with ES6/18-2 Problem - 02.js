
// discount price 

function calculated_total (discount = 0 , ...purchase){
    let total = 0 ;

    for(let i of purchase){
        total+=i; 
    }
     
    const final_total = total - ( total * discount / 100);

    return `Discount : ${discount} Total : ${final_total}`;
}

let numbers = [100,200,310,120,210,120,330,125];

console.log(calculated_total(10,...numbers));

// remove duplicate element 

let array_1 = [1,2,3,4,5,6,7];
let array_2 = [3,2,4,9,10,11,1];

let marge_array = [...array_1,...array_2];


// useing genaral formet
let new_array = [];
for( let i = 0 ; i < marge_array.length ;i++){
    if(! new_array.includes(marge_array[i])){
        new_array.push(marge_array[i]);
    }
}

console.log(new_array);

// using new set 
let remove_duplicate = new Set(marge_array);
console.log(...remove_duplicate);