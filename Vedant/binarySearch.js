var src = require('../Vedant/utility/util.js');

(function binarySearch(){
var arr=[1,5,3,2,9,8];
var x = src.input('Enter value to be searched:')
var n = arr.length-1;
src.bubbleSort(arr);
var result = src.binarySearchInteger(arr,0,n,x);
if(result == x)
	console.log('Value found '+result);
else
	console.log('Value not found');
})();
