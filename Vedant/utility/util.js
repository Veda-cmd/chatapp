
var rl= require('readline-sync');

module.exports ={

	input: function()
	{	
		let val = rl.question("Input:");
		return val;
	},

    anagram: function(str1,str2)
	{
		if(str1.length!=str2.length)
		{
			console.log("Length of strings are different");
			return false;
		}
		else
		{
			var string1 = [];
			var string2 = [];
			string1 = str1.split('').sort().join('');
			string2 = str2.split('').sort().join('');
			for(var i = 0;i<str1.length;i++)
			{
				if(string1[i]!=string2[i])
				{
					return false;
					break;
				}			
			}
			return true;
		}
	},

	isPrime: function(n)
	{			
		var m = n/2,flag=0;			
		for(var i=2;i<=m;i++)
		{
			if(n%i==0){
				flag=1;
				break;
			}				
		}
		return flag;		
	},

	bubbleSort: function(arr)
	{
		var temp=0;
		for(var i=0;i<arr.length;i++){
			for(var j=1;j<(arr.length-i);j++){
				if (arr[j-1]>arr[j]){
					temp=arr[j-1];
					arr[j-1]=arr[j];
					arr[j]=temp;
				}
			}
		}
		return arr;
	}
}