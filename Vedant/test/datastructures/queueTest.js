var src = require('../../utility/queueUtil.js');
var assert = require('assert');

describe('QUEUE FUNCTION TESTING', function()
{
  let queue = new src.Queue();

  it('Value is not defined', function()
  {
    assert.equal(queue.enqueue(), false);
  });

  it('Spaces are not allowed', function(){
    assert.equal(queue.enqueue(" "), false);
  });

  it('Value is added to queue', function(){
    assert.equal(queue.enqueue(5), true);
  });

  it('Value is added to queue', function(){
    assert.equal(queue.enqueue(6), true);
  });

  it('Value is added to queue', function(){
    assert.equal(queue.enqueue(10), true);
  });

  it('Value is added to queue', function(){
    assert.equal(queue.enqueue(125), true);
  });

  it('Value is deleted from queue', function(){
    assert.equal(queue.dequeue(), 5);
  });

  it('Size of queue is 3', function(){
    assert.equal(queue.getSize(), 3);
  });

  it('Queue is not empty', function(){
    assert.equal(queue.isEmpty(), false);
  });

  it('Queue is printed', function(){
    assert.equal(queue.printQueue(), "6 10 125 ");
  });

});
