// Consider this problem:

// Find the middle node of a linked list.

//pseudocode of inefficient example:
// create array
// while the linked list has not been fully iterated through
//   push the current element onto array
//   move forward one node
// return array[length / 2]

//pseudocode, notice the fastPointer moves twice at each iteration
// fastPointer = list head
// slowPointer = list head
// while fastPointer is not null
//   move fastPointer forward
//   if the end of the list has not been reached
//     move fastPointer forward again
//     move slowPointer forward
// return slowPointer

// Code challenge:
// Complete the findMiddle() function and return the middle node of linkedList. 
// You can assume that the list has no cycles.

// Return the right-weighted middle for even-length lists. 
// For example, in a list of 4 elements, return the element at index 2 (which would be the element 3).

// Use generateTestLinkedList(length) to generate linked lists with data from 1 -> 2 -> .. -> length to test out your function. 
// For instance, generateTestLinkedList(4) results in 1 -> 2 -> 3 -> 4.

const generateTestLinkedList = require('./generateTestLinkedList');

const findMiddle = (linkedList) => {
    let fastPointer = listList.head;
    let slowPointer = listList.head;
    while (fastPointer != null) {
        fastPointer = fastPointer.next;
//   if the end of the list has not been reached
        if (fastPointer) {
			//     move fastPointer forward again
            fastPointer = fastPointer.next;
			//     move slowPointer forward
            slowPointer = slowPointer.next;
				}


    }

    return slowPointer

};

// Solutions & Alternatives:
// const findMiddle = (linkedList) => {
// 	let fast = linkedList.head;
// 	let slow = linkedList.head;

// 	// As long as the end of the list is not reached
// 	while (fast !== null) {
// 		// Move the fast pointer at least one step
// 		fast = fast.getNextNode();
// 		// If it isn't at the end of the list
// 		if (fast !== null) {
// 			// Move both pointers forward once
// 			fast = fast.getNextNode();
// 			slow = slow.getNextNode();
// 		}
// 	}
// 	// At this point, the slow pointer is in the middle
// 	return slow;
// };

// const findMiddleAlternate = (linkedList) => {
// 	let count = 0;
// 	let fast = linkedList.head;
// 	let slow = linkedList.head;

// 	while (fast !== null) {
// 		fast = fast.getNextNode();
// 		if (count % 2 !== 0) {
// 			slow = slow.getNextNode();
// 		}
// 		count++;
// 	}
// 	return slow;
// };



// Test your function yourself:
console.log(findMiddle(generateTestLinkedList(7)));

// Leave this so that we can test your code:
module.exports = findMiddle;
