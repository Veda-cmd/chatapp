/********************************************************************************************
*Execution    :  default node     cmd> node binarySearch.js.
*
*Purpose      :  to search a given number in an array through Binary Search.
*
*@description  
*
*@file        :  binarySearch.js.
*@overview    :  binarySearch module to check if number is present in array. 
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var imports another file for execution of program.
*/

var src = require('../utility/util.js');

/**
*@description IIFE(Immediately Invoked Function Execution) this anonymous function is executed right
*it is created. The function prints the output if the given number is found or not.
*/

(function binarySearch()
{
	/**
	*@description Takes inputs for the program.
	*@var {Array} arr, {Number} x, {Number} n.
	*/

	var arr=[1,2,3,4,5,6,7,8,9],
		x = src.inputInt('Enter value to be searched:'),
		n = arr.length-1;

	/**
	*@description variable stores array returned from the function which is called from another
	*file.Array contains the number and its index if found.
	*@var {Array} result
	*/

	var result = src.binarySearchInteger(arr,0,n,x);

	/**
	*@description loop checks if the value to be searched matches with the first value of result 
	*array and prints the resulting output.
	*/

	if(result[0] == x)
		console.log('Value '+result[0]+' found at index '+result[1]);
	else
		console.log('Value not found');
})();
