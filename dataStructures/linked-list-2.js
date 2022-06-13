// What would you add to the .removeHead() method to properly maintain the linked list when removing a node?

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
 
  setNextNode(node) {/* Sets the next node */}
 
  getNextNode() {/* Gets the next node */}
}
 
class LinkedList {
  constructor() {
    this.head = null;
  }
 
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    if (removedHead.getNextNode() !== null) {
      this.head = removedHead.getNextNode();
    }
    return removedHead.data;
  }
}