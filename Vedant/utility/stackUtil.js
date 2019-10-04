/********************************************************************************************
*Execution    :  default node     cmd> node stack.js 
*
*Purpose      :  To implement class Stack
*
*@description  
*
*@file        :  stack.js 
*@overview    :  class Stack to implement Stack and its functions.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/** 
*@description Stack class
*/

class Stack
{
	constructor()
	{
	this.array = [];
	}

	/** 
	*@description adds an element to the stack.  
	*/ 

	push(x)
	{
		let	validationRule = /^\s{1,}$/;
		if(x == undefined || validationRule.test(x) == true)
		{
			console.log("Value is undefined");
			return false;
		}

		this.array.push(x);
		return true;
	}


	/** 
	*@description returns a element from top of stack. 
	*/

	pop()
	{
		if(this.array.length == 0)
			return false;		
		return this.array.pop();
	}

	/** 
	*@description returns true or false if the stack is empty or not. 
	*/

	isEmpty()
	{
		return this.array.length == 0;
	}

	/** 
	*@description returns last element of stack. 
	*/

	peek()
	{
		return this.array[this.array.length-1];
	}

	printStack() 
	{ 
	    var str = ""; 
	    for(let i = 0; i < this.array.length; i++) 
	        str += this.array[i] +" "; 
	    return str; 
	} 
}

module.exports = {
	Stack
}