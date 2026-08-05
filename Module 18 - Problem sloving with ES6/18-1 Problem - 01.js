// Problem - 01

var status = "Oder placed";

for(var i = 0; i < 3 ;i++){
    var status = "Processing items : " + i ;
    console.log(status);
}

console.log(status);

// Problem - 02 

function recipt_generator (Product_name , price , quantity){
    return `${Product_name} x${quantity} price : ${price*quantity}`;

}


console.log(recipt_generator("Pen",10,5));
console.log(recipt_generator("Paper",40,3));


