/**********************************************************************************
*Purpose      :  to export functions for programs
*
*@description  
*
*@file        :  util.js
*@overview    :  module.exports to generate a random number.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
***********************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var rl.
*/ 

var rl= require('readline-sync');

module.exports ={

	/**
	*@description Function validate and returns number as input.
	*@var {Number} val
	*/

	inputInt: function()
	{	
		let val = Number(rl.question("Input an number:"));
		if(isNaN(val))
		{
			console.log('Input should be a valid number');
			return false;
		}
		else
			return val;
	},

	/**
	*@description Function returns string as input.
	*@var {string} val
	*/

	inputStr: function()
	{	
		try
		{
			let val = rl.question("Input:");
			if(!isNaN(val))
			{
				throw 'Input should be a valid string';
				return false;
			}
			else
				return val;
		}
		catch(err){
			console.log(err);	
		}
	},

	/**
	*@description Function checks whether the input strings are valid or not.Then if the length of 
	*input strings matches,it goes to else part. Strings containing uppercase characters are first 
	*converted to lowercase and sorted and stored in variables string1 and string2. Each character
	*is compared of both strings and if matched, returns true to the main program.  
	*@var {string} string1, string2.
	*/

    anagram: function(str1,str2)
	{
		try
		{
			if(!isNaN(str1) || !isNaN(str2) || str1 == undefined || str2 == undefined)
				return false;

			if(str1.length!=str2.length)
			{	
				console.log("Lengths are different");
				return false;
			}
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
					}			
				}
				return true;
			}
		}
		catch(err)
		{
			console.log(err.message);
		}
	},

	/**
	*@description Same working as above function. Input is in form of array elements.
	*/

	anagramPrime: function(str1,str2)
	{	
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
				}			
			}
			return true;
		}
	},

	/**
	*@description Function checks whether the input is prime or not. If valid, loop is iterated 
	*until n/2. If n is divisible by 2,flag is set to 1 and loop ends. Function returns value of 
	*flag to the main program.  
	*@var {Number} m,i,flag
	*/

	isPrime: function(n)
	{	
		if (isNaN(n) || n<0)
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

	/**
	*@description Function sorts the array. If valid, loop is iterated from i =0 to i = arr.length. 
	*Each element is compared with other elements in the array and swapped. Sorted array is returned
	*to the main program. 
	*@var {Number} i,j.
	*/

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

	/**
	*@description Function checks if the reverse of given input is same as the entered input. A 
	*boolean value is returned to the main program as output.
	*@var {Array},rem,sum.
	*/

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

	/**
	*@description Function recursively runs till it finds the number.If high and low are equal, 	
	*low value is returned to the main program 
	*@var {Number} high,low.
	*/
	binarySearch: function myself(low,high)
	{		
			var res = "true";
			if(high-low == 1)
				return low;
			var mid = parseInt(low + (high-low)/2);
			console.log("Is the number less than "+mid+"?");
			var boolean = rl.question("Please enter true or false:");
			if(boolean==res)
				return myself(low, mid);			
			else
				return myself(mid,high);
	},

	/**
	*@description Function sorts the array. Insertion sort is a simple sorting algorithm that 
	*builds the final sorted array (or list) one item at a time. ith element is stored in variable.
	*Then comparison of previous element is made using j until j = 0. The ith element placed in 
	*variable is stored at current value of j after while loop finishes.Sorted array is returned
	*to the main program.
	*@var {Number} n,i,j,value.
	*/

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

	/**
	*@description Function recursively runs and finds the number unti low becomes greater than high
	*.If mid value corresponds to the searched value, value and its index is returned to main 
	*program.
	*@var {Number} high,low,mid.
	*/

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

	/**
	*@description Function generates prime factors for the given input. Till n is divisible by 2,
	*2 is appended to string. Now the number will be odd after this step. So we use a for loop with
	*i=3 and iterate it until i*i<=n.i is incremented by i+2 since the number is odd. If for loop
	*exits, the remaining integer is appended to string as it is a prime number.
	*@var {String} string,{Number} n.
	*/

	primeFactors: function(n)
	{	
		if(n < 0 || n == 0 || n == undefined)
			return -1;

		var string = "";
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

	/**
	*@description Function checks whether the input is a leap year or not.If a year is multiple  
    *of 400 or 4 and not 100,then it is a leap year. 
	*/

	leapYear: function(year)
	{
		if(isNaN(year) || year < 0)
			return -1;
		if(year % 400 == 0 || year % 4 == 0 && year % 100 != 0)
			return 0;
		else 
			return 1;
	},

	/**
	*@description Function prints the values of power of 2 from i=0 to i=n. Each value is appended
	*to string and the final string is returned to the main program.
	*@var {String} num. 
	*/

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

	/**
	*@description Function to print triplets with 0 sum. If sum of three elements is less than zero
	*then increment in left else increment in right.
	*@var {boolean} boolean,{number} first,low,high,sum.
	*/
	
	sumOfElement: function(arr,n)
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
	},

	vendingMachine: function change(notes,money,i,total)
	{
		if(money == 0)
			return -1;
		if(money>=notes[i])
		{
			var calNotes = parseInt(money/notes[i]);
			money = money%notes[i];
			total += calNotes;
			console.log("Number of "+notes[i]+" notes ---> "+calNotes );
			i=i+1;
		}				
		return change(notes,money,i,total);
	},

	monthlyPayment: function(P,Y,R)
	{	
		if(P<0 || P == undefined || R<0 || R == undefined || Y < 0 || Y == undefined)
			return -1;
		var n = Number(12 * Y);
		var r = parseFloat(R/(12*100));
		var pow = Math.pow((1+r),-n);
		var payment = P * r/(1-pow);
		console.log("Monthly payment is "+payment);
		return 1;
	},
	
}