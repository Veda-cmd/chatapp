/** ************************************************************************************************
*Execution    :  default node     cmd> node vendingMachine.js.
*
*Purpose      :  to calculate the minimum number of notes to be returned for given amount.
*
*@description
*
*@file        :  vendingMachine.js
*@overview    :  vending module to calculate the minimum number of notes to be returned for given
				 amount.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
**************************************************************************************************/


/**
*@description Dependencies require to be installed before the execution of this file.
*@var imports another file for execution of program.
*/

var src = require('../utility/util.js');

/**
*@description IIFE(Immediately Invoked Function Execution) this anonymous function is executed right
*it is created. The function generates output from the called function in another file.
*/

(function vending() {

  /**
	*@description Takes inputs for the program.
	*@var {Array} notes, {Number} money, {Number} n, {Number} total.
	*/

  var notes = [1000, 500, 100, 50, 10, 5, 2, 1];
  var money = src.inputInt();
  var count = 0;
  var total = 0;
  src.vendingMachine(notes, money, count, total);
})();
