// Let us begin with an example:

// Take a number: 56789. Rotate left, you get 67895.

//  56789 becomes 67895 √


// Keep the first digit in place and rotate left the other digits: 68957.

// 67895 becomes 68957 


// Keep the first two digits in place and rotate the other ones: 68579.

// 68957 becomes 68579


// Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.

// 68597


// You have the following sequence of numbers:

// 56789 -> 67895 -> 68957 -> 68579 -> 68597

// and you must return the greatest: 68957.


// Task

// Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.

// So max_rot (or maxRot or ... depending on the language) is such as:

//     max_rot(56789) should return 68957

//     max_rot(38458215) should return 85821534

https://github.com/Automedon/CodeWars-7-kyu-Soluitions/blob/master/Rotate%20for%20a%20Max
function maxRot(n) {

    let val = String(n);
    let headArrs = [];
    let tailArrs = [];

    // let count = val.length;
    // console.log(val, count);

    for(let i = 0; i < val.length; i++){
        console.log(val[i]);
        console.log(val.slice(i))

    }








   


}

maxRot(56789);
// maxRot(38458215);

// function maxRot(n) {
    // var str = n.toString();
    // var arr = [str];
    // for (var i=0;i<=str.length-1 ;i++){
    //     str = str.slice(0,i) + str.slice(i+1) + str[i];
    //     arr.push(str.split().join());
    // }
    // return Math.max.apply(null, arr);
// }