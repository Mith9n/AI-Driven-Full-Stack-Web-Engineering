const user = {
    Name : "Maruf Hasan",
    Age : 23,
    Roll : 17,
    Id : 12679
}
// keys, values, entries 
const keys = Object.keys ( user);
const values = Object.values ( user);
const entries = Object.entries ( user);

console.log(keys,values,entries);

// delete 
delete user.Age ;
console.log(user);

const bank_account = {
    account_number : 12100001,
    account_balacne : 1500000,
}

// seal ( can update  , but cannot add and delete)
Object.seal(bank_account);
bank_account.account_balacne = 1600000;
console.log(bank_account);

// freeze  (cannot delete , update , add , nothing else)

const birth_certificate = {
    Name : "Tuulee",
    DOB : "07-07-2003",
    BP : "Gazipur"
}

Object.freeze(birth_certificate);

birth_certificate.Name = "Rumpa";
console.log(birth_certificate);