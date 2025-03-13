/**
 * Seminar 2.2 Transaction output
 */
const { sha256 } = require('ethereum-cryptography/sha256');

function numToUint8Array(num) {
  const arr = new Uint8Array(8);

  for(let i = 0; i < 8; i++)
    arr.set([num/0x100**i], 7-i)

  return arr;
}

function uint8ArrayToNum(arr) {
  let num = 0;

  for(let i = 0; i < 8; i++)
    num += (0x100**i) * arr[7-i];
  return num;
}

class Transaction {
  /**
   * @param { Uint8Array } from
   * @param { Uint8Array } to
   * @param { Uint8Array } value
   */
  constructor(from, to, value) {
    this.from = from;
    this.to = to;
    this.value = value;
    this.spent = false;
  }

  spend() {
    if (this.spent) {
      throw new Error('Already spended!');
    }
    this.spent = true;
  }

  toHash() {
    const payload = new Uint8Array([ ...this.from, ...this.to, ...this.value ]);
    return sha256(payload);                 // a hash as byte array
  }
}

module.exports = { Transaction, numToUint8Array, uint8ArrayToNum }
