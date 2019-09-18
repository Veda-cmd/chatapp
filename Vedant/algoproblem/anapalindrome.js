/** ******************************************************************************************
*Execution    :  default node     cmd> node anapalindrome.js.
*
*Purpose      :  to determine which prime numbers from 1 to 1000 are anagram and palindrome.
*
*@description
*
*@file        :  anapalindrome.js.
*@overview    :  Prime module to check if number is prime or not.
                 Anagram module to check if the number is anagram or not.
                 Palindrome module to check if the number is palindrome or not.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
*@description Dependencies require to be installed before the execution of this file.
*@var imports another file for execution of program.
*/

var src = require('../utility/util.js');

/**
*@description Empty string to store all the prime numbers.
*@var {string} global str.
*/

var str = '';

/**
*@description Function prints prime numbers from 1 to n.
*/

function Prime() {
  /**
	*@description variable takes input from user.
	*@var {number} n
	*/

  var n = src.inputInt();

  /**
	*@description variable total stores copy of input n.
	*@var {number} total
	*/

  var total = n;

  /**
	*@description loop checks whether input is in range of 0 to 1000.If true, it executes the
	*statements inside the loop.
	*/

  while (n > -1 && n < 1000) {

	 /**
	 *@description variable stores value returned from the function which is called from another
	 *file.
	 *@var {number} mark
	 */

	 var mark = src.isPrime(n);

	 /**
	 *@description loop checks whether value returned is equal to 0. If true, it appends the number
	 *to str. If false, it exits the loop.
	 */

	 if (mark == 0)
      str += ' ' + n;
	 n--;
  }
  console.log('Range of Primes from 0 to ' + total + ':');
  console.log(str);
}

/**
*@description calls the defined function Prime.
*/

Prime();

/**
*@description variable array replaces the spaces in str and converts it to Array using spilt().
*@var {Array} array.
*/

var array = str.replace(' ', '').split(' ');

/**
*@description The variable array is printed.
*/

console.log('Array of Prime Numbers');

/**
*@description Function checks whether a element in the array is an anagram or not. It loops using
*i and j as counters through the array. Each element from i = 0 is checked with element from j=0 to
*array.length.
*/

function Anagram() {

  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {

      /**
			*@description loop checks boolean value returned by the function which is called from
			*another file.If it is true, it prints the output.
			*/
      if (src.anagramPrime(array[i], array[j])) {
        console.log(array[i] + ' ' + array[j] + ' are anagrams');
      }
    }
  }
}

/**
*@description calls the defined function Anagram.
*/

Anagram();

/**
*@description Function checks whether a element in the array is an palindrome or not.
*It loops using i as counter through the array. Each element is checked from i = 0 to array.length.
*/

function Palindrome(){
  for (var i = 0; i < array.length; i++) {
    /**
		*@description loop checks whether the boolean value returned by function which is called
		*from another file.If it is true, it prints the output.
		*/
    if (src.isPalindrome(array[i]))
      console.log(array[i] + ' is Palindrome');
  }
}

/**
*@description calls the defined function Palindrome.
*/

Palindrome();
