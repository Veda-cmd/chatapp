var n = prompt('Enter a number');
var str = "abcdefghijklmnopABCDEFGHIJKLMNOPQRST123456789".split('').join(",");
var rand = Math.random();
var t = rand * n;
var s="";
while(rand > 0)
{
	s= s.concat('',str[t % str.length]);
	t = t/str.length;
}
console.log(rand);
var coupon = s.toString();
document.write(coupon);