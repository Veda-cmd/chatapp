/** ********************************************************************************
*Execution    :  default node     cmd> node payment.js.
*
*Purpose      :  to calculate monthly payments.
*
*@description
*
*@file        :  payment.js
*@overview    :  payment module to calculate monthly payments.
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
*it is created. The function calculates the monthly payment for the given inputs.
*/

(function payment() {
  /**
	*@description Takes inputs for the program.
	*@var {Number} P, {Number} Y, {Number} R.
	*/

  console.log('Enter principal');
  var P = src.inputInt();
  console.log('Enter number of years');
  var Y = src.inputInt();
  console.log('Enter rate of interest');
  var R = src.inputInt();

  /**
	*@description Stores output for the program in case of incorrect input.
	*@var {Number} result.
	*/

  var result = src.monthlyPayment(P, Y, R);
  if (result == 0)
    console.log('Input is incorrect');
})();
