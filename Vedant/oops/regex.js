var src = require("../utility/util");

regex = () =>
{
    let string = `Hello <<name>>, we have your full name as <<full name>> in our system. 
    Your contact number is 91­xxxxxxxxxx.Please let us know in case of any clarification.
    Thank you BridgeLabz,01/01/2016.`
    let string1;

    console.log("Enter your first name:");
    let name = src.inputString();
    console.log("Enter your full name:");
    let fullName = src.inputString();
    console.log("Enter your phone number:");
    let number = src.inputInt();
    console.log("Enter your date(Format:dd/mm/yyyy):");
    let date = src.inputString();

    let namePattern = /^[a-zA-Z]{1,15}$/;
    let fullNamePattern = /^[a-zA-Z ]{1,40}$/;
    let numberPattern = /^\d{10}$/;
    let datePattern = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

    let nameTest = namePattern.test(name);
    let fullNameTest = fullNamePattern.test(fullName);
    let numberTest = numberPattern.test(number);
    let dateTest = datePattern.test(date);

    if( nameTest && fullNameTest && numberTest && dateTest)
    {
      string1 = string.replace("<<name>>",name).replace("<<full name>>",fullName).replace("xxxxxxxxxx",number).replace("01/01/2016",date);
    }
    else
        return false;
    
    console.log(string1);
}
regex();