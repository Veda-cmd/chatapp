/**********************************************************************************
*Execution    :  default node     cmd> node coupon.js.
*
*Purpose      :  to generate a coupon number.
*
*@description  
*
*@file        :  coupon.js.
*@overview    :  couponNumberGenerator module to generate a coupon number.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
***********************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var imports another file for execution of program.
*/ 

var src = require('../Vedant/utility/util.js');

(function couponNumberGenerator()
{

	/**
	*@description Takes inputs for the program.
	*@var {Array} letters, {String} coupon, {number} n, {number} random.
	*/
	var letters = ["a","b","c","d","e","f","g","1","2","3","4","5"],
		coupon="",
		n=src.inputInt();
		random = parseInt(Math.random()*n);
				
	while(random>0)
	{	
		coupon+=letters[Math.floor(random % letters.length)];
		random= Math.floor(random/letters.length);
	}
	console.log("Coupon: "+coupon);
})();