var src = require('../utility/util.js');
var assert = require('assert');

describe('PRIME NUMBER TESTING',function(){
	it('Inputs entered is not valid', function (){
    assert.equal(src.leapYear('A'),-1);
	});

	it('Inputs entered is negative', function (){
    assert.equal(src.leapYear(-1),-1);
	});

	it('Inputs entered is not a leap year', function (){
    assert.equal(src.leapYear(2019),1);
	});

	it('Inputs entered is a leap year', function (){
    assert.equal(src.leapYear(2016),0);
	});
});
