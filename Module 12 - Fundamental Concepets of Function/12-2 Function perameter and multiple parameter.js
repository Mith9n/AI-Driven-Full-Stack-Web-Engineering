function sayhello(name, number, bill_pay) {
    console.log(`Hello ${name}, Welcome to our programming club`);
    console.log(`Your ID number is: ${number}`);

    let discount = bill_pay * 0.10;
    let finalBill = bill_pay - discount;

    console.log(`Original Bill: ${bill_pay}`);
    console.log(`Discount: ${discount}`);
    console.log(`Final Bill: ${finalBill}`);
}

sayhello("Maruf", 128419, 350);