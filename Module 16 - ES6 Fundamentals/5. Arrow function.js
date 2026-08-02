const do_math = (...numbers) =>{
    let sum = 0 ;
    for(let elements of numbers){
        sum+=elements;
    }
    return sum ;
}

console.log(do_math(1,2,3,4,5,6,7,8,9,10));


const studentInfo = () => ({
    name: "Maruf",
    age: 22,
    department: "CSE",

    address: {
        village: "Kaliganj",
        district: "Dhaka",
        country: "Bangladesh"
    },

    result: {
        semester: "5th",
        cgpa: 3.85
    }
});

const student = studentInfo();
for( let key in student){
    if(typeof(student[key]) ==="object"){
        for (let subkeys in student[key]){
            console.log(student[key][subkeys]);
        }
    }else console.log(student[key]);
}

