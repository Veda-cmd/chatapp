var src = require('../utility/util.js');
var assert = require('assert');

describe('ANAGRAM TESTING',function(){
	it('Inputs entered are not strings', function (){
    assert.equal(src.anagram(5,5),false);
	});

	it('One input entered is not string', function (){
    assert.equal(src.anagram("abc",5),false);
	});

	it('Inputs entered are strings', function (){
    assert.equal(src.anagram("abc","abc"),true);
	});
});

describe('PRIME NUMBER TESTING',function(){
	it('Inputs entered are not strings', function (){
    assert.equal(src.isPrime('A'),-1);
	});

	it('One input entered is not string', function (){
    assert.equal(src.isPrime('A'),-1);
	});

	it('Inputs entered are strings', function (){
    assert.equal(src.isPrime(5),0);
	});

	it('Inputs entered are strings', function (){
    assert.equal(src.isPrime(4),0);
	});
});

