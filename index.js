// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter a project description',
            name: 'description',
            default: 'lorem ipsum'
        },
        {
            type: 'input',
            message: 'Enter installation instructions',
            name: 'installation',
            default: 'lorem ipsum'
        },
        {
            type: 'input',
            message: 'Enter instructions for usage',
            name: 'usage',
            default: 'lorem ipsum'
        },
        {
            type: 'list',
            message: 'Select a license:',
            choices: ['License 1', 'License 2'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Enter info about contributors',
            name:'contributors',
            default: "",
        },
        {
            type: 'input',
            message: 'Enter any info about testing procedures',
            name: 'tests',
            default: 'Does not currently use any testing procedures',
        },
        {
            type: 'input',
            message: 'For contact purposes, what is your github username?',
            name: 'username',
            default: 'shanep42',
        },
        {
            type: 'input',
            message: '... and your preferred email address?',
            name: 'email',
            default: 'joe@email.com'
        }
    ])
    .then((response) => 
        console.log(response)
    )

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
