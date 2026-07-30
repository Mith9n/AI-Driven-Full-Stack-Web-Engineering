//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
    if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
        return "Invalid";
    }
    else if (teamAGoals > teamBGoals) {
        return "Team A Won";
    }
    else if (teamAGoals < teamBGoals) {
        return "Team B Won";
    }
    else if (teamAGoals === teamBGoals) {
        return "Draw";
    } else return "Invalid";

}

//Problem-02: Elevator Weight Safety Checker
function isElevatorSafe(weights) {
    if (Array.isArray(weights) === false) {
        return "Invalid";
    }

    let total_weight = 0;

    for (let i = 0; i < weights.length; i++) {
        total_weight += weights[i];
    }

    return total_weight <= 400;

}

//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    if (typeof (tokensUsed) !== "number" || tokensUsed < 0) {
        return "Invalid";
    }

    if (tokensUsed <= 500) {
        return 0;
    }

    let Extra_tokens = tokensUsed - 500;
    let Extra_charge = Math.floor(Extra_tokens / 100);

    return Extra_charge * 5;
}

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {

    if (Array.isArray(restaurants) === false || restaurants.length === 0) {
        return "Invalid";
    }

    let Top_restaurent = restaurants[0];

    for (let i = 1; i < restaurants.length; i++) {
        if (restaurants[i].rating > Top_restaurent.rating) {
            Top_restaurent = restaurants[i];
        }
    }

    return Top_restaurent.name.toUpperCase();
}

//Problem-05: Debugging Challenge - API Response Time Monitor
function averageResponseTime(times) {
    if (Array.isArray(times) === false) {
        return "Invalid";
    }

    if (times.length === 0) {
        return "Invalid";
    }

    let total = 0;

    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== "number") {
            return "Invalid";
        }
        total += times[i];
    }

    return (total / times.length);
}

