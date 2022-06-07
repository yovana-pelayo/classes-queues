class Stack {
    #stack = [];
    constructor(initialList){
        if(initialList) this.#stack = initialList;
    }

    push(item){
        this.#stack.unshift(item); 
    }

    pop(){
        this.#stack.shift();
    }

    peek(){
        return this.#stack[this.#stack.length -1];
    }

    get showList(){
        return this.#stack
    }
}


class Queue {
 #queue = [];

 constructor(initialList){
     if(initalList) this.#queue = initialList;
 }

 enqueue(){
     return this
 }
}

module.exports = { Stack, Queue };
