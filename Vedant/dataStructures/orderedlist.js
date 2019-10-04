/********************************************************************************************
*Execution    :  default node     cmd> node orderedlist.js 
*
*Purpose      :  To sort a linked list using Bubble Sort.
*
*@description  
*
*@file        :  orderedlist.js 
*@overview    :  orderedLinkedList module to sort a linked list using Bubble Sort.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@const fs imports file system module.
*@var src imports other files for execution of program.
*/

const fs = require('fs');
var src = require('../utility/linkedlistUtil.js');
var util = require("../utility/util.js");

/**
*@description IIFE(Immediately Invoked Function Execution) this anonymous function is executed right
*it is created. The function prints the sorted Linked list.
*/

orderedLinkedList = () =>
{
	try
	{
		/**
		*@description variables are used as initial inputs.
		*@var text stores contents of input file.
		*@var {Array} c stores array of variable text.
		*@var {Object} linkedlist stores object of class Linked List.
		*/

		var text = fs.readFileSync('./input.txt','utf8');
		var c = text.split(" ");
		var linkedlist = new src.LinkedList(); 
		let j = 10;

		for(let i = 0;i<c.length;i++)
		{
			linkedlist.add(c[i]);
		}    
		 
		linkedlist.printList();

		while(j>0)
		{
			console.log('Enter number to be searched:');
			let search = util.inputInt();
			if(search)
				linkedlist.removeElement(search);
			else
				return false;
			
			linkedlist.sortList();
			linkedlist.printList();
			j--;
		}

		/**
		*@description variables output and outputFile are used for storing results
		*/

		var output = linkedlist.printList();

		var outputFile = fs.writeFileSync("./output/orderedlist.txt",output);
	}
	catch(err)
	{
		console.log(err.message);
	}
}
orderedLinkedList();


