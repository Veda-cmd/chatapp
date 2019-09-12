const assert = require('chai').assert;
const app = require('../utility/util.js').isPrime;

let primeResult=isPrime();
describe("Prime Number testing",function(){
	it("Input should be a number", function(){
		assert.typeOf(primeResult,'number');
	});
});