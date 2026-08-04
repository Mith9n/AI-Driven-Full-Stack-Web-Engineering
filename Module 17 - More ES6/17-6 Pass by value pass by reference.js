let number = 12 ;

// pass by value
function the_number(num){
    num = 15;
    console.log(num);

}

the_number(number);
console.log(number);

// pass by reference 

let array = [12,13,14,15];

function the_array(values){

    values[1]=33;

    for( let i of values){
        console.log(i);
    }

}

the_array(array);

for( let i of array){
        console.log(i);
}



const student = {
    name : "Bithi tithi",
    age : 22,
    dep : "CSE"
}

function student_informations(student){
    student.name = "Pthila";
    console.log(student);
}




student_informations(...student);
console.log(student);
