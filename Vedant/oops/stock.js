/********************************************************************************************
*Execution    :  default node     cmd> node stock.js 
*
*Purpose      :  To allow user to add stocks and display report.
*
*@description  
*
*@file        :  stock.js 
*@overview    :  read module to add stocks and display report.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var src imports other files for execution of program.
*/

var src = require("../utility/oops/stockinventory");

/**
*@description Stores object of Stock class.
*@var stock imports other files for execution of program.
*/

var stock = new src.Stock();
stock.read();