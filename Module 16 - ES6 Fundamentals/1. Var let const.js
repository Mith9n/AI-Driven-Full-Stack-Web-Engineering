//  function of var , let , const

function test() {
    var a = 5;
    let b = 10;
    const c = 15;

    // return {
    //     a : a,
    //     b : b,
    //     c : c
    // }

    return c ;
}

console.log(test());

if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); // ✅ 10
console.log(b); // ❌ Error
console.log(c); // ❌ Error