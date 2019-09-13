/**********************************************************************************
*Execution    :  default node     cmd> node primeFactor.js.
*
*Purpose      :  to determine whether two strings are anagram or not.
*
*@description  
*
*@file        :  primeFactor.js.
*@overview    :  anagramChecker module to check if two strings are anagram or not.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
***********************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var imports another file for execution of program.
*/ 

var src = require('../Vedant/utility/util.js');

(function primeFactor(){
	var n = src.input();
	if(isNaN(n)){
		console.log('Please enter a valid number');
		primeFactor();
	}
	else
	{
		var result = src.primeFactors(n);
		console.log(result);
	}
})();