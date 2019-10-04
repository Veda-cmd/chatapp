/********************************************************************************************
*Execution    :  default node     cmd> node stockinventory.js 
*
*Purpose      :  To allow user to add stocks and display report.
*
*@description  
*
*@file        :  stockinventory.js 
*@overview    :  Stock module to add stocks and display report.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var src imports other files for execution of program.
*@constant fs imports File System module.
*/

const fs = require("fs");
var src = require('../util');

class Stock
{
    /**
    *@description initializes array and variable. 
    */

    constructor(){
        this.array =[];
        this.total=0;
    }

    /**
    *@description Takes user inputs and displays the Stock report. 
    */

    read()
    {
        console.log("Enter number of stocks");
        let n = src.inputInt();
        if(!n)
            return false;

        for(let i=0;i<n;i++)
        {
            console.log("Enter the name of stock");
            let name = src.inputString();
            if(!name)
                return false;
            console.log("Enter the number of shares");
            let number = src.inputInt();
            if(!number)
                return false;
            console.log("Enter the price of one share");
            let price = src.inputInt();
            if(!price)
                return false;
            this.array.push({name,number,price});
            this.value(name,number,price);
    
        }
        console.log("STOCK REPORT:");
        for(let i=0;i<this.array.length;i++)
        {
            console.log(this.array[i]);
        }
        console.log(`Total value of all stocks is ${this.total}`);
        this.save();
    }

    /**
    *@description Calculates value of each stock. 
    */

    value(x,y,z)
    {   
        let result = y*z;
        this.total+=result;
        console.log(`The value of ${x} is ${result}`);
    }

    /**
    *@description Saves stocks entered to file.
    */
    save()
    {
        fs.writeFileSync("stockinventory.json",JSON.stringify(this.array));
    }

}

module.exports={
    Stock
}