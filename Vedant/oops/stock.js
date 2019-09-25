var src = require('../utility/util');

class Stock
{
    constructor(){
        this.array =[];
        this.total=0;
    }

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
    }

    value(x,y,z)
    {   
        let result = y*z;
        this.total+=result;
        console.log(`The value of ${x} is ${result}`);
    }

}

var stock = new Stock();
stock.read();