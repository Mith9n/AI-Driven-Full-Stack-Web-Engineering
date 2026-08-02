const numbers = [10,20,30,40,50];

const [first , second , third, forth, fifth,] = numbers;

console.log(first,fifth);


const student_01 = {
    Name : "Ayon",
    Age : 23,
    Id : 12121
}

const {Age,Id,Name} = student_01;

console.log(Age);


const student_02 ={
    name : "Rahim",
    Age : 25,
        marks : {
            math : 70,
            english : 67,
            bangla : 90
        },
        Option : {
            higher_math : 76 
        }
}

const {name, age,marks:{marks,english,bangla},Option:{higher_math}} = student_02;

console.log(name , higher_math);