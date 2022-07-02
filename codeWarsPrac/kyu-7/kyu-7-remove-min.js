// Task

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.
// Examples

// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {

    if (numbers === null) {
        return numbers
        // return Array;
    }


    let min = numbers[0];

    for( let i = 0; i < numbers.length; i++) {
        
        // secondNum = numbers[i+1];
        if(numbers[i] < min) {
            min = numbers[i]
        }

    }
    
    let newArr = [];
    let mincount = 0;

    for( let i = 0; i < numbers.length; i++) {
        
        if (numbers[i] === min) {
            mincount++;
        }
        console.log("mincount is: ", mincount);

        if (mincount === 1) {
            if (numbers[i] !== min) {
            
                newArr.push(numbers[i])
            }
        // } else if(mincount > 1) {
            // if (mincount > 1 && numbers[i] !== min) {
                // newArr.push(numbers[i])
            // } else if(mincount > 1 && numbers[i] === min) {/
                // newArr.push(numbers[i])

            // }

        }
        

    }

    
    // return newArr

}

// removeSmallest([1, 2, 3, 4, 5])

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
console.log(removeSmallest([]));