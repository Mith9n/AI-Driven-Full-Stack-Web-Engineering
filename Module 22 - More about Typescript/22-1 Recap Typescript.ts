const numbers:number[] = [1,2,3,4,5,6,7,8,9] ;

for ( let num of numbers){
    console.log(num);
}


const students : {
    name: string;
    age: number;
    isActive: boolean;
} = {
    name:"Rakib",
    age:20,
    isActive:true  
}


for(let key in students){
    console.log(key, students[key as keyof typeof students]);
}


const female_students : {
    name: string;
    age: number;
    id: number;
    department: {
        name: string;
    }
}= {
    name:"Rina",
    age:22,
    id: 101,
    department:{
        name:"CSE",
    }
}

for(let key in female_students){
    console.log(key, female_students[key as keyof typeof female_students]);
}

