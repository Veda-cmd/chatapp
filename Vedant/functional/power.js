/** ******************************************************************************************
*Execution    :  default node     cmd> node power.js.
*
*Purpose      :  To print the table of powers of 2 with a given value.
*
*@description
*
*@file        :  gambler.js.
*@overview    :  Module to print the table of powers of 2 with a given value.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
*@description Dependencies require to be installed before the execution of this file.
*@var imports another file for execution of program.
*/

var src = require('../utility/util.js');

/**
*@description Takes inputs for the program.
*@var {Number} N.
*/

var N = src.inputInt();

/**
*@description Stores output for the program returned by function from another file.
*@var {String} result.
*/

var result = src.powerOfTwo(N);
console.log(result);
