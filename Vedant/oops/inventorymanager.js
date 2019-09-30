/********************************************************************************************
*Execution    :  default node     cmd> node inventorymanager.js 
*
*Purpose      :  To allow user to add and delete items in inventory.
*
*@description  
*
*@file        :  inventorymanager.js 
*@overview    :  inventoryManager module to allow user to add and delete items in inventory.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var src imports other files for execution of program.
*@const fs imports modules for execution of program.
*@var obj reads input file. 
*/

const fs = require("fs");
var src = require("../utility/oops/inventorymanageutil");
var obj = fs.readFileSync("./inventory1.json");

class inventoryManager 
{
    inventoryManager() 
    {
        /**
        *@description Stores inventoryFactory class Object.
        *@var {Object} inventoryfactory
        */

        let inventoryfactory = new src.inventoryFactory();
        inventoryfactory.inventoryFactory(obj);
    }
}

/**
*@description Stores inventoryManager class Object.
*@var {Object} inventory
*/

var inventory = new inventoryManager();
inventory.inventoryManager();