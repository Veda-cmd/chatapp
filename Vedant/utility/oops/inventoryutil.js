/********************************************************************************************
*Execution    :  default node     cmd> node inventoryutil.js 
*
*Purpose      :  To allow user to buy items from inventory.
*
*@description  
*
*@file        :  inventoryutil.js 
*@overview    :  inventory module to allow user to buy items from inventory.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var util imports other files and modules for execution of program.
*/

var util = require("../util.js");

/**
*@description inventory module to take user input and display the output.
*/

inventory = (src) =>
{
	/**
    *@description Converts buffer stream into JSON object.
    *@var {Object} object 
    */

	let object = JSON.parse(src);
	console.log("WELCOME TO INVENTORY DATA MANAGEMENT PROGRAM");
	console.log("1.Rice");
	console.log("2.Pulses");
	console.log("3.Wheat");
	console.log("Please select the option you want:");

	let choice = util.inputInt();

	/** 
	*@description switch statement is used to execute the selected choice. 
	*/

	switch(choice)
	{
		case 1:
		console.log("You have selected Rice");
		console.log("Please select the type of rice you want from following options:");
		console.log("Basmati");
		console.log("Kolam");
		console.log("Jasmine");
		console.log("Brown rice");
		let option1 = util.inputString();
		for(let i=0;i<object.Rice.length;i++)
		{
			if(object.Rice[i].name == option1)
			{
				console.log(`Price per kg of ${object.Rice[i].name} is ${object.Rice[i].price}`);
				console.log(`Please specify the quantity of ${object.Rice[i].name} you want:`)
				let quantity = util.inputInt();
				if(quantity>0 || quantity != undefined)
				{
					let price = quantity * object.Rice[i].price;
					console.log(`User wants ${quantity} kgs of ${object.Rice[i].name} rice & price is ${price}`);
				}
			}
		}
		break;

		case 2:
		console.log("You have selected Pulses");
		console.log("Please select the type of pulses you want from following options:");
		console.log("Beans");
		console.log("Peas");
		console.log("Lentils");
		let option2 = util.inputString();
		for(let i=0;i<object.Pulses.length;i++)
		{
			if(object.Pulses[i].name == option2)
			{
				console.log(`Price per kg of ${object.Pulses[i].name} is ${object.Pulses[i].price}`);
				console.log(`Please specify the quantity of ${object.Pulses[i].name} you want:`);
				let quantity = util.inputInt();
				if(quantity>0 || quantity != undefined)
				{
					let price = quantity * object.Pulses[i].price;
					console.log(`User wants ${quantity} kgs of ${object.Pulses[i].name} & price is Rs ${price}`);
				}
			}
		}
		break;

		case 3:
		console.log("You have selected Wheat");
		console.log("Please select the type of wheat you want from following options:");
		console.log("Flour");
		console.log("Farro");
		console.log("Lentils");
		let option3 = util.inputString();
		for(let i=0;i<object.Wheat.length;i++)
		{
			if(object.Wheat[i].name == option3)
			{
				console.log(`Price per kg of ${object.Wheat[i].name} is ${object.Wheat[i].price}`);
				console.log(`Please specify the quantity of ${object.Wheat[i].name} you want:`)
				let quantity = util.inputInt();
				if(quantity > 0 || quantity != undefined)
				{
					let price = quantity * object.Wheat[i].price;
					console.log(`User wants ${quantity} kgs of ${object.Wheat[i].name} & price is ${price}`);
				}
			}
		}
		break;

		default:
		console.log(`${choice} is invalid.Please restart the program.`);
		break;
	}
},


module.exports ={
	inventory
}