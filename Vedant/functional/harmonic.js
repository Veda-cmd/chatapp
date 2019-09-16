/********************************************************************************************
*Execution    :  default node     cmd> node harmonic.js.
*
*Purpose      :  To print Nth harmonic number.
*
*@description  
*
*@file        :  harmonic.js 
*@overview    :  bubble module to print Nth harmonic number. 
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var imports another file for execution of program.
*/

var src = require('../utility/util.js');

(function harmonic()
{
	/**
	*@description Takes inputs for the program.
	*@var {Number} N, {Float} sum.
	*/

	var N = src.inputInt(),
		sum = parseFloat('0.0');

	/**
	*@description loop checks if number is greater than 0 or not and prints Nth harmonic number.
	*/

	if(N!=0)
	{
	  for (var i=0;i<N;i++)	 
	  {
	  	sum = sum + (1/(i+1));
	  }
	  console.log('Result: '+sum.toFixed(3));
	}
})();