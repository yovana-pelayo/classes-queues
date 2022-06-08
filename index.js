class Stack {
  #Stack = [];
  constructor(animal) {
    if (animal) {
      this.#Stack = animal;
    }
  }
  //methods

  push(item) {
    this.#Stack.push(item);
  }

  pop() {
    this.#Stack.shift();
  }

  peek() {
    this.#Stack[0];
  }
  // properties
}

class Queue {}

module.exports = { Stack, Queue };
