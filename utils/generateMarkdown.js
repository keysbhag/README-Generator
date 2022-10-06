// function returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None'){
    return '' 
  }
  if (license == 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)] \n\n' 
  }
  if (license == 'Apache'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)] \n\n' 
  }
  if (license == 'GPLv2'){
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)] \n\n' 
  }
  if (license == 'GPLv3'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)] \n\n' 
  }
}

// function returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let prefix = 'License, Here is the link for more details: ' 
  if (license == 'None'){
    return ''
  }
  if (license == 'MIT'){
    return prefix+'https://opensource.org/licenses/MIT' 
  }
  if (license == 'Apache'){
    return prefix+'https://opensource.org/licenses/Apache-2.0' 
  }
  if (license == 'GPLv2'){
    return prefix+'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html' 
  }
  if (license == 'GPLv3'){
    return prefix+'https://www.gnu.org/licenses/gpl-3.0' 
  }
}

// function returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return ''
  } else{
    return '## License'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n\n
## Description 
${data.description} \n\n
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contribute](#contribute)
* [Testing](#testing)
* [Questions](#questions) \n\n
## Installation
${data.installation} \n\n
## Usage
${data.usage} \n\n
## Credits
${data.credits} \n\n
${renderLicenseSection(data.license)}
${data.license} ${renderLicenseLink(data.license)} ${renderLicenseBadge(data.license)}
## Contribute 
${data.contribute} \n\n
## Testing 
${data.tests} \n\n
## Questions 
Please free to email me at ${data.email} for any questions
check out my Github: https://github.com/${data.username} 

`;
}

module.exports = generateMarkdown;
