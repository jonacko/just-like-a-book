// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

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
    message: 'Please briefly describe your project.',
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
    message: 'info about installation',
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
    message: 'info about usage',
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
    message: 'info about contributing',
    validate: inputContributing => {
      if (inputContributing) {
          return true;
      } else {
          console.log('Please provide contribution guidelines!');
          return false;
      }
  }
  },

  // Checkbox

  {
    type: 'checkbox',
    name: 'contents',
    message: 'Please select a license from this list of options.',
    choices: [
        {
            name: 'MIT',
            checked: false
        },
        {
            name: 'BSD',
            checked: false
        },
        {
            name: 'GNU',
            checked: false
        },
        {
            name: 'ISC',
            checked: false
        },
        {
            name: 'Apache',
            checked: false
        },
        
    ]
},




  {
    type: 'input',
    name: 'tests',
    message: 'info about tests',
    validate: inputInstallation => {
      if (inputInstallation) {
          return true;
      } else {
          console.log('Please provide guidelines on testing your application!');
          return false;
      }
  }
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