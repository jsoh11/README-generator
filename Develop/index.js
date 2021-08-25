// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs =require('fs');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
      
        {
            type: 'input',
            message: 'What is the name of your Project?',
            name: 'Project',

        },
        {
            type: 'input',
            message: 'Please give a brief description of the project',
            name: 'description'
        }
        {
            type: 'input',
            message: 'What are the installation steps?',
            name: 'install',

        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',

        },
        {
            type: 'checkbox',
            message: 'What languages do you know?',
            name: 'languages',
            choices: ['Javascript', 'HTML', 'CSS', 'Node']

        },
        {
            type: 'list',
            message: 'What is your preferred method of communication?',
            name: 'preference',
            choices: ['Javascript', 'HTML', 'CSS', 'Node']

        }

    ])
    .then((response) => {
        console.log(response)

        fs.writeFile('README.md', JSON.stringify(response), (err) =>
            err ? console.error(err) : console.log('Success!')
        );

    }

    );



// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();
