/** ******************************************************************************************
*Execution    :  default node     cmd> node gambler.js.
*
*Purpose      :  To determine the result of a gambler.
*
*@description
*
*@file        :  gambler.js.
*@overview    :  simulateGambler module to print the result of a gambler's game.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
*@description Dependencies require to be installed before the execution of this file.
*@var imports another file for execution of program.
*/

var src = require('../utility/util.js');

/**
*@description IIFE(Immediately Invoked Function Execution) this anonymous function is executed right
*it is created. The function prints the result of the gambler.
*/

(function simulateGambler() {


  /**
	*@description Takes inputs for the program.
	*@var {Number} stake, {Number} goal, {Number} n.
	*/

  console.log('Enter Initial Stake:');
  var stake = src.inputInt();
  console.log('Enter Goal to achieve:');
  var goal = src.inputInt();
  console.log('Enter number of bets:');
  var n = src.inputInt();

  /**
	*@description Stores output for the program returned by function from another file.
	*@var {Number} wins.
	*/

  var wins = src.gambler(stake, goal, n);

  /**
	*@description Calculates percentage of wins and loss.
	*@var {Number} avg, loss.
	*/

  var avg = parseInt((wins / n) * 100);
  var loss = 100 - avg;
  console.log('Result: Won ' + wins + ' times out of ' + n);
  console.log('Percentage of wins out of 100: ' + avg);
  console.log('Percentage of loss out of 100: ' + loss);
})();
