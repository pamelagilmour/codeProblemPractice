// You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
// The value of d will always be 0 - 9.
// The value of x will always be greater than 0.

// You have to return as an array

// the count of these numbers,
// their sum
// and their product.

// For example:
// x = 11 d = 1 ->
// All the numbers that have x in it:  from 1 to 11, how many numbers have 1 in it? 

// Return: [3, 22, 110]

// 3 is the count of these numbers
// 22 is the sum of these numbers
// 110 is the product of these numbers

//Number methods:
// Could use .toString()

// If there are no numbers, which include the digit, return [0,0,0].

function numbersWithDigitInside(x, d) {
    
// return an array;
    let ansarr = []
// the count of the numbers
    let numcount = 0
// the sum 
    let sum = 0
// the product
    let product = 1

//   search 1 -> x for d
// d wil always be 0 -> 9
//  will always be more than 0
    let strX = x.toString()
    // console.log(typeof strX)
    let strD = d.toString()
    // console.log(strX)
    // console.log(strD)
    // console.log(strX.includes(strD))
    for (let i = 1; i < x+1; i++) {
        // console.log(x)
        console.log(i)
        // console.log()
        
    }
}

numbersWithDigitInside(11, 1)
// console.log(