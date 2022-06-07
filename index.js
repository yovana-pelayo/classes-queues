class Stack {
    #stack = [];
    constructor(initialList){
        if (initialList) this.#stack = initialList;
    }

    push(item){
        this.#stack.unshift(item); 
    }

    pop(){
        this.#stack.shift();
    }

    peek(){
        return this.#stack[this.#stack.length -1].toString();
    }

    get showList(){
        return this.#stack.toString();
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
