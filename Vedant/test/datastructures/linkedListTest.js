var src = require('../../utility/linkedlistUtil.js');
var assert = require('assert');

describe('LINKED LIST FUNCTIONS TESTING', function()
{
  let linkedlist = new src.LinkedList();

  it('Value is not defined', function()
  {
    assert.equal(linkedlist.add(), false);
  });

  it('Spaces are not allowed', function(){
    assert.equal(linkedlist.add(" "), false);
  });

  it('Value is added to linkedlist', function(){
    assert.equal(linkedlist.add(5), true);
  });

  it('Value is added to linkedlist', function(){
    assert.equal(linkedlist.add(6), true);
  });

  it('Value is added to linkedlist', function(){
    assert.equal(linkedlist.add(10), true);
  });

  it('Value is added to linkedlist', function(){
    assert.equal(linkedlist.add(125), true);
  });

  it('Value and position to be inserted is not defined', function(){
    assert.equal(linkedlist.insertAt(), false);
  });

  it('Value to be inserted has spaces', function(){
    assert.equal(linkedlist.insertAt(" ",1), false);
  });

  it('Value is added to linkedlist at position 3', function(){
    assert.equal(linkedlist.insertAt(100,3), true);
  });

  it('Linked list is printed', function(){
    assert.equal(linkedlist.printList(), "5 6 10 100 125 ");
  });

  it('Value to be deleted is not defined', function(){
    assert.equal(linkedlist.removeElement(), false);
  });

  it('Value to be deleted has spaces', function(){
    assert.equal(linkedlist.removeElement(" "), false);
  });

  it('Value is deleted from Linked List', function(){
    assert.equal(linkedlist.removeElement(125), 125);
  });

  it('Size of linkedlist is 4', function(){
    assert.equal(linkedlist.getSize(), 4);
  });

  it('Linked list is not empty', function(){
    assert.equal(linkedlist.isEmpty(), false);
  });

  it('linkedlist is printed', function(){
    assert.equal(linkedlist.printList(), "5 6 10 100 ");
  });

});
