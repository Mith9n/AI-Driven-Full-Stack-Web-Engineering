// shopping
const shoping_from_mall = (oder_of_amount , shipping_fee = 60)=>{
return (oder_of_amount >= 1000) ? "Free Shopping" : `Shipping fee : ${shipping_fee}`;

}

console.log(shoping_from_mall(1200));

// grading system

const get_grade = (sub_num) =>{
    if(typeof sub_num != "number" || sub_num < 0 ){
        return "Invalid result";
    }
    else if (sub_num >= 90){
        return "A+";
    }else if (sub_num >= 80){
        return "A"
    }else if(sub_num >=70){
        return "A-"
    }else {
        return "Fail";
    }
}

console.log(get_grade(-2));



