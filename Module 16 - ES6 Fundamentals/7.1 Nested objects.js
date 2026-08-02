const student_info = {
    name : "Maruf",
    age : 22,
        university :{
            Uni_name : "GUB",
            student_Id :120909
        },
            uni_location :{
                location : "Gazipur",
                street : "TNT"
            },
                uni_departments :{
                    Dep1 : "CSE",
                    Dep2 : "EEE",
                    Dep3 : "BBA"
                }

 }

//  console.log(student_info);

 for(let key in student_info){
    if(typeof(student_info[key]) === "object"){
        for(let subkey in student_info[key]){
            console.log(student_info[key][subkey]);
        }
    }else console.log(student_info[key]);
 }
