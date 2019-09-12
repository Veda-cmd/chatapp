const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function main()
{
	
	const fileContent = await readFile("../100MB.txt","utf-8")
	.catch(err =>
 	({
 	msg:"Error in reading file", error: err,
 	}));

 	if(fileContent.error)
 		return fileContent;

	const writeResult = await writeFile("./file1.txt",fileContent)
	.then(result => ({}))
	.catch(err =>
 	({
 	msg:"Error in writing to file", error: err,
 	}));

 	if(writeResult.error)
		return writeResult;

	return "file1.txt";
};

main().then(function(r) {
	if(r.error) {
    return console.log(
    "An error occurred, recover here. Details:", r);
  }
  return console.log("Done, no error. Result:", r);
}).catch(function(err) {
	console.log("Error",err);
});

