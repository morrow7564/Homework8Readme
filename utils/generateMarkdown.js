// function to generate markdown for README
function licenseB(license){
  if(license !== "None"){
    return '![GitHub license](https://img.shields.io/badge/license-' + license + '-blue.svg'
  }
  {
    return " "
  }
}


// function to generate markdown for README
function generateMarkdown(response) {
  return `# **${response.projectTitle}**
  ${licenseB(response.license)}
 
 
  ### created by 
  
  ${response.github}

  ## Description
 
  ${response.projectDescription}
  
  ## Table of Contents

  * [Installation] 

  * [Usage] 
  
  * [License] 
  
  * [Contributing] 
  
  * [Tests] 
  
  *[Questions]

  ## Installation
  *Steps required to install project and how to get the development environment running:*

  ${response.dependencies}

  ## Usage 
  *Instructions and examples for use*
  
  ${response.usage}

  ## License
  *The License you used for the project*
 
  ${licenseB(response.license)}

  ## contributors
  *If you are going to contribute it, you can follow these guidelines for how to do so*
  
  ${response.contributing}

  ## Testing
  *Tests for application and how to run them:*
  
  ${response.tests}

  ## Questions 
  *For any questions, please contact me with the information below*
   
  Email: ${response.email}
  GitHub: ${response.github}

`;
}

module.exports = generateMarkdown;
