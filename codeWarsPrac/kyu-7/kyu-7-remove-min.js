// The museum of incredible dull things

// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.
// Examples

// * Input: [1,2,3,4,5], output= [2,3,4,5]

function removeSmallest(numbers) {
//   throw "TODO: removeSmallest";
    console.log('hello bitch')
    // let firstnum;
    // let secondnum;
    // let min;
    // for (let i = 0; i < numbers.length; i++) {
        // console.log(numbers[i])
        // if (numbers[i] < numbers[i+1]) {
        //     console.log(min);
            // console.log(numbers[i], numbers[i+1]);
            // console.log(numbers[i+1])
            // min = numbers[i]
        // }
    // }
    // console.log(min);
    // let newArr = [];

    // numbers.forEach((element) => {
    //     if(numbers[element] !== min) {
    //         newArr.push(numbers[element])
    //     }
    // })

    // return newArr
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
// console.log(removeSmallest([]));