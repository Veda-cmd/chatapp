/********************************************************************************************
*Execution    :  default node     cmd> node hashLinkedList.js 
*
*Purpose      :  To implement hashing using Linked List data structure.
*
*@description  
*
*@file        :  hashLinkedList.js
*@overview    :  class hashTable is used to implement hashing.
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

// var text = fs.readFileSync('./input.txt','utf8');
// var c = text.split(" ");

/**
*@description linkedlist stores LinkedList object.
*@var linkedlist
*/

var linkedlist = new src.LinkedList(); 

/**
*@description for loop creates a linked list of size 11 using add function.
*/

for(let i = 0;i<11;i++)
{
	linkedlist.add(i);
}    

/**
*@description size stores the Linked list size.
*@const {Number} size
*/

const size = linkedlist.getSize();

/**
*@description for loop assigns an dynamic array to each element of linked list.
*/

for(let i = 0;i<size;i++ )
{
	linkedlist[i] = [];
}

/**
*@description hash function is used to calculate the modulus of value and size.
*/

hash = (a,size) =>
{
	return a % size;
}

/**
*@description hashTable class is used to perform hashing. hashTable class has the following 
*functions: add, remove and print. Regex is used for validation of white spaces.
*/

class hashTable
{
	constructor()
	{}

	add(value)
	{
		let	validationRule = /^\s{1,}$/;
		if(value == undefined || validationRule.test(value) == true)
		{
			console.log("Value is undefined");
			return false;
		}

		let index = hash(value,size);
		let inserted = false;
		
		for(let i=0;i<linkedlist[index].length;i++)
		{
			if(linkedlist[index][i] === value)
			{
				ll[index][i] = value;
				linkedlist[index][i] == value;
				inserted = true;
			}	
		}

		if(inserted == false){
			linkedlist[index].push(value);
		}
	}

	remove(value)
	{
		let	validationRule = /^\s{1,}$/;
		if(value == undefined || validationRule.test(value) == true)
		{
			console.log("Value is undefined");
			return false;
		}

		let index = hash(value,size);
		let deleted = false;

		if(linkedlist[index].length === 1 && linkedlist[index][0] === value)
      		delete linkedlist[index]; 
      	else 
    	{
      		for (var i = 0; i < linkedlist[index].length; i++) 
      		{
        		if (linkedlist[index][i] === value)
        		{ 
          			delete linkedlist[index][i];
          			deleted = true;
          		}
      		}
      		if(deleted == false)
          		return this.add(value);
    	}
	}

	print() 
	{
		var str = "";
		for(let i=0;i<size;i++)
		{
			str+=linkedlist[i]+",";
		}
		console.log(linkedlist);
		return str;
	}
}

/**
*@description ht is used for storing hashTable object.
*@let {Object} ht
*/

let ht = new hashTable();
ht.add(12);
ht.add(77);
ht.add(66);
ht.add(55);
ht.add(44);
ht.add(33);
ht.add(24);
ht.add(27);
ht.add("  ");
ht.remove("  ");
ht.remove(36);
ht.add(48);
ht.add(118);
ht.remove(76);
ht.remove(35);
var res = ht.print();

var outputFile = fs.writeFileSync("./output/hash.txt",res);
