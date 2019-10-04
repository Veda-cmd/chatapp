/********************************************************************************************
*Execution    :  default node     cmd> node dequeUtil.js 
*
*Purpose      :  To implement class Deque
*
*@description  
*
*@file        :  dequeUtil.js 
*@overview    :  class Deque to implement Deque and its functions.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/** 
*@description Deque class
*/

class Deque
{
 	constructor()
	{
		this.array = [];
		this.front = -1;
		this.rear = -1;
		this.size = 0;
	}

	/** 
	*@description adds an element at the end of queue and increments rear index.  
	*/ 

	add(x)
	{
		let	validationRule = /^\s{1,}$/;
		if(x == undefined || validationRule.test(x) == true)
		{
			console.log("Value is undefined");
			return false;
		}

		if(this.isEmpty())
		{
			this.front++;
			this.rear++;
		}
		else
			this.rear++;
		this.array[this.rear]=x;
		this.size++;
		return 1;

	}

	/** 
	*@description deletes a element from front of queue and increments front index. 
	*/

	deleteFront()
	{
		if(this.isEmpty())
			console.log("Underflow");

		else if(this.front>this.rear)
		{
			this.front=-1,this.rear=-1;
		}

		else
		{	
			this.front++;
			this.size--;
			return this.array.shift();
		}

	}

	/** 
	*@description deletes a element from rear of queue and increments rear index. 
	*/

	deleteRear()
	{
		if(this.isEmpty())
			console.log("Underflow");
		else if(this.front>this.rear)
		{
			this.front=-1, this.rear=-1;
		}
		else
		{
			this.rear--;
			this.size--;
			return this.array.pop();
		}

	}

	/**
	*@description checks the queue if empty or not 
	*/

	isEmpty()
	{
		return this.array.length == 0;
	}

	/**
	*@description returns size of the queue
	*/

	getSize()
	{
		return this.size;
	}

	/**
	*@description prints the queue items
	*/

	printQueue() 
	{ 
	    var str = ""; 
	    for(let i = 0; i < this.array.length; i++) 
	        str += this.array[i] +" "; 
	    console.log("Queue: "+str);
	    return str; 
	} 

}

module.exports={
	Deque
}