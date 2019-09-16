/**********************************************************************************
*Execution    :  default node     cmd> node binary.js.
*
*Purpose      :  to generate a random integer based on binary search.
*
*@description  
*
*@file        :  binary.js.
*@overview    :  binary module to generate a random number.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
***********************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var src imports another file for execution of program.
*/ 

var src = require('../utility/util.js');

/**
*@description IIFE(Immediately Invoked Function Execution) this anonymous function is executed right
*it is created. The function generates a number as output.
*/

(function binary()
{

	/**
	*@description Takes inputs for the program.
	*@var {Number} first, {Number} N, {Number} p.
	*/

	var first = 0,
		N = src.inputInt(),
	    p = Math.pow(2,N);
	console.log("Think of a number between 0 and "+(p-1));

	/**
	*@description variable stores value returned from the function which is called from another
	*file.
	*@var {Number} number
	*/ 

	var number = src.binarySearch(first,p);
	console.log('Your number is '+number);
})();

