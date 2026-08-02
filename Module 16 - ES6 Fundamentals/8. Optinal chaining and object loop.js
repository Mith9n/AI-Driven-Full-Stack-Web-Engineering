const  company = {
    Name : "Bitbyte",
    company_type : "Tech",
    company_size : "50 - 70 memebers",
    stb_date  : "01 - 05 - 2013",
    //  sub_company ={
    //         Name : "cowcoders",
    //         company_type : "AI",
    //         company_size : "15 - 20 member"
    // }
}

//access property using [ breaket ] notation
const key = 'company_type';
console.log(company[key]);
console.log(company.Name);


// optional chainnig




// object loop 

for(let key in company){
    if(typeof(key) === "object"){
        for(let subkey in company[key]){
            console.log(company[subkey]);
        }
    }else console.log(company[key]);
}




