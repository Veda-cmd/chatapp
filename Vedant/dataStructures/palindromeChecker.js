/********************************************************************************************
*Execution    :  default node     cmd> node palindromeChecker.js 
*
*Purpose      :  To determine whether a string is a palindrome or not.
*
*@description  
*
*@file        :  palindromeChecker.js 
*@overview    :  palindrome module to determine whether a string is a palindrome or not.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var src imports other files for execution of program.
*/

var src = require("../utility/dequeUtil.js")
var util = require("../utility/util.js")

/**
*@description Function checks whether the given string is palindrome or not and returns a boolean
*value. try and catch block is used for handling errors.
*/

palindrome = (string) =>
{
	try
	{
		/**
		*@description string is used for storing input.
		*@var string
		*/
		let	validationRule = /^\s{1,}$/;
		if(validationRule.test(string) == true || string == undefined || string == "" || 
			string == null)
			return false;

		string = string.split("");

		/**
		*@description deque stores the object of class Deque from another file.
		*@var deque
		*/
		
		var deque = new src.Deque();

		/**
		*@description loop is used for adding each element of string to deque.
		*/

		for(let i=0;i<string.length;i++)
		{
			deque.add(string[i]);
		}

		/**
		*@description Function is used for checking whether the arguments passed match or not.
		*/

		isMatched = (element1, element2) =>
		{
			if(element1 == element2)
				return true;
			return false;
		}

		/**
		*@description size is used for storing half of deque size.
		*@let size,matched
		*/

		let size = Math.floor(deque.getSize()/2);
		let matched = true;

		/**
		*@description Loop runs till size. During each iteration, first and last elements of deque
		*are checked if they match or not. If they not match, false is returned.
		*/

		for(let i=0;i<size;i++)
		{
			if(!isMatched(deque.deleteRear(),deque.deleteFront()))
				matched=false;

			if(matched==false)
				return false;
		}
		return true;
	}

	catch(err)
	{
		console.log(err.message);
	}
}

/**
*@description if-else loop prints output based on the return value of palindrome function.
*/

var string = util.inputString();
if(palindrome(string))
	console.log("String is a palindrome");
else
	console.log("String is not a palindrome");
