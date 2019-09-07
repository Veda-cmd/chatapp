
var N = 10;
var i;
var sum = parseFloat('0.0');
if(N!=0)
{
  for (i=0;i<N;i++)	 
  {
  	sum = sum + (1/(i+1));
  	console.log(sum);
  }
}