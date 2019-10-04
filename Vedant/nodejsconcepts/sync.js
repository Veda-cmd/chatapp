const fs = require('fs');

const readFile = fs.readFileSync;
const writeFile =fs.writeFileSync;

function main()
{
	
	const fileContent = readFile("../100MB.txt");
	const writeResult =	writeFile("./file3.txt",fileContent);
}
main();