const LinkedList = require('./LinkedList');

class Stack {
	constructor(maxSize = Infinity) {
		this.stack = new LinkedList();
		this.maxSize = maxSize;
		this.size = 0;
	}

	hasRoom() {
		if (this.size < this.maxSize) {
			return true;
		} else {
			return false;
		}
	}

	isEmpty() {
		if (this.size === 0) {
			return true;
		} else {
			return false;
		}
	}

	push(value) {
		if (this.hasRoom()) {
			this.stack.addToHead(value);
			this.size++;
		} else {
			throw new Error('Stack is full');
		}
	}

	pop() {
		if (!this.isEmpty()) {
			const value = this.stack.removeHead();
			this.size--;
			return value;
		} else {
			console.log('Stack is empty!');
		}
	}

	peek() {
		if (!this.isEmpty()) {
			return this.stack.head.data;
		} else {
			return null;
		}
	}
}

module.exports = Stack;
