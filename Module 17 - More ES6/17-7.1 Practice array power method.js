// map  method using normal function
const number =[1,2,3,4,5,6,7];

const store_number =number.map(function(num){
    return num;
})

console.log(store_number);

// map  method using arrow function

const  store = number.map((num)=>{
    return num;
})

console.log(store);

// foEach 
 number.forEach(function(num){
    console.log(num);
})

console.log("\n");

// forEach using arrow funtion

number.forEach((num)=>{
    console.log(num*2);
})

// filter using normal funtion

const find = number.filter(function(num){
    return num > 3;
})

console.log(find);

//filter using arrow funtion

const find_again = number.filter((num)=>{
    return num < 5 ;
})

console.log(find_again);

// find method, find element using normal function
const check_double = [1,2,3,2,4,2,1];

const given_data = check_double.find(function(element){
    return element === 2;
})
console.log(given_data);

// find method, find element using arrow function

const find_data = check_double.find((elements)=>{
    return elements === 1 ;
})

console.log(find_data);










