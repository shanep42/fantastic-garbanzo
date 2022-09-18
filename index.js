// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// An array of objects containing reference information for the name, badge, and link to each licensing option
const licenses = [
  {
    name: 'Apache 2.0',
    badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]',
    link: 'https://opensource.org/licenses/Apache-2.0'
  },
  {
    name: 'Boost Software License 1.0',
    badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]',
    link: '(https://www.boost.org/LICENSE_1_0.txt)'
  },
  {
    name: 'BSD 3-Clause',
    badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]',
    link: '(https://opensource.org/licenses/BSD-3-Clause)'
  },
  {
    name: 'BSD 2-Clause',
    badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]',
    link: '(https://opensource.org/licenses/BSD-3-Clause)'
  },
  {
    name: 'CC0',
    badge: '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]',
    link: '(http://creativecommons.org/publicdomain/zero/1.0/)'
  },
  {
    name: 'Attribution 4.0 International',
    badge: '[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)]',
    link: '(https://creativecommons.org/licenses/by/4.0/)'
  },
  {
    name: 'Attribution-ShareAlike 4.0 International',
    badge: '[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)]',
    link: '(https://creativecommons.org/licenses/by-sa/4.0/)'
  },
  {
    name: 'Attribution-NonCommercial 4.0 International',
    badge: '[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)]',
    link: '(https://creativecommons.org/licenses/by-nc/4.0/)'
  },
  {
    name: 'Attribution-NoDerivatives 4.0 International',
    badge: '[![License: CC BY-ND 4.0](https://licensebuttons.net/l/by-nd/4.0/80x15.png)]',
    link: '(https://creativecommons.org/licenses/by-nd/4.0/)'
  },
  {
    name: 'Attribution-NonCommmercial-ShareAlike 4.0 International',
    badge: '[![License: CC BY-NC-SA 4.0]',
    link: '(https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)'
  },
  {
    name: 'Attribution-NonCommercial-NoDerivatives 4.0 International',
    badge: '[![License: CC BY-NC-ND 4.0]',
    link: '(https://licensebuttons.net/l/by-nc-nd/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-nd/4.0/)'
  },
  {
    name: 'Eclipse Public License 1.0',
    badge: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]',
    link: '(https://opensource.org/licenses/EPL-1.0)'
  },
  {
    name: 'GPL v3',
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
    link: '(https://www.gnu.org/licenses/gpl-3.0)'
  },
  {
    name: 'GNU GPL v2',
    badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]',
    link: '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  },
  {
    name: 'GNU AGPL v3',
    badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]',
    link: '(https://www.gnu.org/licenses/agpl-3.0)'
  },
  {
    name: 'GNU LGPL v3',
    badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]',
    link: '(https://www.gnu.org/licenses/lgpl-3.0)'
  },
  {
    name: 'GNU FDL v1.3',
    badge: '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)]',
    link: '(https://www.gnu.org/licenses/fdl-1.3)'
  },
  {
    name: 'The Hippocratic License 2.1',
    badge: '[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)]',
    link: '(https://firstdonoharm.dev)'
  },
  {
    name: 'The Hippocratic License 3.0',
    badge: '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)]',
    link: '(https://firstdonoharm.dev)'
  },
  {
    name: 'IBM Public License Version 1.0',
    badge: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]',
    link: '(https://opensource.org/licenses/IPL-1.0)'
  },
  {
    name: 'ISC License (ISC)',
    badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]',
    link: '(https://opensource.org/licenses/ISC)'
  },
  {
    name: 'The MIT License',
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
    link: '(https://opensource.org/licenses/MIT)'
  },
  {
    name: 'Mozilla Public License 2.0',
    badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]',
    link: '(https://opensource.org/licenses/MPL-2.0)'
  },
  {
    name: 'Attribution License (BY)',
    badge: '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)]',
    link: '(https://opendatacommons.org/licenses/by/)'
  },
  {
    name: 'Open Database License (ODbL)',
    badge: '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]',
    link: '(https://opendatacommons.org/licenses/odbl/)'
  },
  {
    name: 'Public Domain Dedication and License (PDDL)',
    badge: '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]',
    link: '(https://opendatacommons.org/licenses/pddl/)'
  },
  {
    name: 'The Perl License',
    badge: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]',
    link: '(https://opensource.org/licenses/Artistic-2.0)'
  },
  {
    name: 'The Artistic License 2.0',
    badge: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)]',
    link: '(https://opensource.org/licenses/Artistic-2.0)'
  },
  {
    name: 'SIL Open Font License 1.1',
    badge: '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)]',
    link: '(https://opensource.org/licenses/OFL-1.1)'
  },
  {
    name: 'The Unlicense',
    badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]',
    link: '(http://unlicense.org/)'
  },
  {
    name: 'WTFPL',
    badge: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]',
    link: '(http://www.wtfpl.net/about/)'
  },
  {
    name: 'The zlib/libpng License',
    badge: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]',
    link: '(https://opensource.org/licenses/Zlib)'
  }
]

// Create array of only the name properties of licenses array, for ease of use in inquirer prompt
var licenseName = []
for (license of licenses) {
  licenseName.push(license.name)
}

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseOption = licenses.find(entry => entry.name == license);
  if (licenseOption == null || licenseOption == undefined) {
    return ""
  }
  return licenseOption.badge
}
// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseOption = licenses.find(entry => entry.name == license);
  if (licenseOption == null || licenseOption == undefined) {
    return ""
  }
  // TODO: This slice is only necessary because I thought I'd be able to format a link for markdown by including () in each license.link. When that didn't work, I put added parenthesis around the string literal, but this resulted in trying to link to "(www.example.com)", with the parentheses included. I don't know why this redundant method is the only one that worked. 
  return licenseOption.link.slice(1, -1)
}

// Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter your project title',
      name: 'title'
    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project.',
      name: 'description'
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'installation'
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for useage.',
      name: 'usage'
    },
    {
      type: 'list',
      message: 'Select a license:',
      choices: licenseName,
      name: 'license',
    },
    {
      type: 'input',
      message: 'Enter any special info about how to contribute to the project.',
      name: 'contributing',
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
      name: 'username'
    },
    {
      type: 'input',
      message: '... and your preferred email address?',
      name: 'email'
    }
  ])
  .then((answers) =>

    // Write markdown text to a README created in the designated folder, using string literals to insert the user's input.
    fs.writeFileSync('./generated README/README.md',

      `# ${answers.title}   ${renderLicenseBadge(answers.license)}(${renderLicenseLink(answers.license)})

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
      // TODO: Is there a user-friendly way to allow screenshots to be included in the generated readme?
      // To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

      //     ```md
      //     ![alt text](assets/images/screenshot.png)
      //     ```


      `

## License
    
This project uses ${answers.license} for its licensing.
    
## Contributing
    
${answers.contributing}
    
## Tests
    
${answers.tests}
    
## Questions
    
If you have questions about this or my other projects, you can contact me at [GitHub](https://github.com/${answers.username}), or at ${answers.email}`)

  )