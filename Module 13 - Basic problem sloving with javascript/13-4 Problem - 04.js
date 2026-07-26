// check a string palindrome or not 

let str = "Floccinaucinihilipilification";

let rev = "";

for(i = str.length - 1; i >= 0 ; i--){
   rev += str[i];
}
  

if (str === rev){
    console.log("Palindrome")
}else console.log("Not palindrome");
