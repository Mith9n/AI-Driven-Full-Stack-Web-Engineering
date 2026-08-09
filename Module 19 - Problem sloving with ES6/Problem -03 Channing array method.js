

const Filter_cart_total_values = (shopping_cart, minimum_price)=>{

    /*let total_prices = 0 ;
    for( let i = 0 ; i < shopping_cart.length ; i++){
        if(shopping_cart[i].price >= minimum_price){
            total_prices += shopping_cart[i].quantity * shopping_cart[i].price ;
        }
    }   
    return total_prices ;*/

    return shopping_cart
        .filter((product) => {
            return product.price >= minimum_price;
        })
        .map((product) => {
            return product.quantity * product.price;
        })
        .reduce((total, price) => {
            return total + price;
        }, 0);
    
};

const shopping_cart = [
    { name: "Laptop", price: 550, quantity: 1 },
    { name: "Mouse", price: 800, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 },
    { name: "Headphone", price: 2500, quantity: 2 },
    { name: "USB Cable", price: 300, quantity: 3 }
];

let minimum_price = 500;

console.log(Filter_cart_total_values(shopping_cart,minimum_price));
