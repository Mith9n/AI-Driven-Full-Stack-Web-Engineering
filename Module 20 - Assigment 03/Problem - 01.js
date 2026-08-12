function studentIntroduction(student) {

    if(typeof student !== "object" ||
             student === null ||
             !("name" in student) ||
             !("age" in student) ||
             !("age" in student) ||
             !("course" in student)){
        return "Invalid";
    }else{
        return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
    }
}
const student_info = {
  name: "Rafi",
  age: 18,
  course: "JavaScript"
}
console.log(studentIntroduction(student_info));