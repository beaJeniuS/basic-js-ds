const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  #StackArr = []
  push(element) {
    //throw new NotImplementedError('Not implemented');
    this.#StackArr.push(element)
  }

  pop() {
    //throw new NotImplementedError('Not implemented');
    let el = this.#StackArr[this.#StackArr.length - 1]
    this.#StackArr.pop()
    return el
  }

  peek() {
    //throw new NotImplementedError('Not implemented');
    return this.#StackArr[this.#StackArr.length-1]
  }
}

module.exports = {
  Stack
};
