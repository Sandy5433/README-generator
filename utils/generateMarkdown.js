// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "Apache 2.0 License"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license == "Boost"){
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else if (license == "No license"){
    return ""
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "Apache 2.0 License"){
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (license == "Boost"){
    return "https://www.boost.org/LICENSE_1_0.txt"
  } else if (license == "No license"){
    return ""
}}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "No license"){
    return ""
  } else 
  return `## License
  This application is licensed under ${license}, you can access the license via this link: ${renderLicenseLink(license)}
`
}

//Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.name}
  ${renderLicenseBadge(answers.license)}
  ## Description
  ${answers.description}
  ## Table of Contents
  - [description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#tests)
  - [Questions](#questions)
  ## Installation
  ${answers.install}
  ## Usage
  ${answers.usage}
  ${renderLicenseSection(answers.license)}
  ## Contributing
  ${answers.contribute}
  ## Tests
  ${answers.test}
  ## Questions
  Check out my projects on my GitHub account at https://github.com/${answers.github}. 
  If you have any questions about the application, you can reach me via my email at ${answers.email} 
  `
}

module.exports = generateMarkdown;
