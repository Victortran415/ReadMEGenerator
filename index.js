const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const generateMarkdown = require("./utils/generateMarkdown")


// array of questions for user


//UPDATE: questions changed to something related to a high-quality readMe.
function promptQuestion() {
    return inquirer.prompt([
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
        name: "questions"
    },
    {
        type: "input",
        message: "Enter your email address",
        name: "questions"
    },
    ])
};

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log("NO ERR!!")
    })
}

const writeMdFile = util.promisify(writeToFile)

// function to initialize program
async function init() {
    try {
        const response = await promptQuestion();
        console.log(response);

        const markdown = generateMarkdown(response)
        console.log(markdown)
        //create a markdown file
        await writeMdFile("DemoReadMe.md", markdown)
    } catch (err) {
        console.log(err)
    }
}

// function call to initialize program
init();