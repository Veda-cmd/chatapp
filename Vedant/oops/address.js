var src = require("../utility/oops/addressutil");
var util = require("../utility/util");

(addressBook = () =>
{

    var address = new src.Address(),
        i=0;

    while(i==0)
    {
        console.log("WELCOME TO ADDRESS BOOK PROGRAM");
        console.log("1.Create Address\n2.View Address\n3.Update Address Details\n4.Delete Address\n5.Exit");
        let choice = util.inputInt();

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