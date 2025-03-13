const { utf8ToBytes } = require('ethereum-cryptography/utils');
const { sha256 } = require('ethereum-cryptography/sha256');

Uint8Array.prototype.toHex = function () {
  return Array.from(this).map(i => ('0' + i.toString(16)).slice(-2)).join('');
};

class Block {
  /**
   * @type Uint8Array
   */
  data;

  /**
   * @private
   * @type Uint8Array
   */
  _previousHash;

  /**
   * @param { string } data
   */
  constructor(data) {
    this.data = utf8ToBytes(data);          // Here we simplify data
    this._previousHash = new Uint8Array();
  }

  /**
   * @param { Uint8Array } previousHash
   * @returns { Block }
   */
  setPreviousHash(previousHash) {
    this._previousHash = previousHash;
    return this;
  }

  /**
   * @returns { Uint8Array }
   */
  getPreviousHash() {
    return this._previousHash;
  }

  /**
   * @returns { Uint8Array }
   */
  toHash() {
    const payload = new Uint8Array([ ...this.data, ...this._previousHash ]);
    return sha256(payload);                 // a hash as byte array
  }
}

module.exports = { Block };
