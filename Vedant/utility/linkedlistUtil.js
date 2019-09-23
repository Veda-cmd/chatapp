/********************************************************************************************
*Execution    :  default node     cmd> node linkedlistUtil.js 
*
*Purpose      :  To implement class Linked List.
*
*@description  
*
*@file        :  linkedlistUtil.js 
*@overview    :  class Linked List to implement linked list and its functions.
				 class Node to implement node of a linked list.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 


/**
*@description user defined class Node
*/

class Node 
{ 
	/**
	*@description constructor of Node
	*/

	constructor(element) 
	{ 
		this.element = element; 
		this.next = null;
	} 
} 

/**
*@description class Linked List
*/

class LinkedList 
{ 
	constructor() 
	{ 
		this.head = null; 
		this.size = 0; 
	} 

	/** 
	*@description adds an element at the end of list  
	*/ 

	add(element) 
	{ 
		let	validationRule = /^\s{1,}$/;
		if(element == undefined || validationRule.test(element) == true)
		{
			console.log("Value is undefined");
			return false;
		}

		/**
		*@description creates a new node 
		*/ 

		var node = new Node(element); 

		/**
		*@description to store current node 
		*/ 

		var current; 

		/**
		*@description if list is Empty add the element and make it head. 
		*/

		if (this.head == null) 
			this.head = node; 
		else { 
			current = this.head; 

			/**
			*@description iterate to the end of the list 
			*/ 
			while (current.next) 
			{ 
				current = current.next; 
			}  
			current.next = node; 
		} 
		this.size++; 
		return true;
	} 

/** 
*@description insert element at the position index of the list
*/  
	insertAt(element, index) 
	{ 	
		let	validationRule = /^\s{1,}$/;
		if(element == undefined || validationRule.test(element) == true)
		{
			console.log("Value is undefined");
			return false;
		}

		if(index == undefined || validationRule.test(index) == true)
		{
			console.log("Index is undefined");
			return false;
		}

		if (index > 0 && index > this.size) 
			return false; 
		else 
		{ 
			/**
			*@description creates a new node 
			*/ 

			var node = new Node(element); 
			var curr, prev; 

			curr = this.head; 

			/** 
			*@description add the element to the first index 
			*/ 
			if (index == 0) 
			{ 
				node.next = head; 
				this.head = node; 
			} 
			else 
			{ 
				curr = this.head; 
				var it = 0; 

				while (it < index) 
				{ 
					it++; 
					prev = curr; 
					curr = curr.next; 
				} 
				node.next = curr; 
				prev.next = node; 
			} 
			this.size++; 
			return true;
		} 
	} 

	/** 
	*@description removes a given element from the list 
	*/

	removeElement(element) 
	{ 
		let	validationRule = /^\s{1,}$/;
		if(element == undefined || validationRule.test(element) == true)
		{
			console.log("Value is undefined");
			return false;
		}
		
		var current = this.head; 
		var prev = null; 

		while (current != null) 
		{ 
			if (current.element == element) 
			{ 
				if (prev == null) { 
					this.head = current.next; 
				} else { 
					prev.next = current.next; 
				} 
				this.size--; 
				return current.element; 
			} 
			prev = current; 
			current = current.next; 
		}
		this.add(element);
		return -1; 
	} 

	/** 
	*@description sorts the Linked List 
	*/

	sortList()
	{
		var curr = this.head,
			index = null,
			temp;

		if(this.head == null)
			return;

		while(curr.next != null)
		{
			index = curr.next;
			while(index != null)
			{
				if(curr.element > index.element)
				{
					temp = curr.element;
					curr.element=index.element;
					index.element=temp;
				}
				index=index.next;
			}
			curr=curr.next;
		}
	}
	
	/**
	*@description checks the list if empty or not 
	*/
	
	isEmpty() 
	{ 
		return this.size == 0; 
	} 

	/**
	*@description returns size of the linked list
	*/

	getSize()
	{
		return this.size;
	}

	/**
	*@description prints the list items
	*/

	printList() 
	{ 
		var curr = this.head; 
		var str = ""; 
		while (curr) 
		{ 
			str += curr.element + " "; 
			curr = curr.next; 
		} 
		return str;
	} 
}

module.exports = {
	LinkedList
}