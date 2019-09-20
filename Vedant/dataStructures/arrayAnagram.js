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

Prime = (array) =>
{
	let start = 1, end = 100;
	for(let i=0;i<array.length;i++)
	{	
		let k = 0;	
		for(let j=start;j<=end;j++)
		{
			if(src.isPrime(j)==0)
				k++;
		}
		array[i] = [k];
		start = end + 1;
		end = end + 100;
	}
}

(print = () =>
{
	var array = new Array(10);
	Prime(array);
	let start = 1, end = 100;
	
	for(let i=0;i<array.length;i++)
	{	
		let k = 0;	
		for(let j=start;j<=end;j++)
		{
			if(src.isPrime(j)==0)
			{			
				array[i][k] = j;
				k++;
			}
		}
		start = end + 1;
		end = end + 100;
	}

	console.log(array);
})();



/**
*@description Function prints prime numbers from 1 to n.
*/

Anagram = () => 
{	

	/**
	*@description Empty string to store all the prime numbers.
	*@var {string} global str.
	*/
	var primeString = '',anagramString = '';;

	/**
	*@description variable takes input from user.
	*@var {number} n
	*/

  	var n = 1000;

  	/**
	*@description loop checks whether input is in range of 0 to 1000.If true, it executes the
	*statements inside the loop.
	*/

  	for(i=2;i<=n;i++)
  	{
		if(src.isPrime(i)==0)
			primeString+= ' '+i;
  	}

	var array = primeString.replace(' ', '').split(' ');

  	for (var i = 0; i < array.length; i++) 
  	{
    	for (var j = i + 1; j < array.length; j++) 
    	{

      		/**
			*@description loop checks boolean value returned by the function which is called from
			*another file.If it is true, it prints the output.
			*/
      		if (src.anagramPrime(array[i], array[j])) 
      	  		anagramString+=' '+array[i]+' '+array[j];
    	}
  	}
  	console.log(anagramString);
}

Anagram();

