// Packages needed for this application:

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
// If no input user is prompted to input information:

const questions = [  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: inputTitle => {
      if (inputTitle) {
          return true;
      } else {
          console.log('Please write the title of your project!');
          return false;
      }
  }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please briefly describe your project:',
    validate: inputDescription => {
      if (inputDescription) {
          return true;
      } else {
          console.log('Please write a description of your project!');
          return false;
      }
  }
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub user name?',
    validate: inputGithub => {
      if (inputGithub) {
          return true;
      } else {
          console.log('Please provide your GitHub username!');
          return false;
      }
  }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: inputEmail => {
      if (inputEmail) {
          return true;
      } else {
          console.log('Please provide your email address!');
          return false;
      }
  }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide instructions regarding installation of your application:',
    validate: inputInstallation => {
      if (inputInstallation) {
          return true;
      } else {
          console.log('Please provide insructions for installation!');
          return false;
      }
  }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide any relevant instructions for using the repo:',
    validate: inputUsage => {
      if (inputUsage) {
          return true;
      } else {
          console.log('Please provide insructions for usage!');
          return false;
      }
  }
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide any guidelines regarding contribution to the application:',
    validate: inputContributing => {
      if (inputContributing) {
          return true;
      } else {
          console.log('Please provide contribution guidelines!');
          return false;
      }
  }
  },

  // List of licences, including 'none':

  {
    type: 'list',
    name: 'license',
    message: 'Please select a license from this list of options.',
    choices: ['MIT', 'BSD', 'GNU', 'ISC', 'Apache', 'None']
},

  {
    type: 'input',
    name: 'tests',
    message: 'Please provide any details regarding testing of the application:',
    validate: inputInstallation => {
      if (inputInstallation) {
          return true;
      } else {
          console.log('Please provide guidelines on testing the application!');
          return false;
      }
  }
  },];

// Function to write README file:

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success!')
    );

}

// Function to initialize app:

function init() {
        return inquirer.prompt(questions);
    };

// Function call to initialize app:
init()
.then(answers => generateMarkdown(answers))
.then(generatedReadme => writeToFile('README.md', generatedReadme));