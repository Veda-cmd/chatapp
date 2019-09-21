class Deque
 {
 	constructor()
	{
		this.array = [];
		this.front = -1;
		this.rear = -1;
		this.size = 0;
	}

	add(x)
	{
		if(this.isEmpty())
		{
			this.front++;
			this.rear++;
		}
		else
			this.rear++;
		this.array[this.rear]=x;
		this.size++;

	}

	deleteFront()
	{
		if(this.isEmpty())
			console.log("Underflow");

		else if(this.front>this.rear)
		{
			this.front=-1,this.rear=-1;
		}

		else
		{
			return this.array.shift();
			this.front++;
		}
		this.size--;

	}

	deleteRear()
	{
		if(this.isEmpty())
			console.log("Underflow");
		else if(this.front>this.rear)
		{
			this.front=-1, this.rear=-1;
		}
		else
		{
			return this.array.pop();
			this.rear--;
		}
		this.size--;

	}

	isEmpty()
	{
		return this.array.length == 0;
	}

	getSize(){
		return this.size;
	}

	printQueue() 
	{ 
	    var str = ""; 
	    for(let i = 0; i < this.array.length; i++) 
	        str += this.array[i] +" "; 
	    console.log("Queue: "+str);
	    return str; 
	} 

}

module.exports={
	Deque
}