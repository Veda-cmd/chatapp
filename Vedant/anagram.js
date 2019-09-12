var src = require('../Vedant/utility/util.js');

var res;
function anagramChecker(){
var str1 = src.input();
var str2 = src.input();
console.log("Strings entered: "+str1+" "+str2);
var promise = new Promise (function(resolve,reject)
{
	res=src.anagram(str1,str2);
	if(res==true)
		resolve();
	else
		reject();
});

promise.
then(function()
{
	console.log("Result: Strings are anagram");
}).catch(function()
{
	console.log("Result: Strings are not anagram");
});
}
// if(res==true)
// 	console.log("Strings are anagram");
// else
// 	console.log("Strings are not anagram");
// }
anagramChecker();