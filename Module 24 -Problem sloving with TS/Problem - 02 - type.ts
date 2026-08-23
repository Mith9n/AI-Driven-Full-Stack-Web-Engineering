type str = {
    name : string,
    movie : string,
    time : string,
}

const obj = (obj : str):string=>{
    
    return `"${obj.name}'s ticket is ${obj.movie} is confirmed at ${obj.time}."`;
}

 console.log(obj({ name: "Nabila", movie: "Interstellar", time: "9:15 PM" }));
 console.log(obj({ name: "Jamal", movie: "Inception", time: "6:00 PM" }));


 

