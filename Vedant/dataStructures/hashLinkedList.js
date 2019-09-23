const fs = require('fs');
var src = require('../utility/linkedlistUtil.js');

// User defined class node 
// var text = fs.readFileSync('./input.txt','utf8');
// var c = text.split(" ");

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

hash = (a,size) =>
{
	return a % size;
}

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
		
		for(let i=0;i<ll[index].length;i++)
		{
			if(ll[index][i] === value)
			{
				ll[index][i] = value;
				inserted = true;
			}	
		}

		if(inserted == false){
			ll[index].push(value);
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

		if(ll[index].length === 1 && ll[index][0] === value)
      		delete ll[index]; 
      	else 
    	{
      		for (var i = 0; i < ll[index].length; i++) 
      		{
        		if (ll[index][i] === value)
        		{ 
          			delete ll[index][i];
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
			str+=ll[i]+",";
		}
		console.log(ll);
		return str;
	}
}

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
