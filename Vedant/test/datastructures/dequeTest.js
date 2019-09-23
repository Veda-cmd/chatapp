var src = require('../../utility/dequeUtil.js');
var assert = require('assert');

describe('DEQUE FUNCTION TESTING', function()
{
  let deque = new src.Deque();

  it('Value is not defined', function()
  {
    assert.equal(deque.add(), false);
  });

  it('Spaces are not allowed', function(){
    assert.equal(deque.add(" "), false);
  });

  it('Value is added to queue', function(){
    assert.equal(deque.add(5), 1);
  });

  it('Value is added to queue', function(){
    assert.equal(deque.add(6), 1);
  });

  it('Value is added to queue', function(){
    assert.equal(deque.add(10), 1);
  });

  it('Value is added to queue', function(){
    assert.equal(deque.add(15), 1);
  });

   it('Value is added to queue', function(){
    assert.equal(deque.add(25), 1);
  });

  it('Value is deleted from front ofqueue', function(){
    assert.equal(deque.deleteFront(), 5);
  });

  it('Value is deleted from rear of queue', function(){
    assert.equal(deque.deleteRear(), 25);
  });

  it('Size of queue is 3', function(){
    assert.equal(deque.getSize(), 3);
  });

  it('Queue is not empty', function(){
    assert.equal(deque.isEmpty(), false);
  });

  it('Queue is printed', function(){
    assert.equal(deque.printQueue(), "6 10 15 ");
  });

});
