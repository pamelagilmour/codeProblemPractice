// Example 1 illustrates a function that calculates a factorial

const iterativeFactorial = (n) => {
  let result = 1;
  while(n > 0) {
    result *= n;
    n -= 1;
  }
  return result;
}

// Set fourFactorial
const fourFactorial = iterativeFactorial(4)
// console.log(fourFactorial)







// Recursion is a computational approach where a function calls itself from within its body.

// Example 2 
const recursiveFactorial = (n) => {

  if (n === 0) { // base case
    
    return 1;
  
    } else if (n > 0) { //recursive case
    
    // console.log(`Execution context: ${n}`);
    return n * recursiveFactorial(n - 1);

    }
}

const recursiveSolution = recursiveFactorial(4);
// console.log(recursiveSolution);


//If you don't include a base case, stack over flow will occur due to an infinite loop.