const fs = require('fs');
const inquirer = require('inquirer');
//const generateHTML = require('./utils/generateHTML');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { getEventListeners } = require('events');

// Array where the entered team info will be stored
let teamData = [];

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

// Menu after manager has been added
const menuQuestions = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "menu",
        choices: ["Add an Engineer", "Add an Intern", "Done adding team members"]
    }
]

// function to initialize app 
function init() {
    inquirer.prompt(managerQuestions)
        .then((res) => {
            const manager = new Manager(
                res.name,
                res.id,
                res.email,
                res.officeNumber
            );
            teamData.push(manager);
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
                    console.log(teamData);
                    createCards(teamData);
            }
        })
}


function addEngineer() {
    inquirer.prompt(engineerQuestions)
        .then((res) => {
            const engineer = new Engineer(
                res.name,
                res.id,
                res.email,
                res.github
            );
            teamData.push(engineer)
            addTeam();
        })
}

function addIntern() {
    inquirer.prompt(internQuestions)
        .then((res) => {
            const intern = new Intern(
                res.name,
                res.id,
                res.email,
                res.school
            );
            teamData.push(intern)
            addTeam();
        })
}

// Creates the profile cards to be inserted into HTML
function createCards(team) {
    var cardHTML = '';
    for(let i = 0; i < teamData.length; i++)  {
        if (team[i].getRole() === 'Manager'){
            cardHTML += `
                <div class="card m-3" style="width: 18rem">
                        <div class="card-header bg-primary text-white">
                            <h3>${team[i].getName()}</h3>
                            <span class="h5"><i class="bi bi-cup-hot-fill"></i> Manager</span>
                        </div>
                        <div class="card-body">
                            <ul class ="list-group">
                                <li class="list-group-item">ID: ${team[i].getID()} </li>
                                <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}"> ${team[i].getEmail()} </a> </li>
                                <li class="list-group-item">Office number: ${team[i].getOfficeNumber()}</li>
                            </ul>
                        </div>
                    </div>`
        } else if (team[i].getRole() === 'Engineer'){
            cardHTML += `
                <div class="card m-3" style="width: 18rem">
                        <div class="card-header bg-primary text-white">
                            <h3>${team[i].getName()}</h3>
                            <span class="h5"><i class="bi bi-wrench-adjustable-circle"></i> Engineer</span>
                        </div>
                        <div class="card-body">
                            <ul class ="list-group">
                                <li class="list-group-item">ID: ${team[i].getID()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}"> ${team[i].getEmail()} </a></li>
                                <li class="list-group-item">GitHub:<a href="https://github.com/${team[i].getGitHub()}" target="_blank" class="card-link">${team[i].getGitHub()} </a></li>
                            </ul>
                        </div>
                    </div>`
        } else if (team[i].getRole() === 'Intern'){
            cardHTML += `
                <div class="card m-3" style="width: 18rem">
                        <div class="card-header bg-primary text-white">
                            <h3>${team[i].getName()} </h3>
                            <span class="h5"><i class="bi bi-mortarboard-fill"></i> Intern</span>
                        </div>
                        <div class="card-body">
                            <ul class ="list-group">
                                <li class="list-group-item">ID: ${team[i].getID()} </li>
                                <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}"> ${team[i].getEmail()} </a></li>
                                <li class="list-group-item">School: ${team[i].getSchool()} </li>
                            </ul>
                        </div>
                    </div>`
        }
    generateHTML(cardHTML);
    };
};

function generateHTML(cardHTML){
   var indexHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
        <link rel="stylesheet" href="./style.css"">
        <title>Team Members</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid bg-danger text-white">
            <div class="container">
                <h1 class="display-4 text-center  font-weight-bold">TEAM MEMBERS</h1>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center" id="insert-cards">
               ${cardHTML}
        </div>
    </body>
    </html>
    `
    console.log(cardHTML);
    return writeToFile(indexHTML);
}


// Function to write index.html
function writeToFile(data) {
    fs.writeFileSync('./dist/index.html', data, (err) => err ? console.error(err) : console.log('Successfully created index.html!!'));
}


// Function call to initialize app
init();

