// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

var response;

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter your project title',
            name: 'title',
            default: 'My Project'
        },
        {
            type: 'input',
            message: 'Provide a short description explaining the what, why, and how of your project.',
            name: 'description',
            default: 'lorem ipsum'
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation',
            default: 'lorem ipsum'
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for useage.',
            name: 'usage',
            default: 'lorem ipsum'
        },
        {
            type: 'list',
            message: 'Select a license:',
            choices: ['Apache 2.0', 'Boost Software License 1.0', 'BSD 3-Clause', 'BSD 2-Clause', 'CC0', 'Attribution 4.0 International', 'Attribution-ShareAlike 4.0 International', 'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivatives 4.0 International', 'Attribution-NonCommercial-ShareAlike 4.0 International', 'Attribution-NonCommercial-NoDerivatives 4.0 International', 'Eclipse Public License 1.0', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'The Hippocratic License 2.1', 'The Hippocratic License 3.0', 'IBM Public License Version 1.0', 'ISC License (ISC)', 'The MIT License', 'Mozilla Public License 2.0', 'Attribution License (BY)', 'Open Database License (ODbL)', 'Public Domain Dedication and License (PDDL)', 'The Perl License', 'The Artistic License 2.0', 'SIL Open Font License 1.1', 'The Unlicense', 'WTFPL', 'Zlib'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Enter any special info about how to contribute to the project.',
            name:'contributing',
            default: "[Contributor Covenant](https://www.contributor-covenant.org/)",
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
    .then((answers) => 
    fs.writeFileSync('./generated README/README.md', 
`# ${answers.title}

## Description
    
${answers.description}
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)
   
## Installation
    
${answers.installation}
    
## Usage
    
${answers.usage}` +
    
    // To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    
    //     ```md
    //     ![alt text](assets/images/screenshot.png)
    //     ```
    
    
`

## License
    
This project uses ${answers.license}.
    
## Contributing
    
${answers.contributors}
    
## Tests
    
${answers.tests}
    
##Contact Me
    
Reach me at [GitHub](https://github.com/${answers.username}), or at ${answers.email}`)
        
    )

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//writeToFile("whatever", "whatever")