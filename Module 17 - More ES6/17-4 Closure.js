function creat_counter (){
    let counter = 0 ;

    return function(){
        counter ++;
        return counter ;
    }
}

let count = creat_counter()
console.log(count());
console.log(count());
console.log(count()); 


function cash_counter (){
    let amount = 0 ;

    return function (payable_amount){
        amount += payable_amount;
        return [
            Amount_pay = payable_amount,
            total_amount = amount
         ] ;
    };
}

// coffee
let coffee_shope = cash_counter();
console.log("coffee_shope",coffee_shope(100));
console.log("coffee_shope",coffee_shope(150));
console.log("coffee_shope",coffee_shope(120));

// flower 

let flower_shop = cash_counter();
console.log("flower_shop",flower_shop(200));
console.log("flower_shop",flower_shop(100));
console.log("flower_shop",flower_shop(500));

