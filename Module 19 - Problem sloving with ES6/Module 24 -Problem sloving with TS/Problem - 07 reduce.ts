interface Distances{
    total : number;
    average : number ;
}

const getDistanceSummary =(distances : number[]): Distances =>{
    /* let total_dis = 0 ;
    for(let dis of distances){
        total_dis += dis;
    }

    let avg_dis = total_dis / distances.length;

    return {
        total : total_dis,
        average : avg_dis
    }*/


    const total = distances.reduce((acc,curr)=>acc+curr,0);
    const average = total / distances.length;

    return {
        total,
        average
    }
}

console.log(getDistanceSummary([4, 6, 5, 9]));
console.log(getDistanceSummary([]));


