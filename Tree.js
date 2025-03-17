/**
 * Seminar 2.3 Binary search tree
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  addNode(node) {
    if (!this.root) {
      this.root = node;
      return;
    }

    let curr = this.root;

    do {
      if (node.data > curr.data) {
        if (curr.right === null) {
          curr.right = node;
          curr = null;
        } else {
          curr = curr.right;
        }
      } else {
        if (curr.left === null) {
          curr.left = node;
          curr = null;
        } else {
          curr = curr.left;
        }
      }
    } while (curr);
  }

  hasNode(data, curr = this.root) {
    if (curr === null) {
      return false;
    } else if (data === curr.data) {
      return true;
    } else if (data < curr.data) {
      return this.hasNode(data, curr.left);
    } else {
      return this.hasNode(data, curr.right);
    }
  }
}



module.exports = { Node, Tree }
