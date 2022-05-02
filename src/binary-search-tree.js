const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  #root
  root() {
    //throw new NotImplementedError('Not implemented');
    if (!this.#root) {
      return null
    } else {
      return this.#root
    }
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    let newElement = new Node(data);
    
    if (!this.#root) {
      this.#root = newElement
    } else {
      this.addNode(this.#root, newElement)
    }
  }

  addNode(current, newElement) {
    if (newElement.data < current.data) {
      if (current.left === null) {
        current.left = newElement
      } else {
        this.addNode(current.left, newElement)
      }  
    } else {
      if (current.right === null) { 
        current.right = newElement
      } else {
        this.addNode(current.right, newElement)
      }
    }
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    let element = this.findElement(this.#root, data)
    if (element === null) {
      return false
    } else {
      return true
    }
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    let element = this.findElement(this.#root, data)
    if (element === null) {
      return null
    } else {
      return element
    }
  }

  findElement(element, data) {
    if (element === null) {
      return null
    } else if (data < element.data) {
      return this.findElement(element.left, data)
    } else if (data > element.data) {
      return this.findElement(element.right, data)
    } else {
      return element
    }
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    this.#root = this.removeElement(this.#root, data); 
  }

    minElement(element) {
    // если слева от узла ноль тогда это должен быть минимальный узел
    if (element.left === null)
      return element;
    else
      return this.minElement(element.left);    
  }

  removeElement(element, data) {
    if (element === null) {
      return null
    } else if (data < element.data) {
      element.left = this.removeElement(element.left, data)
      return element
    } else if (data > element.data) { 
      element.right = this.removeElement(element.right, data)
      return element      
    } else {
      if (element.left === null && element.right === null) {
          element = null;
          return element;
      }      
      if (element.left === null) {
          element = element.right;
          return element;
      } else if (element.right === null) {
          element = element.left;
          return element;
      }
      let newElement = this.minElement(element.right);
      element.data = newElement.data;
      element.right = this.removeElement(element.right, newElement.data);
      return element;
    }  
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    let current = this.#root
    let min = this.#root.data
    while (current) {
      min = current.data
      current = current.left
    }
    return min    
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    let current = this.#root
    let max = this.#root.data
    while (current) {
      max = current.data
      current = current.right
    }
    return max
  }  
}

module.exports = {
  BinarySearchTree
};