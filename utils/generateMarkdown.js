// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break; 
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)` 
      break;
    default:
      return``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'Apache') {
    return `[Apache](https://opensource.org/licenses/Apache-2.0)`
  } 
  if(license === 'Boost') {
    return `[Boost](https://www.boost.org/LICENSE_1_0.txt)`
  } 
  if(license === 'BSD') {
    return `[BSD](https://opensource.org/licenses/BSD-3-Clause)`
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None') {
    return '';
  } else {
    return `## License
  ${renderLicenseBadge(license)};
  This project is licensed under ${renderLicenseLink(license)};
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  
  ${data.description}
  - 
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage

  ${printUsageList(data.usage)}
  
 
  ## Credits
  
  ${data.contributors}
  
  ## License
  
  ${renderLicenseSection(data.license)} 
  
  ## Badges

  ${renderLicenseBadge(data.license)}
  
  
  ## How to Contribute
  
  If you would like to contribute to the development of this project Please use the my repo to add to the project ${data.github}.  https://github.com/${data.github} The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ## Questions
  If you have any questions please contact via my email at
  ${data.email}
  
  ## Tests
  
  ${data.tests}
`;
}


module.exports = generateMarkdown;
