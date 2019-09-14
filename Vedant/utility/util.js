
var rl= require('readline-sync');

module.exports ={

	inputInt: function()
	{	
		let val = Number(rl.question("Input an number:"));
		if(!isNaN(val))
			return val;
		else
			console.log('Input should be a valid number');
	},

	inputStr: function()
	{	
		let val = rl.question("Input:");
		if(isNaN(val))
			return val;
		else
			console.log('Input should be a valid string');
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
		if (isNaN(n))
			return -1;
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
		while (n % 2 == 0)
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
	},

	gambler: function(s,g,n)
	{	
		var bets = 0;
		var wins = 0;
		for(i=0;i<n;i++)
		{
			var cash = s;
			while(cash>0 && cash<g)
			{
				bets++;
				if(Math.random() < 0.5)
					cash++;
				else
					cash--;
			}
			if(cash == g)
				wins++;	
		}
		return wins;
	},

	powerOfTwo: function(n)
	{
		var num = "";
		if( n>0 && n<31)
		{
			for(var i = 0;i<=n;i++)
			{
				var p = Math.pow(2,i);
				num+= p +" ";	
			}
		}
		return num;
	},

	arrayTwoD: function(m,n)
	{	

		var src = require('./util.js');
		var i,j;
		var intArray = [m][n];
		console.log(typeof intArray);
		for(i=0;i<m;i++)
		{
			for(j=0;j<n;j++)
				intArray[i][j]=src.inputInt();
		}

		for(i=0;i<m;i++)
		{
			for(j=0;j<n;j++)
				console.log(intArray[i][j]);
		}
		

		var doubleArray = new Array(m,n);
		for(i=0;i<m;i++)
		{
			for(j=0;j<n;j++)
				doubleArray[i][j]=src.inputInt();
		}
		console.log(doubleArray);

		var booleanArray = new Array(m,n);
		for(i=0;i<m;i++)
		{
			for(j=0;j<n;j++)
				booleanArray[i][j]=src.inputInt();
		}
		console.log(booleanArray);
	},

	sumOFElement: function(arr,n)
	{
		var boolean = false;
		for(var j=0;j<n-1;j++)
		{
			var first = arr[j];
			var low = j+1;
			var high = n - 1;

			while(low<high)
			{
				var sum = first + arr[low] + arr[high];
				if(sum == 0)
				{
					console.log(first,arr[low],arr[high]);
					low++;
					high--;
					boolean = true;
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
		return boolean;
	}
	
}