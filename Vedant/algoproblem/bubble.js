/** ******************************************************************************************
*Execution    :  default node     cmd> node bubble.js.
*
*Purpose      :  To sort an array using Bubble Sort.
*
*@description
*
*@file        :  bubble.js.
*@overview    :  bubble module to sort an array using Bubble Sort.
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
*it is created. The function prints the sorted array.
*/

(function bubble() {

  /**
	*@description Takes inputs for the program.
	*@var {Array} arr1, arr2.
	*/

  var arr1 = [1, 5, 3, 2, 9, 8];
  var arr2 = ['a', 'i', 'e', 'u', 'o'];

  /**
	*@description Stores output for the program.
	*@var {Array} resNumber, resChar.
	*/

  var resNumber = []; var resChar = [];
  resNumber = src.bubbleSort(arr1);
  console.log('Number Array after sorting:');
  console.log(resNumber);

  console.log();

  resChar = src.bubbleSort(arr2);
  console.log('Character Array after sorting:');
  console.log(resChar);

})();
