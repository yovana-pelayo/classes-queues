class Stack {
  #Stack = [];
  constructor(animal) {
    if (animal) {
      this.#Stack = animal;
    }
  }
}

class Queue {}

module.exports = { Stack, Queue };
