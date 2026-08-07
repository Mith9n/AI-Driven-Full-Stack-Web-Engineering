// Add grade to each student result 
//  Example [{Name : "Shawon" , marks : 83 , grad :A}]

const addGrade = (students_data)=>{
    for(let student of students_data){
        if(student.marks >=90){
            student.grade = "A+"
        }
        else if(student.marks >=80){
            student.grade = "A"
        }
        else if(student.marks >=70){
            student.grade = "A-"
        }
        if(student.marks >=60){
            student.grade = "B"
        }else student.grade = "F";
    }

    return students_data ;
}

console.log(addGrade([
    { name: "Shawon", marks: 83 },
    { name: "Maruf", marks: 72 },
    { name: "Akash", marks: 91 },
    { name: "Rafi", marks: 58 }
]));


// cart total calculator 

const products = [
    { name: "pen", price: 10, quantity: 2 },
    { name: "paper", price: 30, quantity: 5 },
    { name: "notebook", price: 80, quantity: 3 },
    { name: "pencil", price: 15, quantity: 4 },
    { name: "eraser", price: 10, quantity: 6 }
];


const calculate_the_purchase_items = (products) =>{
    let quantitys = 0 ;
    let total_price = 0;
    for( let i = 0; i < products.length ; i++){
        quantitys += products[i].quantity;
        total_price += products[i].price * products[i];
    } 

    return `Total : ${quantitys} items , ${total_price} Taka`;
} 

console.log(calculate_the_purchase_items(products));


