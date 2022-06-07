class Stack {
    #stack = [];
    constructor(initialList){
        if(initialList) this.#stack = initialList;
    }

    push(item){
        this.#stack.push(item);
        
    }

    pop(){
        return this.#stack.shift();
    }

    peek(){
        return this.#stack[0];

    }

    get showList(){
        console.log('showlist', this.#stack.toString());
    }
}


class Queue {

}

module.exports = { Stack, Queue };
