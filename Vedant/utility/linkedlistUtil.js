class Node { 
	// constructor 
	constructor(element) 
	{ 
		this.element = element; 
		this.next = null;
	} 
} 

// linkedlist class 
class LinkedList 
{ 
	constructor() 
	{ 
		this.head = null; 
		this.size = 0; 
	} 

	// adds an element at the end 
	// of list 
	add(element) 
	{ 
		// creates a new node 
		var node = new Node(element); 

		// to store current node 
		var current; 

		// if list is Empty add the 
		// element and make it head 
		if (this.head == null) 
			this.head = node; 
		else { 
			current = this.head; 

			// iterate to the end of the 
			// list 
			while (current.next) { 
				current = current.next; 
			} 

			// add node 
			current.next = node; 
		} 
		this.size++; 
	} 

// insert element at the position index 
// of the list 
	insertAt(element, index) 
	{ 
		if (index > 0 && index > this.size) 
			return false; 
		else 
		{ 
			// creates a new node 
			var node = new Node(element); 
			var curr, prev; 

			curr = this.head; 

			// add the element to the 
			// first index 
			if (index == 0) { 
				node.next = head; 
				this.head = node; 
			} else { 
				curr = this.head; 
				var it = 0; 

				// iterate over the list to find 
				// the position to insert 
				while (it < index) { 
					it++; 
					prev = curr; 
					curr = curr.next; 
				} 

				// adding an element 
				node.next = curr; 
				prev.next = node; 
			} 
			this.size++; 
		} 
	} 

	// removes a given element from the 
	// list 
	removeElement(element) 
	{ 
		var current = this.head; 
		var prev = null; 
		// iterate over the list 
		while (current != null) 
		{ 
			// comparing element with current 
			// element if found then remove the 
			// and return true 
			if (current.element == element) { 
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
	
	// checks the list for empty 
	isEmpty() 
	{ 
		return this.size == 0; 
	} 

	getSize()
	{
		return this.size;
	}

	// prints the list items 
	printList() 
	{ 
		var curr = this.head; 
		var str = ""; 
		while (curr) { 
			str += curr.element + " "; 
			curr = curr.next; 
		} 
		return str;
	} 
}

module.exports = {
	LinkedList
}