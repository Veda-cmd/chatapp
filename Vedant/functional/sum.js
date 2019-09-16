/**********************************************************************************************
*Execution    :  default node     cmd> node sum.js 
*
*Purpose      :  To determine if sum of 3 elements in array adds to zero.
*
*@description  
*
*@file        :  sum.js
*@overview    :  sumOfTriplets module to determine if sum of 3 elements in array adds to zero.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
***********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var imports another file for execution of program.
*/

var src = require('../utility/util.js');

/**
*@description IIFE(Immediately Invoked Function Execution) this anonymous function is executed right
*it is created. The function prints the output of the program.
*/

(function sumOfTriplets()
{
	/**
	*@description Takes inputs for the program.
	*@var {Number} size, {Array} inputArray.
	*/

	console.log('Enter size of array');
	var size = src.inputInt(); 
	console.log('Enter elements of array');
	var inputArray = [];
	for(var i=0; i<size; i++) 
	{
		inputArray[i] = src.inputInt();
	}

	/**
	*@description A compare function is used to sort the input array.
	*/

	inputArray.sort(function(a, b) 
	{
	  return a - b;
	});

	/**
	*@description Stores output for the program returned by called function from another file.
	*@var {Boolean} result.
	*/
	
	var result = src.sumOfElement(inputArray,size);
	if (result== false) 
	    console.log("No Triplet Found");
})();
