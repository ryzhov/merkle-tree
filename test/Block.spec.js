const Block = require('../Block').Block;
const assert = require('assert');
const sha256 = require('ethereum-cryptography/sha256').sha256;
const utf8ToBytes = require('ethereum-cryptography/utils').utf8ToBytes;

describe('Block', function() {
  let block;
  const data = 'Hello, World!';

  beforeEach(() => {
    block = new Block(data);
  });
  
  it('block should be defined', function() {
    assert(block instanceof Block);
  });

  it('block hash should be defined', function() {
    const hash = block.toHash();
    assert(hash instanceof Uint8Array);
  });

  it('block hash for genesis block', function() {
    const hash = block.toHash().toHex();
    assert(hash === sha256(utf8ToBytes(data)).toHex());
  });

  it('block hash for general block', function() {
    const previousHash = sha256(utf8ToBytes('There are many flowers in the garden.'));
    block.setPreviousHash(previousHash);
    assert(
      block.toHash().toHex() ===
      sha256(new Uint8Array([ ...utf8ToBytes(data), ...previousHash ])).toHex()
    );
  });
});
