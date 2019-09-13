
var rl= require('readline-sync');

module.exports ={

	inputInt: function()
	{	
		let val = parseInt(rl.question("Input:"));
		return val;
	},

	inputStr: function()
	{	
		let val = rl.question("Input:");
		if(isNaN(val))
			return val;
	},

    anagram: function(str1,str2)
	{
		if(!isNaN(str1) || !isNaN(str2))
			return false;
		if(str1.length!=str2.length)
			return false;
		else
		{	
			str1=str1.toLowerCase();
			str2=str2.toLowerCase();
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
			if(n%i==0)
			{
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
			for(var j=i+1;j<arr.length;j++){
				if (arr[i]>arr[j]){
					temp=arr[i];
					arr[i]=arr[j];
					arr[j]=temp;
				}
			}
		}
		return arr;
	},

	isPalindrome: function(array){
		var temp = array;
		var sum = 0;
		while(temp!=0){
			var rem = temp%10;
			sum= (sum*10) + rem;
			temp=parseInt(temp/10);
		}

		if(sum==array)
			return true;
		else 
			return false;

	},

	binarySearch: function myself(low,high)
	{		
			var res = "true";
			if(high-low == 1)
				return low;
			var mid = parseInt(low + (high-low)/2);
			console.log("Is the number less than "+mid+"?");
			var boolean = rl.question("Please enter true or false:");
			if(boolean==res){
				return myself(low, mid);
			}
			else{
				return myself(mid,high);
			}
	},

	insertion : function(arr)
	{
		var n=arr.length;

		for(var i=1;i<n;i++){
			var value = arr[i];
			var j = i;
			while(j>0 && arr[j-1]>value)
			{
				arr[j] = arr[j-1];
				j--;
			}
			arr[j]=value;
		}
		return arr;
	},

	binarySearchInteger: function search(arr,low,high,x)
	{	
		while(high >= low)
		{	
			var mid = Math.round(low + (high-low)/2);
			if(arr[mid] == x)
				return [arr[mid],mid];
			if(arr[mid] > x)
				return search(arr,low,mid-1,x);
			return search(arr,mid+1,high,x);
		}
		return -1;
	},

	primeFactors: function(n)
	{	var string = "";
		if(n % 2 == 0)
		{
			string+= 2+" ";
			n=parseInt(n/2);
		}

		for(var i=3;i*i<=n;i+=2)
		{
			while(n % i == 0)
			{
				string+= i+" ";
				n=parseInt(n/i);
			}
			
		}

		if(n>2)
			string+=n;
		return string;

	}
	
}