var stake = 500;
var goal = 600;
var n = 50;
var bets = 0;
var wins = 0;

for(i=0;i<n;i++)
{
	var cash = stake;
	while(cash>0 && cash<goal)
	{
		bets++;
		if(Math.random() < 0.5){
			cash++;
		}
		else{
			cash--;
		}
	}
	console.log(cash);
	if(cash == goal)
	{
		wins++;
	}	
}
var avg = (wins/n)*100;
var avgbet = 1*bets/n;
console.log(wins + 'times' + n);
console.log(avg);
console.log(avgbet);