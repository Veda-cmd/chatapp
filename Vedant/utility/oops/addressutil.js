/********************************************************************************************
*Execution    :  default node     cmd> node addressutil.js 
*
*Purpose      :  To manage Address Book using create,view,delete and update.
*
*@description  
*
*@file        :  addressutil.js 
*@overview    :  Address module to manage Address Book using create,view,delete and update.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var imports other files for execution of program.
*/

const fs = require("fs");
var util = require("../util");
var list = fs.readFileSync(__dirname+"/addressbook.json","utf8");

class Address
{
    /** 
    *@description  Stores JSON object in list.
    */

    constructor()
    {
        this.list = JSON.parse(list);
    }

    /** 
    *@description  Creates address by taking user inputs and saves to address book.
    */

    create()
    {
        console.log("Enter first name(Max. 15 characters):");
        let firstName = util.inputString();
        console.log("Enter last name(Max. 15 characters):");
        let lastName = util.inputString();
        console.log("Enter address(Max. 40 characters):");
        let address = util.inputString();
        if(!address)
            return false;
        console.log("Enter City(Max. 30 characters):");
        let city = util.inputString();
        console.log("Enter State(Max. 30 characters):");
        let state = util.inputString();
        console.log("Enter Zip(Should be 6 digits):");
        let zip = util.inputInt();
        console.log("Enter Phone(Min. 10 digits):");
        let phone = util.inputInt();

        /**
        *@description Validation patterns for user inputs using regex.
        *@var {String} namePattern,addressPattern,cityPattern,zipPattern,numberPattern.
        */

        let namePattern = /^[a-zA-Z]{1,15}$/,
         addressPattern = /^[a-zA-Z ,]{1,40}$/,
         cityPattern = /^[a-zA-Z ]{1,30}$/,
         zipPattern = /^[0-9]{6}$/,
         numberPattern = /^\d{10}$/;
    
        /**
        *@description Stores results of validation of user inputs.
        *@var {Boolean} firstNameTest,lastNameTest,addressTest,cityTest,stateTest,zipTest,numberTest.
        */

        let firstNameTest = namePattern.test(firstName),
         lastNameTest =  namePattern.test(lastName),
         addressTest = addressPattern.test(address),
         cityTest = cityPattern.test(city),
         stateTest = cityPattern.test(state),
         zipTest = zipPattern.test(zip),
         numberTest = numberPattern.test(phone);

        if(!firstNameTest || !lastNameTest)
        {
            console.log("Name entered incorrect.");
            return false;
        }
        else if(!addressTest)
        {
            console.log("Address should have alphabets,spaces and comma.");
            return false;
        }
        else if(!cityTest || !stateTest || !zipTest || !numberTest)
        {
            console.log("Input in city/state/zip/phone does not match.");
            return false;
        }

        /** 
        *@description loop to check if entered name already present in address book or not.
        */

        for(let i=0;i<this.list.length;i++)
        {
            let name = this.list[i].firstName.toLowerCase();
            if( name == firstName)
            {
                console.log("Entered name already present.");
                return false;
            }
        }

        this.list.push({firstName,lastName,address,city,state,zip,phone});

        console.log("Record created");

        /** 
        *@description Sorts address book on basis of first name.
        */

        var sortList = this.list.sort((a,b) =>
        {
            if(a.firstName.toLowerCase() > b.firstName.toLowerCase())
                return 1;
            else if(a.firstName.toLowerCase() < b.firstName.toLowerCase())
                return -1;
            else 
                return 0;
        });
        fs.writeFileSync(__dirname+"/addressbook.json",JSON.stringify(sortList)); 
        console.log(sortList);        
    }

    /** 
    *@description View address of a particular person.
    */

    view()
    {
        console.log(this.list);
        console.log("Enter the first name of Profile which you want to view");
        let name = util.inputString(),viewed = false;
        if(!name)
            return false;
        for(let i=0;i<this.list.length;i++)
        {
            if(name == this.list[i].firstName)
            {
                console.log(this.list[i]);
                viewed = true;
                break;
            }
        }

        if(!viewed)
            console.log("Profile not found. Please create the profile.")
    }

    /** 
    *@description To modify details of a particular address.
    */

    update()
    {
        console.log(this.list);
        console.log("Enter the first name of Profile which you want to update");
        let name = util.inputString();
        if(!name)
            return false;
        for(let i=0;i<this.list.length;i++)
        {
            if (name == this.list[i].firstName)
            {
                console.log("Choose the detail you want to update:");
                console.log("1.Address\n2.City\n3.State\n4.Zip Code\n5.Phone\n6.Main Menu");
                let choice = util.inputInt();

                /** 
                *@description switch statement is used to execute the selected choice. 
                */
               
                switch(choice)
                {
                    case 1:
                        console.log("Enter Address to be updated:");
                        let address = util.inputString();
                        if(!address)
                            return;
                        this.list[i].address = address;
                        console.log(this.list[i]);
                        break;
                    case 2:
                        console.log("Enter name of City to be updated:");
                        let city = util.inputString();
                        if(!city)
                            return;
                        this.list[i].city = city;
                        console.log(this.list[i]);
                        break;
                    case 3:
                        console.log("Enter name of State to be updated:");
                        let state = util.inputString();
                        if(!state)
                            return;
                        this.list[i].state = state;
                        console.log(this.list[i]);
                        break;
                    case 4:
                        console.log("Enter Zip Code to be updated:");
                        let zip = util.inputInt();
                        if(!zip)
                            return;
                        this.list[i].zip = zip;
                        console.log(this.list[i]);
                        break;
                    case 5:
                        console.log("Enter Phone number to be updated:");
                        let phone = util.inputString();
                        if(!phone)
                            return;
                        this.list[i].phone = phone;
                        console.log(this.list[i]);
                        break;
                    case 6:
                        return false;
                    default:
                        console.log("Entered wrong choice");
                        break;
                }

            }
        }
        fs.writeFileSync(__dirname+"/addressbook.json",JSON.stringify(this.list));
    }

    /** 
    *@description To delete a particular address profile.
    */

    delete()
    {
        console.log(this.list);
        console.log("Enter the first name of Profile which you want to delete");
        let name = util.inputString();
        if(!name)
            return false;
        for(let i=0;i<this.list.length;i++)
        {
            if(this.list[i].firstName == name)
            {
                delete this.list[i];
                console.log("Profile has been deleted");

                /** 
                *@description To filter list after deletion to remove null object.
                */

                this.list = this.list.filter((el)=>
                {
                    return el != null;
                });
                fs.writeFileSync(__dirname+"/addressbook.json",JSON.stringify(this.list));
                return;
            }
        }
        console.log("Profile not found");
    }
}

module.exports={
    Address
}