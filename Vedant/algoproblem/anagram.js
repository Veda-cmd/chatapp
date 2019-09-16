/**********************************************************************************
*Execution    :  default node     cmd> node anagram.js.
*
*Purpose      :  to determine whether two strings are anagram or not.
*
*@description  
*
*@file        :  anagram.js.
*@overview    :  anagramChecker module to check if two strings are anagram or not.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
***********************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var imports another file for execution of program.
*/ 

var src = require('../utility/util.js');

/**
*@description Function checks whether the given inputs are anagram or not.
*/

function anagramChecker()
{
	/**
	*@description Takes 2 inputs for the program.
	*@var {String} str1
	*@var {String} str2
	*/ 

	var str1 = src.inputStr();
	var str2 = src.inputStr();
	console.log("Strings entered: "+str1+" "+str2);

	/**
	*@description promise stores the result of the function which returns either resolve/reject.
	*@returns promise.resolve() if successful;
	*@returns promise.reject() if error;
	*/ 

	var promise = new Promise (function(resolve,reject)
	{
		/**
		*@description result stores the value returned by the function which is called from another
		*file.
		*@var {boolean} result
		*/ 

		var result=src.anagram(str1,str2);

		/**
		*@description loop checks whether the value of variable result is equal to true and execute
		*the subsequent statement. 
		*/

		if(result==true)
			resolve();
		else
			reject();
	});

	/**
	*@description promise.then is executed if promise is resolved else catch is executed.
	*/ 

	promise.
	then(function()
	{
		console.log("Result: Strings are anagram");
	}).catch(function()
	{
		console.log("Result: Strings are not anagram");
	});
}

/**
*@description calls the defined function anagramChecker.
*/

anagramChecker();