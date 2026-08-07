// distructure 

const resoponse_extector = (obj) =>{
    const {user} = obj;
    return user;
}

console.log(resoponse_extector({user :{name : "Maruf" , age : "22"}}))

// swap 2 number 

let a = 10 ;
let b = 20 ;
let temp ;

// temp = a ;
// a = b;
// b = temp;

[b,a] = [a,b];

console.log(a,b);

let numbers = [10,20,30,40,50];
let [first , second , ...rest] = numbers ;
console.log(first,second,rest);