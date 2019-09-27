
var src = require("../utility/oops/stockaccountutil");
var util = require("../utility/util");

var stock = new src.stockAccount(),
    i=0;

while(i==0)
{
    console.log("WELCOME TO STOCK ACCOUNT PROGRAM");
    console.log("1.Buy Stock");
    console.log("2.Sell Stock");
    console.log("3.Display Stock Account");
    console.log("4.Save Stock Account Details");
    console.log("5.Display Company Shares List");
    console.log("6.Display Total Value of Stock Account");
    console.log("7.Exit")
    let choice = util.inputInt();
    
    switch(choice)
    {
        case 1:
            console.log("List of Stocks available");
            stock.printList();
            console.log("Enter the name of stock you want to buy");
            let buyName = util.inputString();
            if(!buyName)
                return false;
            console.log("Enter the number of shares you want to buy");
            let buyNumber = util.inputInt();
            if(!buyNumber)
                return false;
            stock.buy(buyNumber,buyName);
            stock.printStock();
            break;

        case 2:
            console.log("Available Stocks in your account");
            stock.printStock();
            console.log("Enter the name of stock you want to buy");
            let sellName = util.inputString();
            if(!sellName)
                return false;
            console.log("Enter the number of shares you want to buy");
            let sellNumber = util.inputInt();
            if(!sellNumber)
                return false;
            stock.sell(sellNumber,sellName);
            stock.printStock();
            break;

        case 3:
            stock.printStock();
            break;
        
        case 4:
            stock.save();
            break;
        
        case 5:
            stock.printList();
            break;

        case 6:
            stock.valueOf();
            break;
            
        case 7:
            i++;
            break;
        
        default:
            console.log("Incorrect choice entered");
            break;        
    }
}