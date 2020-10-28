const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")


// array of questions for user
const quest = [
    {
        type:"input",
        name:"github",
        message: "What is your github username?",
    },
    {
        type:"input",
        name:"projectTitle",
        message: "What is the name of your project?",
    },
    {
        type:"input",
        name:"projectDescription",
        message: "Write a description of your project?",
    },
    {
        type:"input",
        name:"dependencies",
        message: "What command should be run to install dependencies?",
    },
    {
        type:"input",
        name:"usage",
        message: "Provide the usage examples of your project."
    },
    {
        type:"checkbox",
        name:"license",
        message: "What kind of license does your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type:"input",
        name:"contributing",
        message: "Please describe guidelines for a developer contributions to your project.",
    },
    {
        type:"input",
        name:"tests",
        message: "Were there any test to run?",
    },
    {
        type:"input",
        name:"email",
        message: "What is your email address?",
    },


];

// function to write README file
function writeToFile(fileName, response) {
    return fs.writeFileSync(path.join(__dirname, fileName), response);
}

// function to initialize program
function init() {
    inquirer.prompt(quest)
    .then((respond)  => {
        console.log("Generating your README...");
        writeToFile("README.md" , generateMarkdown({...respond}));
    })
    .catch((err) => {
        console.log(err);
    })
}

// function call to initialize program
init();
