var year = prompt("Enter year");

if(year>999)
{
	if(year % 4 == 0 && year % 400 == 0 || year % 100 != 0)
	{
		document.write("It is a leap year");
	}
	else
	{
		document.write("Not a leap year");
	}	
}
else
{
	alert("Enter an number greater than 999");
}