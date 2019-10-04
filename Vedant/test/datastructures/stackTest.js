var src = require('../../utility/stackUtil.js');
var assert = require('assert');

describe('STACK FUNCTIONS TESTING', function()
{
  let stack = new src.Stack();

  it('Value is not defined', function()
  {
    assert.equal(stack.push(), false);
  });

  it('Spaces are not allowed', function(){
    assert.equal(stack.push(" "), false);
  });

  it('Value is added to stack', function(){
    assert.equal(stack.push(5), true);
  });

  it('Value is added to stack', function(){
    assert.equal(stack.push(6), true);
  });

  it('Value is added to stack', function(){
    assert.equal(stack.push(10), true);
  });

  it('Value is added to stack', function(){
    assert.equal(stack.push(125), true);
  });

  it('Value is deleted from stack', function(){
    assert.equal(stack.pop(), 125);
  });

  it('Element at top of stack is 10', function(){
    assert.equal(stack.peek(), 10);
  });

  it('Stack is not empty', function(){
    assert.equal(stack.isEmpty(), false);
  });

  it('Stack is printed', function(){
    assert.equal(stack.printStack(), "5 6 10 ");
  });

});
