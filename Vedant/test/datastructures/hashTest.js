var src = require('../../dataStructures/hashLinkedList.js');
var assert = require('assert');

describe('HASH FUNCTIONS TESTING', function()
{
  let hash = new src.hashTable();

  it('Value is not defined', function()
  {
    assert.equal(hash.add(), false);
  });

  it('Spaces are not allowed', function(){
    assert.equal(hash.add(" "), false);
  });

  it('Value is added to hashTable', function(){
    assert.equal(hash.add(5), true);
  });

  it('Value is added to hashTable', function(){
    assert.equal(hash.add(6), true);
  });

  it('Value is added to hashTable', function(){
    assert.equal(hash.add(10), true);
  });

  it('Value is added to hashTable', function(){
    assert.equal(hash.add(125), true);
  });

  it('Value is deleted from hashTable', function(){
    assert.equal(hash.remove(125), true);
  });

});
