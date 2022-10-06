// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return 'Hello'+license
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return 'Hello'+license
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return ''
  } else{
    return '## '+license+' \n\n'
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
## Contribute 
${data.contribute} \n\n
## Testing 
${data.tests} \n\n
## Questions 
Please free to email me at ${data.email} or check out my Github: ${data.username} 

`;
}

module.exports = generateMarkdown;
