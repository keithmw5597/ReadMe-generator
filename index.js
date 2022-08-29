const fs = require('fs');
const { default: inquirer } = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const inquirer = fetch('inquirer');


const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your name!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'Enter your project title (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter your project description (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter your installation steps (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter any installation steps!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'usage',
            message: 'What technologies did you build this project with? (Check all that apply)',
            choices: ['Javascript', 'HTML','CSS', 'ES6','jQuery', 'Bootstrap', 'Node', 'React',]  
                
            
                  
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the link for your deployed application. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter a link for your deployed application!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'screenshots',
            message: 'Enter at least one screenshot of your application. Please enter only the filename.(Required)',
            validate: screenshotsInput => {
                if (screenshotsInput) {
                    return true;
                } else {
                    console.log('Please enter at least one screenshot file name!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Enter the license you would like to add?',
            choices: ['Apache License 2.0','GNU GPLv3','MIT', 'ISC']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please enter any contribution guidelines (Required)',
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log('Please enter your contributing guidelines!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter any tests instructions and examples. (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter your test information!');
                    return false;
                }
            }
        },
          
    ]);
};



// TODO: Create a function to write README file
function writeToFile(fileName) {
    fs.writeFile('./dist/README.md', fileName, err => {
        if (err);
        return;
    })
}

// TODO: Create a function to initialize app
function init() {
    console.log("success")
    questions()
    .then(data => {
        return(generateMarkdown(data))
    })
    .then(writeFile)
    }

// Function call to initialize app
init();

