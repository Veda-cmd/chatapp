/********************************************************************************************
*Execution    :  default node     cmd> node inventorymanageutil.js 
*
*Purpose      :  To allow user to add and delete items in inventory.
*
*@description  
*
*@file        :  inventorymanageutil.js 
*@overview    :  inventoryFactory module to allow user to add and delete items in inventory.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var src imports other files for execution of program.
*@const fs imports File System module for execution of program.
*/

var src = require("../util.js");
const fs = require("fs");

class inventoryFactory 
{
    inventoryFactory(obj) {

        /**
        *@description Converts buffer stream into JSON object.
        *@let {Object} object 
        */

        let object = JSON.parse(obj), 
            i = 0;
        while (i == 0) {
            console.log("WELCOME TO INVENTORY DATA MANAGEMENT PROGRAM");
            console.log(object);
            console.log("1.Insert");
            console.log("2.Delete");
            console.log("3.Exit");
            console.log("Please select the option you want:");
            let choice = src.inputInt();

            /** 
	        *@description switch statement is used to execute the selected choice. 
	        */

            switch (choice) {
                case 1:
                    console.log("Select the inventory you want to insert:");
                    console.log("1.Rice");
                    console.log("2.Pulses");
                    console.log("3.Wheat");
                    let option = src.inputInt();

                    /** 
                    *@description switch statement is used to execute the selected choice. 
                    */

                    switch (option) {
                        case 1:
                            if (object.Rice) {
                                console.log("Enter the name of Rice:");
                                let name = src.inputString();
                                if (!name)
                                    return false;
                                console.log("Enter the weight of Rice:");
                                let weight = src.inputInt();
                                if (!weight)
                                    return false;
                                console.log("Enter the price of Rice:");
                                let price = src.inputInt();
                                if (!price)
                                    return false;
                                object.Rice.push({ name, weight, price });
                                console.log(object.Rice);
                            }
                            break;

                        case 2:
                            if (object.Pulse) {
                                console.log("Enter the name of Pulse:");
                                let name = src.inputString();
                                if (!name)
                                    return false;
                                console.log("Enter the weight of Pulses:");
                                let weight = src.inputInt();
                                if (!weight)
                                    return false;
                                console.log("Enter the price of Pulses:");
                                let price = src.inputInt();
                                if (!price)
                                    return false;
                                object.Pulse.push({ name, weight, price });
                                console.log(object.Pulse);
                            }
                            break;

                        case 3:
                            if (object.Wheat) {
                                console.log("Enter the name of Wheat:");
                                let name = src.inputString();
                                if (!name)
                                    return false;
                                console.log("Enter the weight of Wheat:");
                                let weight = src.inputInt();
                                if (!weight)
                                    return false;
                                console.log("Enter the price of Wheat:");
                                let price = src.inputInt();
                                if (!price)
                                    return false;
                                object.Wheat.push({ name, weight, price });
                                console.log(object.Wheat);
                            }
                            break;

                        default:
                            console.log("Incorrect choice entered.");
                            break;
                    }
                    break;

                case 2:
                    console.log("Select the inventory you want to delete:");
                    console.log("1.Rice");
                    console.log("2.Pulses");
                    console.log("3.Wheat");
                    let option1 = src.inputInt();

                    /** 
                    *@description switch statement is used to execute the selected choice. 
                    */
                   
                    switch (option1) {
                        case 1:
                            console.log(object);
                            console.log("Enter the name of rice you want to delete:");
                            let choiceRice = src.inputString();
                            if(!choiceRice)
                                return false;
                            for (let j = 0; j < object.Rice.length; j++) {
                                if (choiceRice == object.Rice[j].name) 
                                {
                                    delete object.Rice[j];
                                    console.log(object.Rice);
                                    break;
                                }
                            }

                        case 2:
                            console.log(object);
                            console.log("Enter the name of pulse you want to delete:");
                            let choicePulse = src.inputString();
                            if(!choicePulse)
                                return false;
                            for (let j = 0; j < object.Pulse.length; j++) {
                                if (choicePulse == object.Pulse[j].name) 
                                {
                                    delete object.Pulse[j];
                                    console.log(object.Pulse);
                                    break;
                                }
                            }

                        case 3:
                            console.log(object);
                            console.log("Enter the name of pulse you want to delete:");
                            let choiceWheat = src.inputString();
                            if(!choiceWheat)
                                return false;
                            for (let j = 0; j < object.Wheat.length; j++) {
                                if (choiceWheat == object.Wheat[j].name) 
                                {
                                    delete object.Wheat[j];
                                    console.log(object.Wheat);
                                    break;
                                }
                            }

                        default:
                            console.log("Incorrect choice entered.");
                            break;
                    }
                    break;

                case 3:
                    i++;
                    break;

                default:
                    console.log("Incorrect choice entered");
                    break;
            }
        }
        console.log(object);
        fs.writeFileSync("./output.json", JSON.stringify(object));
    }

}

module.exports ={
	inventoryFactory
}