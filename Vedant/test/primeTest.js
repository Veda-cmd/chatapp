var src = require('../utility/util.js');
var assert = require('assert');

describe('PRIME NUMBER TESTING',function(){
	it('Inputs entered are not strings', function (){
    assert.equal(src.isPrime('A'),-1);
	});

	it('Inputs entered is negative', function (){
    assert.equal(src.isPrime(-1),-1);
	});

	it('Inputs entered is not a prime', function (){
    assert.equal(src.isPrime(4),1);
	});

	it('Inputs entered is a prime', function (){
    assert.equal(src.isPrime(5),0);
	});
});

