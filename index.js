// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "name",
    message: "What is your project name?"
},
{
    type: "input",
    name: "description",
    message: "Please enter the description of your project"
},
{
    type: "input",
    name: "install",
    message: "Please enter the installation instructions"
},
{
    type: "input",
    name: "usage",
    message: "Please enter the usage information"
},
{
    type: "input",
    name: "contribute",
    message: "Please enter the contribution guidelines"
},
{
    type: "input",
    name: "test",
    message: "Please enter the test instructions"
},
{   type: "list",
    name: "license",
    message: "Please choose a license",
    choices: [
        "Apache 2.0 License", "Boost", "No license"
    ]
},
{   type: "input",
    name: "github",
    message: "Please enter your GitHub username"
},
{   type: "input",
    name: "email",
    message: "Please enter your email address"
}
];




// function to initialize app


// Function call to initialize app
init();
