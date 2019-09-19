var src = require("../utility/queueUtil.js");
var util = require("../utility/util.js");

cashBalance = () =>
{
	var queue = new src.Queue();
	var initialBalance = 1000,
		    enqueueCount = 0,
			dequeueCount = 0,
			count = 0,i = 0;
	console.log("-----------------------------------");
	console.log("Welcome to the Banking Program");

	while(i==0)
	{	
		console.log("-----------------------------------");
		console.log("Enter 1 to deposit amount");
		console.log("Enter 2 to withdraw amount");
		console.log("Enter 3 to exit");
		let choice = util.inputInt(),amount;

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