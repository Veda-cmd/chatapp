class Queue
{
	constructor()
	{
		this.array = [];
	}

	enqueue(x)
	{
		this.array.push(x);
	}

	dequeue()
	{
		if(this.isEmpty())
			return false;
		return this.array.shift();
	}

	front()
	{
		if(this.isEmpty())
			return false;
		return this.array[0];
	}

	getSize()
	{
		if(this.isEmpty())
			return false;
		return this.array.length;
	}

	isEmpty()
	{
		return this.array.length == 0;
	}

	printQueue() 
	{ 
	    var str = ""; 
	    for(let i = 0; i < this.array.length; i++) 
	        str += this.array[i] +" "; 
	    console.log("Queue:"+str);
	    return str; 
	} 
}


module.exports = 
{
	Queue
}