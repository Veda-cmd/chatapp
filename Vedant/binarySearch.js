var src = require('../Vedant/utility/util.js');

(function binarySearch(){
var arr=[1,2,3,4,5,6,7,8,9];
var x = src.input('Enter value to be searched:')
var n = arr.length-1;
var result = src.binarySearchInteger(arr,0,n,x);
if(result[0] == x)
	console.log('Value '+result[0]+' found at index '+result[1]);
else
	console.log('Value not found');
})();
