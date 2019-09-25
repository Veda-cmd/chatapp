const fs = require("fs");
var src = require("../utility/oops/util.js")

var obj = fs.readFileSync("./inventory.json");

inventory(obj);