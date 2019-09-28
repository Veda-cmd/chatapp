var src = require("../utility/oops/clinique"),
    util = require("../utility/util"),
    clinique = new src.Clinic(),
    i=0;

while(i==0)
{
    console.log("*******WELCOME TO CLINIQUE**********");
    console.log("1.Take Appointment\n2.Search Doctor or Patient\n3.Print List\n4.Exit");
    console.log("Enter the choice:");
    var choice = util.inputInt();
    switch(choice)
    {
        case 1:
            clinique.add();
            break;
        case 2:
            clinique.search();
            break;
        case 3:
            clinique.display();
            break;
        case 4:
            i++;
            break;
        default:
            console.log("Entered choice incorrect");
            break;

    }
}