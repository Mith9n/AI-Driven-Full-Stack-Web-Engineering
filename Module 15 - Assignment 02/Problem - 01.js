function matchWinner(teamAGoals, teamBGoals) {
    if (typeof (teamAGoals) !== "number" || typeof (teamBGoals) !== "number"  || teamAGoals < 0 || teamBGoals < 0) {
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
    }
    else return "Invalid";
}

console.log(matchWinner( 1, 2));