// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
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
        message: "Enter your description"
    },
    {
        type: 'input',
        name: 'installation',
        message: "Enter your installation"
    },
    {
        type: 'input',
        name: 'usage',
        message: "Enter your usage"
    },
    {
        type: 'input',
        name: 'credits',
        message: "Enter your credits"
    },
    {
        type: "list",
        name: "license",
        message: "Choose an option for a license",
        choices: ['None','MIT','GNU','Apache']
    },
    {
        type: 'input',
        name: 'contribute',
        message: "Enter your contributing list"
    },
    {
        type: 'input',
        name: 'tests',
        message: "Enter your Tests"
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => error ?
    console.log(error) : console.log("success"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt([...questions])
      .then(function (data) { 
        writeToFile('README.md', generateMarkdown(data)) 
    }); 
}

// Function call to initialize app
init();
