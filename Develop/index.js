// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

const questions = [  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please briefly describe your project.',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub user name?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'moreinfo',
    message: 'moreinfo',
  },
  {
    type: 'input',
    name: 'moreinfo',
    message: 'moreinfo',
  },];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success!')
    );

}

// TODO: Create a function to initialize app
function init() {
        return inquirer.prompt(questions);
    };

// Function call to initialize app
init()
.then(answers => generateMarkdown(answers))
.then(generatedReadme => writeToFile('README.md', generatedReadme));