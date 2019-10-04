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
	for(i=0;i<array.length;i++)
	{
		let count=0;
		for(let j=start;j<=end;j++)
		{	
			for(let k=j+1;k<=end;k++)
			{
				if(src.isPrime(k) == 0 && src.anagramPrime(j,k) == true)
					count++;				
			}
		}
		array[i]=[count];
		start = end + 1;
		end = end + 100;	
	}

	console.log(array);
	
}

(Anagram = () =>
{
	var anagram = [10];
	Prime(anagram);

})();
