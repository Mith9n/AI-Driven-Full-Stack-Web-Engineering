let student = {
    name : "Alex",
    age : 21,
    blood : "B+",
    section : "sky",
    department : "CS"
}


for(let key in student){
    console.log(key,":", student[key]);
}