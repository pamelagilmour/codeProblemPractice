// Instructions
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Notes

//     - The number can be negative already, in which case no change is required.
//     - Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// Tags: #Fundamentals #Numbers

// My Solution

function makeNegative(num) {
	// Code?
	if (num > 0) {
		return (num = num * -1);
	}
}

makeNegative(42)

// Sample Tests

// describe('Tests', () => {
// 	it('test', () => {
// 		Test.assertEquals(makeNegative(42), -42);
// 	});
// });

// Other Solutions that I liked

// One of my first attempts looked like this, but I forgot to add 'return' keyword

// function makeNegative(num) {
// 	return -Math.abs(num);
// }

// const makeNegative = (num) => -Math.abs(num)

// More concise than my solution

// function makeNegative(num) {
// 	return num < 0 ? num : -num;
// }

// makeNegative = (n) => -Math.abs(n);

// function makeNegative(num) {
// 	if (num > 0) {
// 		return -num;
// 	} else {
// 		return num;
// 	}
// }