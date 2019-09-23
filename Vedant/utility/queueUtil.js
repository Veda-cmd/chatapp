/*********************************************************************************************
*Execution    :  default node     cmd> node queueUtil.js 
*
*Purpose      :  To implement class Queue
*
*@description  
*
*@file        :  queueUtil.js 
*@overview    :  class Queue to implement Queue and its functions.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/** 
*@description Queue class
*/

class Queue
{
	constructor()
	{
		this.array = [];
	}

	/** 
	*@description adds an element to the queue.  
	*/ 

	enqueue(x)
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
	*@description deletes a element from end of queue. 
	*/

	dequeue()
	{
		if(this.isEmpty())
			return false;
		return this.array.shift();
	}

	/** 
	*@description returns element from front of queue. 
	*/

	front()
	{
		if(this.isEmpty())
			return false;
		return this.array[0];
	}

	/** 
	*@description returns size of queue. 
	*/

	getSize()
	{
		if(this.isEmpty())
			return false;
		return this.array.length;
	}

	/** 
	*@description returns true or false if the queue is empty or not. 
	*/

	isEmpty()
	{
		return this.array.length == 0;
	}

	/**
	*@description prints the queue items
	*/
	
	printQueue() 
	{ 
	    var str = ""; 
	    for(let i = 0; i < this.array.length; i++) 
	        str += this.array[i] +" "; 
	    console.log("Queue:"+str);
	    return str; 
	} 
}


module.exports = 
{
	Queue
}