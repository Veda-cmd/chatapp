var prompt = require('prompt');

var inputArray = [];
var size = prompt('Enter size of array'); 

for(var i=0; i<size; i++) 
{
	inputArray[i] = prompt('Enter Element ' + (i+1));
}

inputArray.sort(function(a, b) 
{
  return a - b;
});

for(var j=0;j<size-1;j++)
{
	var first = parseInt(inputArray[0]);
	var low = j+1;
	var high = size - 1;
	var sum = first + parseInt(inputArray[low]) + parseInt(inputArray[high]);
	while(low<high)
	{
		if(sum == 0)
		{
			console.log(first,inputArray[low],inputArray[high]);
			low++;
			high--;
		}
		else if(sum < 0)
		{
			low++;
		}
		else
		{
			high--;
		}
	}
}


