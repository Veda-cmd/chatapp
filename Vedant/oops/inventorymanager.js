const fs = require("fs");
var src = require("../utility/oops/inventorymanageutil");

var obj = fs.readFileSync("./inventory1.json");

class inventoryManager 
{
    inventoryManager() 
    {
        let inventoryfactory = new src.inventoryFactory();
        inventoryfactory.inventoryFactory(obj);
    }
}



var inventory = new inventoryManager();
inventory.inventoryManager();