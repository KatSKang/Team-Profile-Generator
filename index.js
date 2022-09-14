const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Array where the entered team info will be stored
let generatedTeam = [];

const managerQuestions = [
    {
        type: "input",
        message: "Enter the managers's name:",
        name: "name",
    },
    {
        type: "input",
        message: "Enter the managers's ID:",
        name: "id",
        validate: (answer) => {
            if (isNaN(answer)) {
              return "please enter a number";
            }
            return true;
          },
    },
    {
        type: "input",
        message: "Enter managers's email addresss:",
        name: "email",
    },
    {
        type: "input",
        message: "Enter managers's office number:",
        name: "officeNumber",
    }
]

const engineerQuestions = [
    {
        type: "input",
        message: "Enter the engineer's name:",
        name: "name",
    },
    {
        type: "input",
        message: "Enter the engineer's ID:",
        name: "id",
        validate: (answer) => {
            if (isNaN(answer)) {
              return "please enter a number";
            }
            return true;
          },
    },
    {
        type: "input",
        message: "Enter engineer's email addresss:",
        name: "email",
    },
    {
        type: "input",
        message: "Enter engineer's GitHub username:",
        name: "github",
    }
]

const internQuestions = [
    {
        type: "input",
        message: "Enter the intern's name:",
        name: "name",
    },
    {
        type: "input",
        message: "Enter the intern's ID:",
        name: "id",
        validate: (answer) => {
            if (isNaN(answer)) {
              return "please enter a number";
            }
            return true;
          },
    },
    {
        type: "input",
        message: "Enter intern's email addresss:",
        name: "email",
    },
    {
        type: "input",
        message: "Enter intern's school name:",
        name: "school",
    }
]

// inital questions when starting the app
const menuQuestions = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "menu",
        choices: ["Add an Engineer", "Add an Intern", "Done adding team members"]
    }
]

// function to write index.html
function writeToFile(newFile, answers) {
    fs.writeFileSync(newFile, answers, (err) => err ? console.error(err) : console.log('Success!'));
}

// function to initialize app 
function init() {
    inquirer.prompt(managerQuestions)
        .then((managerData) => {
            const manager = new Manager(
                managerData.name,
                managerData.id,
                managerData.email,
                managerData.officeNumber
            );
            generatedTeam.push(manager);
            addTeam();
    })
}

// function for menu questions after manager is added
function addTeam() {
    inquirer.prompt(menuQuestions)
        .then((res) => {
            switch(res.menu){
                case "Add an Engineer":
                    return addEngineer();
                case "Add an Intern":
                    return addIntern();
                case "Done adding team members":
                    console.log(generatedTeam);
                    return generateHTML(generatedTeam);
            } 
        })
}


function addEngineer() {
    inquirer.prompt(engineerQuestions)
        .then((engineerData) => {
            const engineer = new Engineer(
                engineerData.name,
                engineerData.id,
                engineerData.email,
                engineerData.github
            );
            generatedTeam.push(engineer)
            addTeam();
        })
}

function addIntern() {
    inquirer.prompt(internQuestions)
        .then((internData) => {
            const intern = new Intern(
                internData.name,
                internData.id,
                internData.email,
                internData.school
            );
            generatedTeam.push(intern)
            addTeam();
        })
}


// Function call to initialize app
init();

