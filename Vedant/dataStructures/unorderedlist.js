
const fs = require('fs');
var src = require('../utility/linkedlistUtil.js');

// User defined class node 
var text = fs.readFileSync('./input.txt','utf8');
// var string = "string";
var c = text.split(" ");
var ll = new src.LinkedList(); 

for(var i = 0;i<c.length;i++)
{
	ll.add(c[i]);
}    
 
ll.printList();
ll.removeElement('end');
ll.removeElement('sun');
ll.removeElement('owl');
ll.removeElement('monday');
ll.removeElement('end');
var o = ll.printList();
console.log(o);
var outputFile = fs.writeFileSync("./output/unorderedlist.txt",o);


