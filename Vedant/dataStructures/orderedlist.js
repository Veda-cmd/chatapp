/********************************************************************************************
*Execution    :  default node     cmd> node orderedlist.js 
*
*Purpose      :  To sort a linked list.
*
*@description  
*
*@file        :  palindromeChecker.js 
*@overview    :  print module to print the numbers in the range of 0 to 1000 in 2D array.
				 Prime module to determine the columns for second dimension of 2D array.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var src, fs  imports other files for execution of program.
*/

const fs = require('fs');
var src = require('../utility/linkedlistUtil.js');

var text = fs.readFileSync('./input.txt','utf8');

var c = text.split(" ");

var ll = new src.LinkedList(); 

for(var i = 0;i<c.length;i++)
{
	ll.add(c[i]);
}    
 
ll.insertAt(45,4);
ll.removeElement(100);
ll.removeElement(10);
ll.removeElement(15);
ll.removeElement(25);
ll.sortList();
var o = ll.printList();
console.log(o);
var outputFile = fs.writeFileSync("./output/orderedlist.txt",o);


