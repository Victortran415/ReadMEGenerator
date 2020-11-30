const inquirer = require('inquirer');
const fs = require('fs');
// array of questions for user

//NOTE: testing examples for now. will input actual questions later
const questions = [
    {
        type: "input",
        message: "Enter your name",
        name: "nameInput",
    },
    {
        type: "input",
        message: "how old are you?",
        name: "ageInput",
    },
    {
        type: "input",
        message: "what language do you know?",
        name: "languageInput",
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.watchFile(fileName, data, (err) => {
        if (err) throw (err);
        console.log("testing")
    })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
