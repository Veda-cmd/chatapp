var src = require('../Vedant/utility/util.js');

(function binary(){
var first = 0;
var N = src.input();
var p = Math.pow(2,N);
console.log("Think of a number between 0 and "+(N-1));
var number = src.binarySearch(first,N);
console.log('Your number is '+number);
})();

