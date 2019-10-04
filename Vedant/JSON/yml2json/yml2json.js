var inputfile = 'input.yml';
var outputfile = 'output.json';
var yaml = require('js-yaml');
var fs = require('fs');
var obj = yaml.load(fs.readFileSync(inputfile, {encoding: 'utf-8'}));
fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));
