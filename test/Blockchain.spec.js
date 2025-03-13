const Blockchain = require('../Blockchain').Blockchain;
const Block = require('../Block').Block;
const assert = require('assert');
const SHA256 = require('ethereum-cryptography/sha256').sha256;
const utf8ToBytes = require('ethereum-cryptography/utils').utf8ToBytes;

describe('Blockchain', function() {
  let blockchain;
  beforeEach(() => {
    blockchain = new Blockchain();
    blockchain.addBlock(new Block("Dan"));
    blockchain.addBlock(new Block("Peter"));
    blockchain.addBlock(new Block("James"));
  });
  
  it('should be considered valid', function() {
    assert(blockchain.isValid());
  });

  describe('tampering with a previousHash', function() {
    beforeEach(() => {
      blockchain.chain[1].setPreviousHash(SHA256(utf8ToBytes("gibberish")));
    });

    it('should not be considered valid', function() {
      assert(!blockchain.isValid());
    });
  });
  
  describe('tampering with data', function() {
    beforeEach(() => {
      blockchain.chain[0].data = utf8ToBytes("Something Else");
    });

    it('should not be considered valid', function() {
      assert(!blockchain.isValid());
    });
  });
});
