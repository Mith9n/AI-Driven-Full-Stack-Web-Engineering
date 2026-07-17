let marks = 85;
let attendance = 80;
let assignment = true;

if (marks >= 80) {

    if (attendance >= 75 && assignment) {
        console.log("Grade: A+");
        console.log("Congratulations! You passed with honors.");
    } else {
        console.log("Grade: A");
        console.log("Good marks, but improve attendance or submit assignments.");
    }

} else if (marks >= 70) {

    if (attendance >= 75) {
        console.log("Grade: A");
    } else {
        console.log("Grade: A-");
    }

} else if (marks >= 60) {

    console.log("Grade: B");

} else if (marks >= 40) {

    console.log("Grade: C (Pass)");

} else {

    console.log("Fail");
}