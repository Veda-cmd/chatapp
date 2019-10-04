/********************************************************************************************
*Execution    :  default node     cmd> node regex.js
*
*Purpose      :  To replace a string using regex.
*
*@description  
*
*@file        :  regex.js
*@overview    :  regex module to replace a string using regex.
*@author	    :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 
/**
*@description Dependencies require to be installed before the execution of this file.
*@var src imports other files for execution of program.
*/

var src = require("../utility/util");

regex = () =>
{
  /**
  *@description Stores input and output message.
  *@let {String} string,string1
  */ 

  let string = `Hello <<name>>, we have your full name as <<full name>> in our system. 
  Your contact number is 91­xxxxxxxxxx.Please let us know in case of any clarification.
  Thank you BridgeLabz,01/01/2016.`
  let string1;

  /**
  *@description Takes user input.
  *@let {String} name,fullName,number,date.
  */ 

  console.log("Enter your first name:");
  let name = src.inputString();
  console.log("Enter your full name:");
  let fullName = src.inputString();
  console.log("Enter your phone number:");
  let number = src.inputInt();
  console.log("Enter your date(Format:dd/mm/yyyy):");
  let date = src.inputString();

  /**
  *@description Validation patterns for user inputs.
  *@let {String} namePattern,fullNamePattern,numberPattern,datePattern.
  */ 

  let namePattern = /^[a-zA-Z]{1,15}$/;
  let fullNamePattern = /^[a-zA-Z ]{1,40}$/;
  let numberPattern = /^\d{10}$/;
  let datePattern = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

  /**
  *@description Stores results of validation of user inputs. 
  *@let {Boolean} nameTest,fullNameTest,numberTest,dateTest.
  */ 

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