// spread operator 

let array = [1,2,3,4,5,6,7];

// let max_find = Math.max(array);  NaN
let max_find = Math.max(...array);
console.log(max_find);
console.log(...array);


// update numbers 

let number_01 = [1,2,3,4,5,6,7];
let number_02 = number_01 ;
number_01.push(8);

console.log(number_02);

let students_section_01 = {
    name : "Maruf",
    age : 22 ,
    cgpa : 4.67
}

// let students_section_02 = students_section_01;
// students_section_02.Id = 128211;

let students_section_02 ={...students_section_01 , Id : 128412};

console.log(students_section_01);
console.log(students_section_02);


// rest operator 

function do_someting (...values){
    let sum  = 0 ;

    for(let elements of values){
        sum += elements ;
    }
    return sum ;
}

console.log(do_someting(10,12,14,15));

