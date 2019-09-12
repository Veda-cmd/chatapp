var src = require('../Vedant/utility/util.js');

var year = src.input("Enter year");

if(year>999)
{
	if((year % 4 == 0) && (year % 100 == !0) || (year % 400 == 0))
		console.log("It is a leap year");
	else
		console.log("Not a leap year");
}
else
{
	console.log("Enter an number greater than 999");
}