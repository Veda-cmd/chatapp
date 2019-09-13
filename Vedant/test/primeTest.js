var src = require('../utility/util.js');
var assert = require('assert');

describe('ANAGRAM TESTING',function(){
	it('Inputs entered are not strings', function (){
    assert.equal(false,src.anagram(false));
	});

});

