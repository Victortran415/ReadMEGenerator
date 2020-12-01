const inquirer = require('inquirer');
const fs = require('fs');
// array of questions for user

//UPDATE: questions changed to something related to a high-quality readMe.
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projectInput"
    },
    {
        type: "input",
        message: "Describe the purpose of your application",
        name: "description"
    },
    {
        type: "input",
        message: "What was installed in order to create this readMe?",
        name: "installation"
    },
    {
        type: "input",
        message: "Add a demo(video or gif) of how to use this generator and explain the steps.",
        name: "usage"
    },
    {
        type: "input",
        message: "License for your project",
        choices:  ['Apache License', ' MIT License', ' Mozilla Public License 2.0', ' GPL License'],
        name: "license"
    },
    {
        type: "input",
        message: "Enter your Github User",
        name: "contact"
    },
    {
        type: "input",
        message: "Enter your email addrerss",
        name: "contact"
    },
];

//NOTE: will get back to this.
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
