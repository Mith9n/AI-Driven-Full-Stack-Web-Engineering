let amount = 4500;

console.log("Total Purchase:", amount);

if (amount >= 5000) {
    console.log("Discount: 30%");
    console.log("You Save:", amount * .30);
    console.log("Final Price:", amount - amount * .30);

} else if (amount >= 3000) {
    console.log("Discount: 20%");
    console.log("You Save:", amount * .20);
    console.log("Final Price:", amount - amount * .20);

} else if (amount >= 2000) {
    console.log("Discount: 15%");
    console.log("You Save:", amount * .15);
    console.log("Final Price:", amount - amount * .15);

} else if (amount >= 1000) {
    console.log("Discount: 10%");
    console.log("You Save:", amount * .10);
    console.log("Final Price:", amount - amount * .10);

} else {
    console.log("No Discount");
    console.log("Final Price:", amount);
}