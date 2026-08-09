// problem 01 - Using map ;

const Apply_discount = (prices,discount)=>{
    const Items_prices = prices.map ((price)=>{
       return price - ( price * discount )/100;
    });
    return Items_prices;
}

console.log(Apply_discount([500,400,200],10));

// Problem 02 : Filter 

const students_result_data = (students , threshold) =>{
    let threshold_marks = students.filter((student)=>{
        return (student.marks >= 80); 
    })
    return threshold_marks;

}

const students = [
    { name: "Maruf", marks: 85 },
    { name: "Akash", marks: 72 },
    { name: "Rahim", marks: 91 },
    { name: "Karim", marks: 68 },
    { name: "Sakib", marks: 78 }
];

console.log(students_result_data(students));
