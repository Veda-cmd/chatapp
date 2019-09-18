/** ********************************************************************************
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

var src = require('../utility/util.js');

/**
*@description IIFE(Immediately Invoked Function Execution) this anonymous function is executed right
*it is created. The function generates a coupon number.
*/

(function couponNumberGenerator() {

  /**
	*@description Takes inputs for the program.
	*@var {Array} letters, {String} coupon, {number} n, {number} random.
	*/
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'A', 'B', 'C', 'D',
				   'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var coupon = '';
  var n = src.inputInt();
  random = parseInt(Math.random() * n);

  /**
	*@description loop runs till variable random is less than 0 and appends to the string random.
	*/

  while (random > 0) {
    coupon += letters[Math.floor(random % letters.length)];
    random = Math.floor(random / letters.length);
  }
  console.log('Coupon: ' + coupon);
})();
