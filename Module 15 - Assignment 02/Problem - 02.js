function isElevatorSafe(weights) {
    if(Array.isArray(weights) === false){
        return "Invalid";
    }

    let total_weight = 0;
    for(let value of weights){
    total_weight +=value;
    }

    if(total_weight <= 400){
        return true;
    }else return false;
  
}

let weights = [];
console.log(isElevatorSafe(weights));
