const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const generateMarkdown = require("./utils/generateMarkdown.js")


// array of questions for user


//UPDATE: questions changed to something related to a high-quality readMe.
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projectTitle"
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
        type: "list",
        message: "License for your project",
        choices:  ['Apache License', ' MIT License', ' Mozilla Public License 2.0', ' GPL License'],
        name: "license"
    },
    {
        type: "input",
        message: "Who contributed in this Project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "If anything was tested, what was it?",
        name: "test"
    },
    {
        type: "input",
        message: "Enter your Github User",
        name: "contact"
    },
    {
        type: "input",
        message: "Enter your email address",
        name: "contact"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.watchFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log("NO ERR!!")
    })
}

const writeFile = util.promisify(writeToFile)

// function to initialize program
async function init() {
    try {
        const response = await inquirer.prompt(questions);
        console.log(response);

        const markdown = generateMarkdown(response)
        //create a markdown file
        await writeFile("DemoReadMe.md", markdown)
    } catch (err) {
        console.log(err)
    }
}

// function call to initialize program
init();
