// Sum of Avg of an array 
 
function Sum_of_avg(array){

    let total_values = array.length;
     let sum = 0;

    for(let i = 0 ;i< array.length;i++){
       sum+=array[i];
    }

    let avg = sum/total_values;
    return avg;

}

let array = [10,11,12,13,14,15];
console.log(Sum_of_avg(array));

//  filter the number  

function filter_the_number(arr,target){
    let new_arr = [];

    for(let i = 0 ; i < arr.length ; i++){
         if( arr[i] > target){
            new_arr.push(arr[i]);
         }
    }
   console.log(new_arr);
}

let arr = [10,11,12,13,14,15];
let target = 13;
filter_the_number(arr,target);



//  ass , dis 

function filter_Ass_des(arry,tar){
    let up_arr = [];
    let down_arr = [];

    for(let i = 0 ; i < arry.length ; i++){
         if( arr[i] > tar){
            up_arr.push(arry[i]);
         }else down_arr.push(arry[i]);
    }

    return {
        up : up_arr,
        down : down_arr
    }
}

let arry = [10,11,12,13,14,15];
let tar = 13;
console.log(filter_Ass_des(arry,tar));

