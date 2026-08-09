// Find 
const user_informations = (user , id)=>{
    const find_id = user.find ((users)=>{
        return (users.id === id);
    });
     return find_id;
}

const users = [
    { id: 101, name: "Maruf" },
    { id: 102, name: "Akash" },
    { id: 103, name: "Rahim" },
    { id: 104, name: "Karim" },
    { id: 105, name: "Sakib" }
];

console.log(user_informations(users));