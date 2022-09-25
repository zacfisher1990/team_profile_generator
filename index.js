//
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const teamManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter team manager:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter manager id:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter manager email:' 
        },
        {
            type: 'input',
            name: 'office',
            message: 'Enter manager office number:'
        },
    ])
    .then(managerInput => {
        const { name, id, email, office } = managerInput;
        const manager = new Manager (name, id, email, office);
    }) 
}

const employee = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'type',
            message: 'Select option to add to team.',
            choices: ['Engineer', 'Intern', 'Finish building my team']
        },
    ])
}
teamManager();