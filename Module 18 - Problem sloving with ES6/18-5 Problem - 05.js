 /*Expancive product finder
object access using loop :- 
Object.keys(product)    // শুধু key
Object.values(product)  // শুধু value
Object.entries(product) // key + value*/


const get_product  = (product) =>{
     let Expancive = 0;
     let Expancive_product;
     for( let [key , value] of Object.entries(product)){ 
        if( Expancive < value){
            Expancive = value;
            Expancive_product = key;
        }
    }
    return {
        product : Expancive_product,
        Price : Expancive
    }
}

console.log(get_product({
    pen: 15,
    paper: 30,
    notebook: 80,
    pencil: 10
}));