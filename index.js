//
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');

teamArray = [];


managerPrompts();

function employeePrompt() { 
    inquirer.prompt ([
        {
            type: 'list',
            name: 'type',
            message: 'Select option to add to team.',
            choices: ['Engineer', 'Intern', 'Finish building my team']
        },
    ]).then(function runPrompts() {
        if(choices.value === 'Engineer') {
            engineerPrompts();
        }
        if(choices === 'Intern') {
            internPrompts();
        }
        if(choices === 'Finish building my team') {
            console.log("creating html file");
        }
    })
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
            name: 'office',
            message: 'Enter manager office number:'
        },
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
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
            name: 'office',
            message: 'Enter engineer GitHub:',
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
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
            name: 'office',
            message: 'Enter intern school:'
        },
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
    })
}

//todo: function to initilize prompts

function init () {
    
  //   .then(function(data) {writeToFile(fileName, data)})
  } 

//todo: function to create html file
// teamManager();
// employee();

// function writeToFile(fileName, data) {
//     const markDown = generateMarkdown(data);
//     fs.writeFile(fileName, markDown, function (err) {
//         if (err) throw err;
//         console.log("Success");
//     })
// }




// init();
