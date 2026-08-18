/*
name 
email
age
marks
*/

class Students{
    name : string ;
    email : string ;
    age : number ;
    marks : number ;

    constructor(name:string , email:string , age:number , marks:number){
        this.name = name;
        this.email = email;
        this.age = age;
        this.marks = marks;
        
    }

}
// instance and new students is instantiate
const student_01 = new Students("Maruf", "maruf@example.com", 21, 85);
console.log(student_01);

