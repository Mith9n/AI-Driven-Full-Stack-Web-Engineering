function bonusScore(scores) {
    
    if(!Array.isArray(scores) || scores.length === 0 ){
        return "Invalid";
    }

    for( let score of scores){
        if (typeof sceore !== "number"){
            return "Invalid";
        }
    }

    const update_score = scores.map(score => score + 10);
    const total_score = update_score.reduce((acc, cur) => acc + cur , 0);
    return total_score ;
}

console.log(bonusScore([80,65,90,75]));