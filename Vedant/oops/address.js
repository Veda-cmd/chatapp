/********************************************************************************************
*Execution    :  default node     cmd> node address.js 
*
*Purpose      :  To manage Address Book using create,view,delete and update.
*
*@description  
*
*@file        :  address.js 
*@overview    :  addressBook to manage Address Book using create,view,delete and update.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var imports other files for execution of program.
*/

var src = require("../utility/oops/addressutil");
var util = require("../utility/util");

(addressBook = () =>
{
    /**
    *@description Store object of address.
    *@var {Object} address 
    */

    var address = new src.Address(),
        i=0;

    while(i==0)
    {
        console.log("WELCOME TO ADDRESS BOOK PROGRAM");
        console.log("1.Create Address\n2.View Address\n3.Update Address Details\n4.Delete Address\n5.Exit");
        let choice = util.inputInt();

        /** 
        *@description switch statement is used to execute the selected choice. 
        */

        switch(choice)
        {
            case 1:
                address.create();
                break;
            case 2:
                address.view();
                break;
            case 3:
                address.update();
                break;
            case 4:
                address.delete();
                break;
            case 5:
                i++;
                break;
            default:
                console.log("Incorrect choice.")
                break;     

        }
    }
})();