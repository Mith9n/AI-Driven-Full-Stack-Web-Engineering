function colorArray(){
    return ["red","blue","pink","white","purple"];
}

let colors = colorArray();
console.log(colors);


function students(){
    return{
        name :"Maruf",
        ID :12321
    }
}

let info = students();
console.log(info.name , info.ID);


function Calculated (num1, num2){
    let sum = num1 + num2 ;
    let sub = num1 - num2;
    let mul = num1 * num2;
    let div = num1 / num2;

    return [sum, sub, mul, div];
}

let calculations = Calculated(20,10);
console.log(calculations);

