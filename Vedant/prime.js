var src = require('../Vedant/utility/util.js');
var test = require('./test/primeTest.js');

function Prime()
{
	var n=parseInt(src.input());
	var str = "";
	while(n>-1 && n<1000)
	{
	 var mark = src.isPrime(n);
	 if(mark == 0)
		str+=n+" ";
	 n--;
	}
	console.log(str);
}
Prime();