// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {

// Link for badges

if(license === 'MIT'){
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

} else if(license === 'BSD'){
  return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
} else if(license === 'GNU'){
  return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
} else if(license === 'ISC'){
  return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
} else if(license === 'Apache'){
  return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  
}else{

  return ''

  }

}

// Function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {

console.log(license)

  if(license !== 'None'){
    return `* [License](#license)`;

    } else {

    return ''

    }

}

// Function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {

  if(license !== 'None'){
    return `## License
    
    This application is covered under the ${license} license.`;

    }else {

    return ''

    }
  }

// Function to generate markdown for README

function generateMarkdown(data) {

  console.log('inputted data:', data)
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  ${renderLicenseLink(data.license)}
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

 ${renderLicenseSection(data.license)}
  
## Questions 
* If you have any questions regarding this project, you can:
* Access my GitHub profile [here](https://github.com/${data.github})
* Contact me via email [here](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
