class Stack
{
	constructor()
	{
	this.array = [];
	}

	push(x)
	{
		this.array.push(x);
	}

	pop()
	{
		if(this.array.length == 0)
			return false;		
		return this.array.pop();
	}

	isEmpty()
	{
		return this.array.length == 0;
	}

	peek()
	{
		return this.array[this.array.length-1];
	}
}

module.exports = {
	Stack
}