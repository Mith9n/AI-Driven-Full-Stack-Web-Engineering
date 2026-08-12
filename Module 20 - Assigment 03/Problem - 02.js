function filterActiveUsers(users) {

    if(Array.isArray(users) === false || users.length === 0){
        return "Invalid";
    }

    for(let user of users){

// property check  - 01 
/*
if(user.hasOwnProperty("isActive") === false){
    return "Invalid";
}*/


// property check -02

/*if(Object.hasOwn(user, "isActive") === false){
    return "Invalid";
}*/

    if(!("isActive" in user)){
            return "Invalid";
        }

    }

    const active_user = users.filter((user)=>{

        if(user.isActive === true){
            return true;
        }

    })

    return active_user;
}


const user_info = [
    {name: "A", isActive: true},
    {name: "B", isActive: false}
];

console.log(filterActiveUsers(user_info));