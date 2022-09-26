//profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//node modules
const fs = require('fs');
const inquirer = require('inquirer');
//link to create html page
const createTeam = require('./src/template.js');


teamArray = [];


function employeePrompt() { 
    inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Select option to add to team.',
            choices: ['Engineer', 'Intern', 'Finish building my team']
        }
    ]).then(function (input) {
        switch(input.role) {
            case 'Engineer':
                engineerPrompts();
                break;
            case 'Intern':
                internPrompts();
                break;
            case 'Finish building my team':
                console.log('Creating HTML file');
                writeToFile();
                break;
      
    }})
}

function managerPrompts() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter team manager name:',
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
            name: 'officeNumber',
            message: 'Enter manager office number:'
        },
    ]).then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        employeePrompt();
    });
}


function engineerPrompts() {
    inquirer.prompt([
    {
            type: 'input',
            name: 'name',
            message: 'Enter engineer name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter engineer id:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter engineer email:', 
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter engineer GitHub:',
        },
    ]).then(engineerInput => {
        const { name, id, email, github } = engineerInput;
        const engineer = new Engineer (name, id, email, github);

        teamArray.push(engineer);
        employeePrompt();
    })
}


function internPrompts() {
    inquirer.prompt([
    {
            type: 'input',
            name: 'name',
            message: 'Enter intern name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter intern id:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter intern email:' 
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter intern school:'
        },
    ]).then(internInput => {
        const { name, id, email, school } = internInput;
        const intern = new Intern (name, id, email, school);

        teamArray.push(intern);
        employeePrompt();
    })
}

//todo: function to create html file

function writeToFile() {
    const team = createTeam(teamArray);

    fs.writeFile("./dist/index.html", team, function (err) {
        if (err) throw err;
        console.log("Success");
        console.log(teamArray)
    })
}

managerPrompts();