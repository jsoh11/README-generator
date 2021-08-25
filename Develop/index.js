// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input


const promptUser = () => {

   return inquirer.prompt([

        {
            type: 'input',
            message: 'What is the name of your Project?',
            name: 'Project',

        },
        {
            type: 'input',
            message: 'Please give a brief description of the project',
            name: 'description',
        },
        {
            type: 'checkbox',
            message: 'What major frameworks did you build your project with?',
            choices: ['HTML', 'CSS', 'JavaScript','Node.js'],
            name: 'build',
        },
        {
            type: 'input',
            message: 'What are the installation steps(i.e. clone link)?',
            name: 'install',

        },
        {
            type: 'input',
            message: 'What are useful examples of how this project can be used?',
            name: 'usage',

        },
        {
            type: 'checkbox',
            message: 'What license would you like to use?',
            choices: ['MIT', 'IBM', 'Mozilla', 'Apache'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',

        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },


    ])
}

// TODO: Create a function to write README file
const writeToFile = (response) => 
    `<details open="open">
<summary><h2 style="display: inline-block">Table of Contents</h2></summary>
<ol>
  <li>
    <a href="#about-the-project">About The Project</a>
    <ul>
      <li><a href="#built-with">Built With</a></li>
    </ul>
  </li>
  <li>
    <a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
    </ul>
  </li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#acknowledgements">Acknowledgements</a></li>
</ol>
</details>




## About The Project

${response.name}
${response.description}

### Built With
<li>
${response.build}
</li>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* Gitbash
* VS code

### Installation

1. Clone the repo ${response.install}
 
## Usage

${response.usage}

## License

${response.license}

## Contact

Email: ${response.email}


## Acknowledgements

* [othneildrew README template](https://github.com/othneildrew/Best-README-Template)`

// TODO: Create a function to initialize app
const init = () => {    
    promptUser()
    .then((response) => {
    console.log(response)
    fs.writeFile('README.md', writeToFile(response), (err) =>
        err ? console.error(err) : console.log('Success!')
    );

}

);
}
// const init = () => {
//     promptUser()
//         .then((response) => fs.writeFile('README.md', writeToFile(response)))
//         .then(() => console.log('Successfully wrote to README.md!'))
//         .catch((err) => console.error(err));

// Function call to initialize app
init();
