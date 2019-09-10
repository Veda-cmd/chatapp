var src = require('../Vedant/utility/util.js');

function anagramChecker(){
var str1 = src.input();
var str2 = src.input();
var res = src.anagram(str1,str2);
if(res==true)
	console.log("Strings are anagram");
else
	console.log("Strings are not anagram");
}
anagramChecker();

