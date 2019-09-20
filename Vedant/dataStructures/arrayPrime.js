/********************************************************************************************
*Execution    :  default node     cmd> node arrayPrime.js 
*
*Purpose      :  To determine the prime numbers in the range of 0 to 1000 in 2D array.
*
*@description  
*
*@file        :  arrayPrime.js
*@overview    :  print module to print the numbers in the range of 0 to 1000 in 2D array.
				 Prime module to determine the columns for second dimension of 2D array.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var src, test imports other files for execution of program.
*/

var src = require('../utility/util.js');

/**
*@description IIFE(Immediately Invoked Function Execution) this anonymous function is executed right
*it is created. The function prints the result of the gambler.
*/

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
