var src = require('../utility/util.js');
var assert = require('assert');

describe('PRIME FACTORS TESTING', function(){
  it('Input is undefined', function(){
    assert.equal(src.primeFactors(), -1);
  });

  it('Input entered is negative', function(){
    assert.equal(src.primeFactors(-1), -1);
  });

  it('Input should be a value greater than 0', function(){
    assert.equal(src.primeFactors(0), -1);
  });

  it('Input entered is correct', function(){
    assert.equal(src.primeFactors(9), '3 3 ');
  });
});
