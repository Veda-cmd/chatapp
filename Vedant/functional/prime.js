/********************************************************************************************
*Execution    :  default node     cmd> node prime.js.
*
*Purpose      :  To determine the prime numbers in the range of 0 to 1000.
*
*@description  
*
*@file        :  prime.js
*@overview    :  Prime module to print the numbers in the range of 0 to 1000. 
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var src, test imports other files for execution of program.
*/

var src = require('../utility/util.js');
// var test = require('./test/primeTest.js');

/**
*@description IIFE(Immediately Invoked Function Execution) this anonymous function is executed right
*it is created. The function prints the result of the gambler.
*/

(function Prime()
{
	var n=src.inputInt();
	var str = "";
	for(var i=0;i<=n;i++)
	{
	 var mark = src.isPrime(i);
	 if(mark == 0)
		str+=i+" ";
	}
	console.log(str);
})();