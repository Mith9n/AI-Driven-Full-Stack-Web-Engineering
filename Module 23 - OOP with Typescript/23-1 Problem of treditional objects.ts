const creat_students = (name:string , roll : number , age :number ,department :string)=>{
    const studnets_data = {name , roll, age, department  };
    return studnets_data;
}

console.log(creat_students("Maruf", 19, 21, "CSE"));
console.log(creat_students("Shawon", 29, 21, "BBA"));
const sumon = creat_students("Sumon", 39, 21, "CE");
console.log(sumon);

