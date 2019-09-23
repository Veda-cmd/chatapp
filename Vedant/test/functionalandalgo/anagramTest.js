var src = require('../utility/util.js');
var assert = require('assert');

describe('ANAGRAM TESTING', function(){
  it('Inputs entered are not strings', function(){
    assert.equal(src.anagram(5, 5), false);
  });

  it('Input entered is not string', function(){
    assert.equal(src.anagram('abc', 5), false);
  });

  it('Input entered is not string', function(){
    assert.equal(src.anagram(5, 'abc'), false);
  });

  it('Inputs entered are strings', function(){
    assert.equal(src.anagram('abc', 'abc'), true);
  });

  it('Inputs entered are undefined', function(){
    assert.equal(src.anagram(), false);
  });
});
