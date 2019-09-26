const fs = require("fs");
var list = fs.readFileSync(__dirname + "/companyshares.json",'utf8');
var account = fs.readFileSync(__dirname + "/stockaccount.json",'utf8');
var listObject = JSON.parse(list);

class stockAccount
{
    constructor()
    {
        this.accountObject = JSON.parse(account);
    }

    valueOf()
    {
        let totalPrice = 0;
        for(let i=0;i<this.accountObject.Stock.length;i++)
        {
            totalPrice += this.accountObject.Stock[i].price;
        }
        console.log(totalPrice);
    }

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

    save()
    {
        fs.writeFileSync(__dirname+"/stockaccount.json",JSON.stringify(this.accountObject));
    }

    printStock()
    {
        console.log(this.accountObject.Stock);
    }

    printList()
    {
        console.log(listObject.list);
    }
}

module.exports={
    stockAccount
}