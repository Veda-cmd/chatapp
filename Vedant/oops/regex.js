var src = require("../utility/util");

regex = () =>
{
    var string = `Hello <<name>>, We have your full name as <<full name>> in our system. 
    your contact number is 91­xxxxxxxxxx.Please,let us know in case of any clarification.
    Thank you BridgeLabz 01/01/2016.`

    var name = src.inputString();
    var fullName = src.inputString();
    var number = src.inputInt(); 
    var date = src.inputString();

    let namePattern = /^[a-zA-Z]{1,10}$/;
    let fullNamePattern = /^[a-zA-Z]{1,30}\s{1,}$/;
    let numberPattern = /^[0-9]{10}$/;
    let datePattern = /^[0-9]{10}[-]{1,}$/;

    if(namePattern.test(name))
        string.replace(/<<name>>/i,name);
    else
    {
        console.log("Name is invalid"); 
        return false;
    }

    if(fullNamePattern.test(fullName))
        string.replace(/<<full name>>/i,name);
    else
        console.log("Full Name is invalid"); 

    if(numberPattern.test(number))
        string.replace(/xxxxxxxxxx/i,number);
    else
        console.log("Number is invalid"); 

    if(datePattern.test(date))
        string.replace(/01-01-2016/i,date);
    else
        console.log("Date is invalid"); 

    console.log(string);

}
regex();