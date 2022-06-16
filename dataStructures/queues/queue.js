const LinkedList = require('./LinkedList');

class Queue {
	constructor(maxSize = Infinity) {
		this.queue = new LinkedList();
		this.maxSize = maxSize;
		// This ensures that if we don’t specify a maximum size we’ll create an unbounded queue.
		// Because Infinity doesn’t have the same behavior as and is larger than other numbers, using it is useful as a default value where it acts as a threshold or ceiling we don’t want to pass.
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

	hasRoom() {
		return this.size < this.maxSize;
	}

	enqueue(data) {
		if (this.hasRoom()) {
			this.queue.addToTail(data);
			this.size++;
		} else {
			throw new Error('Queue is full!');
		}
	}

	dequeue() {
		if (!this.isEmpty()) {
			const data = this.queue.removeHead();
			this.size--;
			return data;
		} else {
			throw new Error('Queue is empty!');
		}
	}
}

module.exports = Queue;
