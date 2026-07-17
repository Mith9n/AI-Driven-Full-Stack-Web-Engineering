let amount = 3500;
let member = false;

if (amount >= 3000) {

    if (member) {
        console.log("Discount: 25%");
        console.log("Final Price:", amount - amount * .25);
    } else {
        console.log("Discount: 20%");
        console.log("Final Price:", amount - amount * .20);
    }

} else {

    console.log("No Discount");

}