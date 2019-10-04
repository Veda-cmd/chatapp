/********************************************************************************************
*Execution    :  default node     cmd> node stockaccountutil.js 
*
*Purpose      :  To manage Stock Account using buy,sell,display and save methods.
*
*@description  
*
*@file        :  stockaccountutil.js 
*@overview    :  stockAccount module to manage Stock Account using buy,sell,display and save methods.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description reads input files for execution of program..
*@var list,account  
*@const fs imports File System module.
*@var listObject converts buffer stream into JSON object.
*/

const fs = require("fs");
var list = fs.readFileSync(__dirname + "/companyshares.json",'utf8');
var account = fs.readFileSync(__dirname + "/stockaccount.json",'utf8');
var listObject = JSON.parse(list);

class stockAccount
{
    /** 
    *@description  Stores JSON object in accountObject.
    */

    constructor()
    {
        this.accountObject = JSON.parse(account);
    }

    /** 
    *@description  Calculates total value of stocks in account.
    */

    valueOf()
    {
        let totalPrice = 0;
        for(let i=0;i<this.accountObject.Stock.length;i++)
        {
            totalPrice += this.accountObject.Stock[i].price;
        }
        console.log(`Total value of stock account is ${totalPrice}`);
    }

    /** 
    *@description updates listObject when user wants to buy. If stock already present, updates
    *quantity of the same.
    */

    buy(quantity,name)
    {
        let price, bought = false,listSub = false;

        for(let i=0;i<listObject.list.length;i++)
        {   
            if(listObject.list[i].name == name && listObject.list[i].quantity > quantity)
            {
                listObject.list[i].quantity -= quantity;
                price = listObject.list[i].price;
                listSub = true;
                break;
            }
        }

        if(listSub == false)
            return false;

        for(let j=0;j<this.accountObject.Stock.length;j++)
        {
            if(this.accountObject.Stock[j].name==name)
            {
                this.accountObject.Stock[j].quantity+= quantity;
                bought = true;
                break;
            }
        }

        if(bought == false)
            this.accountObject.Stock.push({name,quantity,price});
        
    }

    /** 
    *@description updates listObject when user wants to sell. If stock already present, updates
    *quantity of the same.
    */

    sell(quantity,name)
    {
        let sold = false;

        for(let j=0;j<this.accountObject.Stock.length;j++)
        {
            if(this.accountObject.Stock[j].name==name && this.accountObject.Stock[j].quantity >= quantity)
            {
                this.accountObject.Stock[j].quantity-= quantity;
                sold = true;
                break;
            }
        }

        if(sold == false)
            return false;

        for(let i=0;i<listObject.list.length;i++)
        {
            if(listObject.list[i].name == name)
            {
                listObject.list[i].quantity += quantity;
                break;
            }
        }

        console.log(this.accountObject);
        console.log(listObject);        
    }

    /** 
    *@description saves Stock Account to file.
    */

    save()
    {
        fs.writeFileSync(__dirname+"/stockaccount.json",JSON.stringify(this.accountObject));
    }

    /** 
    *@description prints Stock Account report.
    */

    printStock()
    {
        console.log(this.accountObject.Stock);
    }

    /** 
    *@description prints list of Stocks available.
    */

    printList()
    {
        console.log(listObject.list);
    }
}

module.exports={
    stockAccount
}