class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = -1;
    this.maxSize = 10; // example maximum size
  }

  enqueue(item) {
    if (!this.isFull()) {
      this.queue[++this.rear] = item;
    } else {
      console.log("Queue is full");
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const dequeuedItem = this.queue[this.front];
    delete this.queue[this.front++];
    return dequeuedItem;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.queue[this.front];
  }

  isEmpty() {
    return this.front > this.rear;
  }

  getSize() {
    return this.rear - this.front + 1;
  }

  isFull() {
    return this.getSize() >= this.maxSize;
  }

  print() {
    console.log(this.queue.slice(this.front, this.rear + 1));
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log("Queue size:", queue.getSize());
console.log("First item:", queue.peek());
queue.dequeue();
console.log("Last item:", queue.peek());
queue.print();


class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  peeklast() {
    return this.peek();
  }

  peekfirst() {
    return this.stack[0];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  length() {
    return this.stack.length;
  }

  isempty() {
    return this.isEmpty();
  }

  print() {
    console.log(this.stack);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log("Stack size:", stack.length());
console.log("First item:", stack.peekfirst());
console.log("Last item:", stack.peeklast());
stack.pop();
stack.print();
