
let  fruts_name = `1. Apple , price : 240 tk
1. Banna , price : 120 tk
1. Orange , price : 230 tk`

console.log(fruts_name);



function shopping(money){
console.log(`
    Shirt :${money[0]}
    pent :${money[1]}
    watch :${money[2]}
    shoe :${money[3]} 
    Total :${money[0]+money[1]+money[2]+money[3]} 
    `)    
}
let money = [2400,3000,1300,1550];
shopping(money)