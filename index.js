// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter Your Project Title',
        default: 'README.MD'
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter your description",
        default: 'description here'
    },
    {
        type: 'input',
        name: 'installation',
        message: "Enter your installation",
        default: 'installation method here'
    },
    {
        type: 'input',
        name: 'usage',
        message: "Enter your usage",
        default: 'usage method here'
    },
    {
        type: 'input',
        name: 'credits',
        message: "Enter your credits",
        default: 'any credits here'
    },
    {
        type: "list",
        name: "license",
        message: "Choose an option for a license",
        choices: ['None','MIT','Apache', 'GPLv2', 'GPLv3']
    },
    {
        type: 'input',
        name: 'contribute',
        message: "Enter your contributing list",
        default: 'how to contribute here'
    },
    {
        type: 'input',
        name: 'tests',
        message: "Enter your Tests",
        default: 'any tests here'
    },
    {
        type: 'input',
        name: 'username',
        message: "What is your username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email?"
    }
];

// Gets passed in the path file we want to create and write to, and also the markdown template we want to write in that path file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => error ?
    console.log(error) : console.log("success"));
}

// initializes the inquirer function and prompts user with questions to fill out their README Template
function init() {
    inquirer
      .prompt([...questions])
      .then(function (data) { 
        writeToFile('READMEtemplate.md', generateMarkdown(data)) 
    }); 
}

// Function call to initialize app
init();
