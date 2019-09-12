var src = require('../Vedant/utility/util.js');
var str = "";
function Prime()
{
	var n=src.input();
	var total=n;
	while(n>-1 && n<1000)
	{
	 var mark = src.isPrime(n);
	 if(mark == 0)
		str+=" "+n;
	 n--;
	}
	console.log("Range of Primes from 0 to "+total+":");
	console.log(str);
}
Prime();

var array = str.replace(" ","").split(' ');
console.log("Array of Prime Numbers");
console.log(array);
function Anagram()
{

	for(var i=0;i<array.length;i++)
	{
		for(var j=i+1;j<array.length;j++)
		{
			if(src.anagram(array[i],array[j]))
			{
				console.log(array[i]+" "+array[j]+" are anagrams");				
			}
		}
	}
}
Anagram();

function Palindrome(){
	for(var i=0;i<array.length;i++)
	{
		if(src.isPalindrome(array[i]))
			console.log(array[i]+" is Palindrome");
	}
}
Palindrome();