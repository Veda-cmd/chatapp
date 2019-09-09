var N = prompt("Enter a number");
if( N>0 && N<31)
{
	for(var i = 0;i<=N;i++){
		var p = Math.pow(2,i);
		document.write(p + "\n");		
	}
}