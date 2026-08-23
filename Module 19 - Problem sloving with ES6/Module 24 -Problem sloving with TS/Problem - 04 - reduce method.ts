interface Items {
    name : string,
    price : number,
}

const calculateOrderTotal = (items : Items[])=>{
    // let total = 0;
    // for( let item of items){    
    //     total += item.price;
    // }
    // return total;

    const total:Number = items.reduce((acc :number ,curr :Items)=>acc + curr.price,0)
    return total;

}


console.log(calculateOrderTotal([{name:"Burger",price:250},{name:"Fries",price:90},{name:"Soda",price:60}]));