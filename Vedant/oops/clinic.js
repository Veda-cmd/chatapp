/********************************************************************************************
*Execution    :  default node     cmd> node clinic.js 
*
*Purpose      :  To manage Clinic using add,search and print report.
*
*@description  
*
*@file        :  clinic.js 
*@overview    :  module to manage Clinic using add,search and print report.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var src,util imports other files for execution of program.
*@var {Object} clinique Stores object of Clinic.
*/

var src = require("../utility/oops/clinique"),
    util = require("../utility/util"),
    clinique = new src.Clinic(),
    i=0;

while(i==0)
{
    console.log("*******WELCOME TO CLINIQUE**********");
    console.log("1.Take Appointment\n2.Search Doctor or Patient\n3.Print List\n4.Exit");
    console.log("Enter the choice:");
    var choice = util.inputInt();

    /** 
    *@description switch statement is used to execute the selected choice. 
    */
   
    switch(choice)
    {
        case 1:
            clinique.add();
            break;
        case 2:
            clinique.search();
            break;
        case 3:
            clinique.display();
            break;
        case 4:
            i++;
            break;
        default:
            console.log("Entered choice incorrect");
            break;

    }
}