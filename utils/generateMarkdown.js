
// function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.projectTitle}

  ## Description
    ${response.description}

  ## Time of Contents
    - [Installation](#installation)- [Usage](#usage)
    - [License](#license)
    - [Contribution](#contribution)
    - [Tests](#tests)
    - [Questions](#questions)
  
  ## Installation:
    ${response.installation}

  ## Usage:
    ${response.usage}

  ## License
    ${response.license}

  ## Contribution
    ${response.contribution}

  ## Tests
    ${response.tests}

  ## Questions
    ${response.questions}`

}

module.exports = generateMarkdown;
