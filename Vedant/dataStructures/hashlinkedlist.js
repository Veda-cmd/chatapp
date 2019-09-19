const fs = require('fs');
var src = require('../utility/linkedlistUtil.js');

// User defined class node 
var text = fs.readFileSync('./input.txt','utf8');
// var string = "string";
var c = text.split(" ");
var ll = new src.LinkedList(); 

for(let i = 0;i<11;i++)
{
	ll.add(i);
}    

const size = ll.getSize();

for(let i = 0;i<size;i++ )
{
	ll[i] = [];
}
console.log(ll);
// var outputFile = fs.writeFileSync("./output/unorderedlist.txt",o);

hash = (a,size) =>
{
	return a % size;
}

hashTable = () =>
{

	this.add = (value) =>
	{
		let index = hash(value,size);
		if(ll[index] === undefined){
			ll[index] = [value];
		}
		else
		{
			let inserted = false;
			for(let i=0;i<ll[index].length;i++)
			{
				if(ll[index])
			}
		}
	}
}
