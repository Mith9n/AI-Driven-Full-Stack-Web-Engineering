let student = {
    name : "Alex",
    age : 21,
    blood : "B+",
    section : "sky",
    department : "CS"
}

// For in 
for(let key in student){
    console.log(key,":", student[key]);
}

// using keys method 

let obj_keys = Object.keys(student);
console.log(obj_keys);

for( let i = 0 ; i < obj_keys.length ;i++){
    console.log(obj_keys[i]," : ",student[obj_keys[i]]);
}