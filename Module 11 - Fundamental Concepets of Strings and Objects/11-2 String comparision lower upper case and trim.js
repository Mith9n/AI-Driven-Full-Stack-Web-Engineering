// String comparison 

const gmail = "Maruf@gmail.com";
const password = 257410;

if ( gmail.toLocaleLowerCase() === "Maruf@gmail.com".toLocaleLowerCase()  && password === 257410){
    console.log("Login successful!");
}else console.log("Invalid email or password.");


let text = "  Hello World ";

//Uppercase Lowercase 
console.log(text.toUpperCase());
console.log(text.toLocaleLowerCase());

//trim
console.log(text.trim());
console.log(text.trimStart());
console.log(text.trimEnd());
