/********************************************************************************************
*Execution    :  default node     cmd> node leap.js.
*
*Purpose      :  To determine whether a year is leap year or not.
*
*@description  
*
*@file        :  leap.js
*@overview    :  Module to determine whether a year is leap year or not. 
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var imports another file for execution of program.
*/

var src = require('../utility/util.js');

/**
*@description variable takes input from user.
*@var {number} n
*/
var year = src.inputInt();

/**
*@description loop checks whether year is greater than 1000 or not.If true, it executes the 
*statements inside the loop and prints the output.
*/ 

var result = src.leapYear(year);
if(result == 0)
	console.log(year+" is a leap year");
else
	console.log(year+" is not a leap year");