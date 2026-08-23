
const array = (number :number[]) :number=>{
        const total = number.reduce((acc,curr)=>(acc+curr),0);
        return total;

}

console.log(array([3000, 5200, 4100]));
console.log(array([7000, 6500]));
console.log(array([]));