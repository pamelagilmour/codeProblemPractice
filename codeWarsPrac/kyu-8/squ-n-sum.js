// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9

function squareSum(numbers) {
    
    // let squ = 0;
    let sum = 0;

    // for (let i = 0; i < numbers.length; i++) {
    //     sum += numbers[i]**2;
    // }

    

    numbers.forEach((element) => {
        // sum += numbers[element]**2
        return numbers[element];
    } );

    // return sum;

}

// tests
console.log(squareSum([1,2])); // 5
console.log(squareSum([0, 3, 4, 5])); //50
console.log(squareSum([])); //0

// This was what I was trying to do:
// function squareSum(numbers){
//   var sum = 0;
//   numbers.forEach(function(n) {
//     sum += n * n
//   });
//   return sum;
// }

//  Most ppl used reduce method:
// function squareSum(numbers) {
// 	return numbers.reduce((sum, num) => sum + num * num, 0);
// }