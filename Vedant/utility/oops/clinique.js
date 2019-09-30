/********************************************************************************************
*Execution    :  default node     cmd> node clinique.js 
*
*Purpose      :  To manage Clinic using add,search and print report.
*
*@description  
*
*@file        :  clinique.js 
*@overview    :  Clinic module to manage Clinic using add,search and print report.
*@author	  :  Vedant Nare <vedant.nare04@gmail.com>
*@version     :  1.0
*********************************************************************************************/ 

/**
*@description Dependencies require to be installed before the execution of this file.
*@var util imports other files for execution of program.
*@const fs imports File System module.
*@var {Object} converts buffer stream into JSON object.
*/

const fs = require("fs");
var util = require("../util");
var list = fs.readFileSync(__dirname+"/clinic.json");
var clinic = JSON.parse(list);

class Clinic {

    /**
    *@description intitalizes an array and display function.
    */

    constructor() {
        this.appointments = [];
        this.display = () => {
            console.log(clinic);
        }
    }

    /**
    *@description Allows patient to take a appointment with doctor.
    */

    add() {

        /**
        *@description Asks for user inputs and checks whether record is present in list. 
        */

        console.log(clinic.Patient);
        console.log("Enter name of Patient from above list:");
        let patient = util.inputString(), match = false;
        if (!patient)
            return false;
        for (let i = 0; i < clinic.Patient.length; i++) {
            if (clinic.Patient[i].name == patient) {
                match = true;
                break;
            }
        }
        if (match == false) {
            console.log("Patient Record not found.");
            return;
        }

        for (let a = 0; a < clinic.Doctor.length; a++) {
            console.log("Name: " + clinic.Doctor[a].name, ",Specialization: " + clinic.Doctor[a].specialization,
                ",Availability: " + clinic.Doctor[a].availability);
        }
        console.log("Enter name of Doctor from above list:");
        let doctor = util.inputString(),
            matched = false;

        if (!doctor)
            return false;

        for (let j = 0; j < clinic.Doctor.length; j++) {
            if (clinic.Doctor[j].name == doctor) {
                matched = true;
                break;
            }
        }
        if (matched == false) {
            console.log("Doctor Record not found.");
            return;
        }

        let temp = 0;
        if (this.appointments.length == 0) {
            this.appointments.push({ patient, doctor });
            console.log(this.appointments);
            return;
        }

        /**
        *@description The following code handles the part where a doctor can have max. 5 patients a day.  
        */

        for (let k = 0; k < this.appointments.length; k++) {
            if (this.appointments[k].doctor == doctor)
                temp++;
        }

        if (temp == 5) {
            console.log(`${doctor} is fully booked for today.`);
        }
        else {
            this.appointments.push({ patient, doctor });
            console.log(this.appointments);
        }

    }

    /**
    *@description Searches a record of either Patient or Doctor depending on user input.
    */

    search() {
        console.log("Choose the option you want:")
        console.log("1.Search Doctor\n2.Search Patient");
        let choice = util.inputInt();

        /**
        *@description if loop is used to execute the entered choice.
        */

        if (choice == 1) 
        {
            console.log("****************DOCTOR SEARCH********************");
            console.log("Choose the option you want to search:");
            console.log("1.Search by Name\n2.Search by ID\n3.Search by Specialization\n4.Search by Availability");
            let option = util.inputInt();

            /** 
            *@description switch statement is used to execute the selected choice. 
            */

            switch (option) {
                case 1:
                    for (let i = 0; i < clinic.Doctor.length; i++) {
                        console.log(clinic.Doctor[i].name);
                    }
                    console.log("Enter the name from above list:");
                    let name = util.inputString(),
                        k = 0;
                    for (let j = 0; j < clinic.Doctor.length; j++) {
                        if (clinic.Doctor[j].name == name) {
                            console.log(clinic.Doctor[j]);
                            k++;
                            break;
                        }
                    }
                    if (k == 0)
                        console.log("Entered Doctor name not found");
                    break;
                case 2:
                    for (let l = 0; l < clinic.Doctor.length; l++) {
                        console.log(clinic.Doctor[l].id);
                    }
                    console.log("Enter the id from above list:");
                    let id = util.inputInt(),
                        m = 0;
                    for (let n = 0; n < clinic.Doctor.length; n++) {
                        if (clinic.Doctor[n].id == id) {
                            console.log(clinic.Doctor[n]);
                            m++;
                            break;
                        }
                    }
                    if (m == 0)
                        console.log("Entered Doctor id not found");
                    break;
                case 3:
                    for (let p = 0; p < clinic.Doctor.length; p++) {
                        console.log(clinic.Doctor[p].specialization);
                    }
                    console.log("Enter the specialization from above list:");
                    let specialization = util.inputString(),
                        q = 0;
                    for (let r = 0; r < clinic.Doctor.length; r++) {
                        if (clinic.Doctor[r].specialization == specialization) {
                            console.log(clinic.Doctor[r]);
                            q++;
                        }
                    }
                    if (q == 0)
                        console.log("Entered Doctor specialization not found");
                    break;
                case 4:
                    
                    console.log("AM\nPM\nBoth");
                    console.log("Enter the availability from above list:");
                    let availability = util.inputString(),
                        t = 0;
                    for (let v = 0; v < clinic.Doctor.length; v++) {
                        if (clinic.Doctor[v].availability == availability) {
                            console.log(clinic.Doctor[v]);
                            t++;
                        }
                    }
                    if (t == 0)
                        console.log("Entered availability not found");
                    break;
                default:
                    console.log("Incorrect choice entered");
                    break;
            }
        }
        else if(choice == 2)
        {
            console.log("****************PATIENT SEARCH********************");
            console.log("Choose the option you want to search:");
            console.log("1.Search by Name\n2.Search by ID\n3.Search by Mobile No.\n4.Search by Age");
            let option = util.inputInt();

            /** 
            *@description switch statement is used to execute the selected choice. 
            */
            
            switch (option) {
                case 1:
                    for (let i = 0; i < clinic.Patient.length; i++) {
                        console.log(clinic.Patient[i].name);
                    }
                    console.log("Enter the name from above list:");
                    let name = util.inputString(),
                        k = 0;
                    for (let j = 0; j < clinic.Patient.length; j++) {
                        if (clinic.Patient[j].name == name) {
                            console.log(clinic.Patient[j]);
                            k++;
                            break;
                        }
                    }
                    if (k == 0)
                        console.log("Entered Patient name not found");
                    break;
                case 2:
                    for (let l = 0; l < clinic.Patient.length; l++) {
                        console.log(clinic.Patient[l].id);
                    }
                    console.log("Enter the id from above list:");
                    let id = util.inputInt(),
                        m = 0;
                    for (let n = 0; n < clinic.Patient.length; n++) {
                        if (clinic.Patient[n].id == id) {
                            console.log(clinic.Patient[n]);
                            m++;
                            break;
                        }
                    }
                    if (m == 0)
                        console.log("Entered Patient id not found");
                    break;
                case 3:
                    for (let p = 0; p < clinic.Patient.length; p++) {
                        console.log(clinic.Patient[p].mobile);
                    }
                    console.log("Enter the mobile from above list:");
                    let mobile = util.inputInt(),
                        q = 0;
                    for (let r = 0; r < clinic.Patient.length; r++) {
                        if (clinic.Patient[r].mobile == mobile) {
                            console.log(clinic.Patient[r]);
                            q++;
                            break;
                        }
                    }
                    if (q == 0)
                        console.log("Entered Patient's mobile not found");
                    break;
                case 4:
                    for (let s = 0; s < clinic.Patient.length; s++) {
                        console.log(clinic.Patient[s].age);
                    }
                    console.log("Enter age from above list:");
                    let age = util.inputInt(),
                        t = 0;
                    for (let v = 0; v < clinic.Patient.length; v++) {
                        if (clinic.Patient[v].age == age) {
                            console.log(clinic.Patient[v]);
                            t++;
                            break;
                        }
                    }
                    if (t == 0)
                        console.log("Entered age not found");
                    break;
                default:
                    console.log("Incorrect choice entered");
                    break;
            }

        }
        else
            console.log("Incorrect choice entered");
    }

    /**
    *@description Prints Doctor-Patient report.
    */

    display() {
        this.display();
    }
}

module.exports={Clinic};