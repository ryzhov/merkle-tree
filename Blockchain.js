/**
 * Seminar 2.1 Blockchain primitive
 */

const { Block } = require('./Block');

class Blockchain {
  constructor() {

    this.chain = [
      new Block('Hello, World!'),
    ];
  }

  addBlock(block) {
    block.setPreviousHash(this.chain[this.chain.length - 1].toHash());
    this.chain.push(block);
  }

  isValid() {
    return !this.chain.find((block, i, chain) =>
      i > 0 ? block.getPreviousHash().toHex() !== chain[i - 1].toHash().toHex() : false
    );
  }
}

module.exports = { Blockchain };
