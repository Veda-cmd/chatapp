/********************************************************************************************
*Execution    :  default node     cmd> node companyshares.js 
*
*Purpose      :  To manage shares using add,remove,display and save methods.
*
*@description  
*
*@file        :  companyshares.js  
*@overview    :  module to manage shares using add,remove,display and save methods.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var fs,util,listUtil imports other files for execution of program.
*@var {Object}linkedList Stores object of LinkedList.
*@var {Date} date Stores date object.
*/

const fs = require("fs");
var util = require("../utility/util"),
 listUtil = require("../utility/linkedlistUtil"),
 linkedList = new listUtil.LinkedList(),
 i=0,
 date = new Date();

while(i==0)
{
    console.log("WELCOME TO COMPANY SHARES MAINTENANCE PROGRAM");
    console.log("1.Add Share\n2.Remove Share\n3.Display List\n4.Save List\n5.Exit");
    let choice = util.inputInt()

    /** 
    *@description switch statement is used to execute the selected choice. 
    */

    switch(choice)
    {
        case 1:
            console.log("Enter the name of share:");
            symbol = util.inputString();
            console.log("Enter the number of shares:");
            number = util.inputInt();
            dateTime = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            linkedList.add({symbol,number,dateTime});
            break;
        
        case 2:
            let array = [];
            array = linkedList.printList();
            let curr = this.head,flag = true,n=0;
            console.log("Enter the name of share:");
            let name = util.inputString();

            while(curr && flag)
            {
                n++;
                if(curr.element.symbol == name)
                {
                    linkedList.popIndex(n);
                    flag = false;
                }
                curr = curr.next;
            } 
            if(flag)
                console.log("Index not found");
            console.log("Updated Linked List");
            array = [];
            array = linkedList.printList();
            console.log(array);         
            break;

        case 3:
            console.log(linkedList);
            break;

        case 4:
            fs.writeFileSync("shares.json",JSON.stringify(linkedList));
            break;

    }
}
