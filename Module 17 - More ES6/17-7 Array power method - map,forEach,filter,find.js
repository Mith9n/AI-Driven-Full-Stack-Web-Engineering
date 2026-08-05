// map , forEach , filter,find 

let numbers_01 = [1,2,3,4,5];
let numbers_02 = [];

for ( let i of numbers_01){
    numbers_02.push(i);
}

console.log(numbers_02);


// using map 

// let  numbers = [1,2,3,4,5];

const new_array = numbers.map(function(num){
    return num*2 ;
})

console.log(new_array);

// map using arrow funtion 

let elements =[12,11,10,9,8];

const new_element =elements.map(num =>num*2);
console.log(new_element);



// forEach

let num = [1,2,3,4,5,6,7];

num.forEach(function (val){
    console.log(val);
})


// filter usin normal funtion 
const filters = num.filter(function(nums){
    return 3 < nums;
})
console.log(filters);

// using arrow funtion 
const filtr = num.filter((nums)=>{
    return 3 < nums;
})
console.log(filtr);


let numbers = [1, 2, 3, 4, 5, 6];



