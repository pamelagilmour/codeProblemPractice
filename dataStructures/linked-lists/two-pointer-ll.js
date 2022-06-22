// This is not the most efficient approach:
// const arrayNthLast = (list, n) => {
//   const linkedListArray = [];
//   let currentNode = list.removeHead();
//   while (currentNode) {
//     linkedListArray.push(currentNode);
//     currentNode = currentNode.getNextNode();
//   }
//   return list[list.length - n];
// }

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}

	setNextNode(node) {
		if (node instanceof Node || node === null) {
			this.next = node;
		} else {
			throw new Error('Next node must be a member of the Node class.');
		}
	}

	getNextNode() {
		return this.next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	addToHead(data) {
		const newHead = new Node(data);
		const currentHead = this.head;
		this.head = newHead;
		if (currentHead) {
			this.head.setNextNode(currentHead);
		}
	}

	addToTail(data) {
		let tail = this.head;
		if (!tail) {
			this.head = new Node(data);
		} else {
			while (tail.getNextNode() !== null) {
				tail = tail.getNextNode();
			}
			tail.setNextNode(new Node(data));
		}
	}

	removeHead() {
		const removedHead = this.head;
		if (!removedHead) {
			return;
		}
		this.head = removedHead.getNextNode();
		return removedHead.data;
	}

	printList() {
		let currentNode = this.head;
		let output = '<head> ';
		while (currentNode !== null) {
			output += currentNode.data + ' ';
			currentNode = currentNode.getNextNode();
		}
		output += '<tail>';
		console.log(output);
	}
}

//pseudocode:
// nthLastNodePointer = null
// tailPointer = linked list head
// count = 0

// while tail pointer exists
//   move tail pointer forward
//   if count >= n
//     set nthLastNodePointer to head if it's still null or move it forward
//   increment count

// return nthLastNodePointer






// Implementation:
// Complete the nthLastNode() function so that it returns the correct Node instance (or null if the linkedList is shorter than n elements). Do this without creating any additional new data structures (such as an array).

// You can use the testLinkedList to experiment yourself. It contains a 50-length linked list with data values from 50 -> 49 -> ... 2 -> 1

const LinkedList = require('./LinkedList');
const testLinkedList = require('./testLinkedList.js');
// Complete this function
// Complete the nthLastNode() function so that it returns the correct Node instance (or null if the linkedList is shorter than n elements).
const nthLastNode = (linkedList, n) => {
	let nthLastNodePointer = null;
	let tailPointer = linkedList.head;
	let count = 0;

	while (tailPointer) {
		// exists
		//   move tail pointer forward
		tailPointer = tailPointer.next;
		if (count >= n) {
			//     set nthLastNodePointer to head if it's still null or move it forward
			if (!nthLastNodePointer) {
				nthLastNodePointer = linkedList.head;
			}
			nthLastNodePointer = nthLastNodePointer.next;
		}
		count++;
	}
	return nthLastNodePointer;
};

nthLastNode();

//Solution:
// const nthLastNode = (linkedList, n) => {
// 	let current = null;
// 	let tailSeeker = linkedList.head;
// 	let count = 0;
// 	while (tailSeeker) {
// 		tailSeeker = tailSeeker.next;
// 		if (count >= n) {
// 			if (!current) {
// 				current = linkedList.head;
// 			}
// 			current = current.next;
// 		}
// 		count++;
// 	}
// 	return current;
// };