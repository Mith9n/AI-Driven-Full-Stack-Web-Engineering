const getSignalStatus = (parcentange : number)=>{
        if(parcentange >= 0  && parcentange <= 25){
            return "Poor";
        }
        else if(parcentange >= 26  && parcentange <= 55){
            return "Fair";
        }
        else if(parcentange >= 56  && parcentange <= 85){
            return "Good";
        } 

        return "Excellent";
    
}


console.log(getSignalStatus(15));
console.log(getSignalStatus(40));
console.log(getSignalStatus(70));
console.log(getSignalStatus(95));
