// Reverse String (Neymar jr);

let name = "Brazil";
let reverse = "";
for(let i = name.length - 1 ; i >= 0 ; i--){
    console.log(name[i]);
    let letter  = name[i];
   reverse +=letter;
}

console.log(reverse);


// vowels and consonents

function check_vowels(letter) {
    let vowels = "aeiou";
    let v_count = 0;
    let c_count = 0;

    for (let i = 0; i < letter.length; i++) {
        let ch = letter[i].toLowerCase();

        if (ch >= "a" && ch <= "z") { 
            if (vowels.includes(ch)) {
                v_count++;
            } else {
                c_count++;
            }
        }
    }

    return {  
        vowels: v_count,
        consonants: c_count
    };
}

console.log(check_vowels("JavaScript is Awesome"));
