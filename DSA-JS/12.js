// Implement a queue using an array.

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

// Lets Check
let queue = new Queue();
queue.enqueue(4);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.front());
