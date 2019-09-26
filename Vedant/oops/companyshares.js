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
            let array =[];
            array = linkedList.printList();
            let curr = this.head,flag = true,n=0;

            while(curr && flag)
            {
                n++
                console.log("Enter the name of share:");
                let name = util.inputString();
                if(curr.element.symbol == name)
                {
                    linkedList.popIndex(n);
                    flag = false;
                }
                curr = curr.next;
            }           
            break;

        case 3:
            console.log(linkedList);
            break;

        case 4:
            fs.writeFileSync("shares.json",JSON.stringify(linkedList));
            break;

    }
}
