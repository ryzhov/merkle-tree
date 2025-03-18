/**
 * Seminar 2.5 Simple Trie
 */

class TrieNode {
  constructor(key) {
    this.key = key;
    this.children = [];
    this.isWord = false;
  }

  hasChild(childKey) {
    return undefined !== this.children.find(({ key }) => key === childKey);
  }

  getChild(childKey) {
    return this.children.find(({ key }) => key === childKey);
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(word) {
    let curr = this.root;

    word.split('').forEach(char => {
      const child = curr.children.find(({ key }) => key === char);
      if (child) {
        curr = child;
      } else {
        const newChild = new TrieNode(char)
        curr.children.push(newChild);
        curr = newChild;
      }
    });
    curr.isWord = true;
  }

  hasNode(word){
    // TODO Check is word in Trie
    return false;
  }

  getAllNodes(){
    // TODO returns all nodes as array
    return [];
  }
}

module.exports = { Trie };
