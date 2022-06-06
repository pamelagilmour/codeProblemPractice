// Day 5
// class SmallestIntegerFinder {
function findSmallestInt(args) {
		//     Given an array of integers your solution should find the smallest integer.
		let smallestInt = 0;
		for (let i = 0; i < args.length; i++) {
			if (args[i] < args[i + 1]) {
				
			}
		}
		return smallestInt;
	}
// }

const arg1 = [34, 15, 88, 2];
console.log(findSmallestInt(arg1));
// Day 4
//RPS
// const playchoices = ['rock', 'paper', 'scissors'];

// // const rps = (p1, p2) => {
// 	let counter = Math.floor(Math.random() * 3);

// 	// let player1 = playchoices[counter];
// 	console.log(counter);
// // };







// rps()


























// Day 3

// Title: "Total Amount of Points"

// Instructions:

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

//     if x > y: 3 points
//     if x < y: 0 point
//     if x = y: 1 point

// Notes:

//     there are 10 matches in the championship
//     0 <= x <= 4
//     0 <= y <= 4

// My Solution:
// let games = ["3:1", "2:2", "0:1"];

// function points(games) {
// 	let convertIndexX = [];
// 	let convertIndexY = [];
// //   For each item in the array,
// 	for (let i = 0; i < games.length; i++) {
// 		// parseInt(games[i]).push;
// 		console.log(games[i]);
// 		// console.log(Number.parseInt(games[i]));

// 	}

// }

// points(games)



// Title: ...Reverse order?
//Instructions:
// My Solution:

//Solutions I liked:


// const reverseSeq = n => {
//   return Array(n).fill(0).map((e, i) => n - i );
// };

// const reverseSeq = length => Array.from({length}, () => length--)

// const reverseSeq = num => {
//   return new Array(num)
//       .fill()
//       .map((d, i) => i + 1)
//       .reverse()
// };

// const reverseSeq = n => {
//   if (n<2) return [n]
//   return [n].concat(reverseSeq(n-1));
// };

// const reverseSeq = n => [...Array(n)].map((_, i) => n - i);

// const reverseSeq = (n) => {
// 	let arr = [];

// 	while (n > 0) {
// 		arr.push(n);
// 		n--;
// 	}
// 	return arr;
// };



// Day 1

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

// function makeNegative(num) {
// 	// Code?
// 	if (num > 0) {
// 		return (num = num * -1);
// 	}
// }

// makeNegative(42)

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
