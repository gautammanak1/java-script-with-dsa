class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length === 0) return "Underflow";
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length == 0;
  }
}

//lets check
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(5);
console.log(stack.pop());
console.log(stack.peek());
