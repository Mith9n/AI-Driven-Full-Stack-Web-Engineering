const reverse_array = <M>(arr :M[]):M[]=>{
    const Arr_reverse = arr.reverse();
    return Arr_reverse;
}


console.log(reverse_array([1,2,3,4,5,6,7,8,9,10]));
console.log(reverse_array(['a',3,4,2,'c',1,'b',5]));
console.log(reverse_array([1,2,true,3,'a',false,'b',true]));