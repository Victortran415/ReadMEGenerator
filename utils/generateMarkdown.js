// function to generate markdown for README
function generateMarkdown(response) {
  //Title
  `# ${response.projectTitle}


  ## Description
  ${response.description}`

  //Time of Content(installation, usage, license, contribution, tests, questions)

  //NOTE: may be doing this incorrectly, i'll get back to it.
  let ToC = `## Time of Contents`
  if (response.installation) {
    ToC += `- [Installation](#installation)`;
  }
  if (response.usage) {
    ToC += `- [Usage](#usage)`;
  }
  if (response.license) {
    ToC += `- [License](#license)`
  } else {
    ToC
  }
  if (response.contribution) {
    ToC += `- [Contribution](#contribution)`;
  }
  if (response.tests) {
    ToC += `- [Tests](#tests)`;
  }
  if (response.contact) {
    ToC += `- [Contact](#contact)`
  }
  console.log(ToC)

  //Installations
  `## Installation:
  ${response.installation}`

  //Usage

  `## Usage:
  ${response.usage}`

  //License
  `## License
  ${response.license}`

  //Contribution
  `## Contribution
  ${response.contribution}`

  //Tests
  `## Tests
  ${response.tests}`

  //Questions
  `## Questions
  ${response.contact}`


return response
}

module.exports = generateMarkdown;
