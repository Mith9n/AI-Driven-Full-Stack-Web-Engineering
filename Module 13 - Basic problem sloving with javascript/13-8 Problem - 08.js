

const student = {
    Name: "Maruf",
    Age: 22,
    University: "GUB",
    department: "CSE"
}


function students_class(student) {
    for (let key in student) {
        console.log(key);

    }

    for (let key in student) {
        console.log(student[key]);

    }

    for (let key in student) {
        console.log(key, ":", student[key]);

    }
    
    let obj_key_count = Object.keys(student).length;
    console.log("Total Properties :",obj_key_count);

    // important

    let has_email = Object.hasOwn(student,"email");
    console.log(has_email);

    let has_name = student.hasOwnProperty("Name");
    console.log(has_name);
}

students_class(student);