/***********************************************************************************************
*Execution    :  default node     cmd> node stack.js 
*
*Purpose      :  To determine whether a expression is balanced or not using Stack.
*
*@description  
*
*@file        :  stack.js
*@overview    :  balancedParantheses module to determine whether a expression is balanced or not 
				 using Stack.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
************************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var src imports other files for execution of program.
*/

var src = require("../utility/stackUtil.js"),
	util = require("../utility/util.js");

/**
*@description Function takes array of given expression and determines whether the expression
*is balanced or not. It returns a boolean value.
*/

balancedParantheses = (exp) =>
{

	/**
	*@description variable stores object of class Stack.
	*@var {Object} stack
	*/

	var stack = new src.Stack();

	/**
	*@description for loop to check to run till length of expression. If opening parantheses is
	*found, it will push to stack. If closing parantheses is found, pop operation is performed and
	*passed to isMatched function with current value of expression.
	*/

	for(let i=0;i<exp.length;i++)
	{
		if(exp[0] != '(' && exp[0] != '{' && exp[0] != '[')
			return false;

		if(exp[i] == '(' || exp[i] == '{' || exp[i] == '[')
			stack.push(exp[i]);

		if(exp[i] == ')' || exp[i] == '}' || exp[i] == ']')
		{
			if(stack.isEmpty())
				return false;
			else if(!isMatched(stack.pop(),exp[i]))
				return false;
		}		
	}

	/**
	*@description loop to check whether is stack is empty or not.
	*/

	if(stack.isEmpty())
		return true;
	else
		return false;
	
}

/**
*@description loop to check whether two elements are equal or not.
*/

isMatched = (element1, element2) =>
{
	if(element1 == '(' && element2 == ')')
		return true;
	if(element1 == '{' && element2 == '}')
		return true;
	if(element1 == '[' && element2 == ']')
		return true;
	return false;
}

/**
*@description IIFE(Immediately Invoked Function Execution) this anonymous function is executed right
*it is created. The function prints output if expression is balanced or not.
*/

(main = () =>
{
	console.log("Enter string:");
	var exp = util.inputString();
	if(!exp)
		return false;

	if(balancedParantheses(exp.split("")))
		console.log("Expression is balanced.");
	else
		console.log("Expression is not balanced.");
})();

