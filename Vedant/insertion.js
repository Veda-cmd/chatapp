var src = require('../Vedant/utility/util.js');

function insertionSort(){
var arr=[1,-1,3,2,9,8];
//var arr=["a","i","e","o","u"];
var res = [];
res = src.insertion(arr);
console.log(res);
}
insertionSort();