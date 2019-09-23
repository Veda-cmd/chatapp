/********************************************************************************************
*Execution    :  default node     cmd> node banking.js 
*
*Purpose      :  To simulate cash counter at a bank to deposit or withdraw money using queue.
*
*@description  
*
*@file        :  banking.js 
*@overview    :  cashBalance module to simulate cash counter at a bank to deposit or withdraw 
				 money using Queue data structure.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var src, util imports other files for execution of program.
*/

var src = require("../utility/queueUtil.js");
var util = require("../utility/util.js");

/**
*@description Function performs simulation of the cash counter.
*/

cashBalance = () =>
{
	/**
	*@description queue stores object of class Queue.
	*@var {Object} queue.
	*/

	var queue = new src.Queue();

	/**
	*@description variables are used as initial inputs and have global scope.
	*@var {Number} initialBalance, enqueueCount, dequeueCount, count.
	*/

	var initialBalance = 1000,
		    enqueueCount = 0,
			dequeueCount = 0,
			count = 0, i = 0;
	console.log("-----------------------------------");
	console.log("Welcome to the Banking Program");

	/**
	*@description while loop runs until user enters 3 as choice.
	*/

	while(i==0)
	{	
		console.log("-----------------------------------");
		console.log("Enter 1 to deposit amount");
		console.log("Enter 2 to withdraw amount");
		console.log("Enter 3 to exit");
		let choice = util.inputInt(),amount;

		/**
		*@description switch statement executes the particular choice entered by user.
		*If case 1, enqueue and dequeue operations of class Queue are used to add and remove 
		*customer to queue. initialBalance is updated by adding amount entered by user.
		*If case 2, enqueue and dequeue operations of class Queue are used to add and remove 
		*customer to queue. initialBalance is updated by subtracting amount entered by user.
		*If case 3, value of i is incremented and while loop stops.
		*/

		switch(choice)
		{
			case 1:
			console.log("-----------------------------------");
			console.log("Enter amount you want to deposit");
			amount = util.inputInt();
			if(amount != 0 && amount != undefined)
			{
				queue.enqueue(amount);
				initialBalance+=amount;
				queue.printQueue();
				enqueueCount++;
				count++;
				console.log("Updated balance is "+initialBalance);
				queue.dequeue();
			}
			else
				console.log("Amount must be between 1 and "+initialBalance);

			break;

			case 2:
			console.log("-----------------------------------");
			console.log("Enter amount you want to withdraw");
			amount = util.inputInt();
			if(amount<=initialBalance && amount != 0 && amount != undefined)
			{
				queue.enqueue(amount);
				initialBalance-=amount;
				queue.printQueue();
				dequeueCount++;
				count++;
				console.log("Updated balance is "+initialBalance);
				queue.dequeue();
			}
			else if(amount == 0 || amount == undefined)
				console.log("Amount must be between 1 and "+initialBalance);
			else if(initialBalance == 0)
			  console.log("No amount to withdraw. You can deposit.");
			else
			  console.log("Amount to withdraw should be less or equal to "+initialBalance);
			break;	

			case 3:
			i++;
			break;

			default :
			console.log("Entered wrong choice");
			break;
		}
	}

	console.log("Total number of people are "+count);
	console.log("Total number of Deposit transactions are "+enqueueCount);
	console.log("Total number of Withdraw transactions are "+dequeueCount);
}
cashBalance();