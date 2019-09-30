/********************************************************************************************
*Execution    :  default node     cmd> node inventorydata.js 
*
*Purpose      :  To allow user to buy items from inventory.
*
*@description  
*
*@file        :  inventorydata.js 
*@overview    :  inventory module to allow user to buy items from inventory.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var src,fs imports other files and modules for execution of program.
*/

const fs = require("fs");
var src = require("../utility/oops/inventoryutil.js")

var obj = fs.readFileSync("./inventory.json");

inventory(obj);