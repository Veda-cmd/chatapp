/**********************************************************************************
*Execution    :  default node     cmd> node primeFactor.js.
*
*Purpose      :  to print prime factors of a given number.
*
*@description  
*
*@file        :  primeFactor.js.
*@overview    :  primeFactor module to print prime factors of a given number.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
***********************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var imports another file for execution of program.
*/ 

var src = require('../utility/util.js');

/**
*@description IIFE(Immediately Invoked Function Execution) this anonymous function is executed right
*it is created. The function prints the prime factors of a given number.
*/

(function primeFactor()
{
	/**
	*@description Takes inputs for the program.
	*@var {Number} n.
	*/

	var n = src.inputInt();

	/**
	*@description loop checks if input n is greater than 0.
	*/

	if(n>0)
	{		
		/**
		*@description Stores output for the program called by function from another file.
		*@var {String} result.
		*/

		var result = src.primeFactors(n);
		console.log(result);
	}
})();