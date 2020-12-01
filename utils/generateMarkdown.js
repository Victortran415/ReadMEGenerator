// function to generate markdown for README
function generateMarkdown(response) {
  //Title
  `# ${response.projectTitle}


  ## Description
  ${response.description}`

  //Time of Content(installation, usage, license, contribution, tests, questions)

return response
}

module.exports = generateMarkdown;
