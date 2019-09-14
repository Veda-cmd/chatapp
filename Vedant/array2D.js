/**********************************************************************************************
*Execution    :  default node     cmd> node sum.js 
*
*Purpose      :  To determine if sum of 3 elements in array adds to zero.
*
*@description  
*
*@file        :  sum.js
*@overview    :  sumOfTriplets module to determine if sum of 3 elements in array adds to zero.
*@author 	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
***********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var imports another file for execution of program.
*/

var src = require('../Vedant/utility/util.js');

(function array2D()
{	
	/** 
	* @description  variable is declared to use to enter the no of rows
	* @var {number} row
	*/
	var row = src.inputInt();

	/** 
	*@description  variable is declared to use to enter the no of cols
	* @var {number} col
	*/
	var column = src.inputInt();

	/** 
	* @description  Stores value returned by the called function.
	* @var {number} array
	*/
	var array = src.arrayTwoD(row,column);
})();