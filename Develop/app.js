const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");




const teamMembers = []

// Questions
function createTeam() {

    inquirer
        .prompt([

            {
                type: "list",
                name: "memberChoice",
                message: "What is your role?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "No more employees"
                ]
            }

        ]).then(userChoice => {
            // pass in the memberChoice
            switch (userChoice.memberChoice) {
                
                case "Manager":
                    addManager();
                    break;

                case "Engineer":
                    addEngineer();
                    break;

                case "Intern":
                    addIntern();
                    break;

                case "No more employees":
                    render(teamMembers);
                    break

            }
        })


    function addManager() {

        inquirer
            .prompt([

                {
                    type: "input",
                    message: "What is your name?",
                    name: "managerName"
                },

                {
                    type: "input",
                    message: "What is your employee ID?",
                    name: "managerID"
                },

                {
                    type: "input",
                    message: "What is your email?",
                    name: "managerEmail"
                },

                {
                    type: "input",
                    message: "What is your office number?",
                    name: "managerOfficeNumber"
                }

            ]).then(userChoice => {
                console.log(userChoice);

                const manager = new Manager(userChoice.managerName, userChoice.managerID, userChoice.managerEmail, userChoice.managerOfficeNumber)

                teamMembers.push(manager)

                createTeam();
                const content = render(teamMembers)

                fs.writeFile(outputPath, content, err => {
                if (err) {
                    console.error(err)
                    return
                }
                //file written successfully
                })

            })


    }


    function addEngineer() {
        inquirer
            .prompt([

                {
                    type: "input",
                    message: "What is your name?",
                    name: "engineerName"
                },

                {
                    type: "input",
                    message: "What is your employee ID?",
                    name: "engineerID"
                },

                {
                    type: "input",
                    message: "What is your email?",
                    name: "engineerEmail"
                },

                {
                    type: "input",
                    message: "What is your GitHub username?",
                    name: "gitHub"
                }

            ]).then(userChoice => {
                console.log(userChoice);

                const engineer = new Engineer(userChoice.engineerName, userChoice.engineerID, userChoice.engineerEmail, userChoice.engineerGithub)

                teamMembers.push(engineer)

                createTeam();
                const content = render(teamMembers)

                //generating html file
                fs.writeFile(outputPath, content, err => {
                if (err) {
                    console.error(err)
                    return
                }
                //file written successfully
                })

            })
    }


    function addIntern() {

        inquirer
            .prompt([

                {
                    type: "input",
                    message: "What is your name?",
                    name: "internName"
                },

                {
                    type: "input",
                    message: "What is your employee ID?",
                    name: "internID"
                },

                {
                    type: "input",
                    message: "What is your email?",
                    name: "internEmail"
                },

                {
                    type: "input",
                    message: "What is your school?",
                    name: "internSchool"
                }
            ]).then(userChoice => {
                console.log(userChoice);

                const intern = new Intern(userChoice.internName, userChoice.internID, userChoice.internEmail, userChoice.internSchool)

                teamMembers.push(intern)

                createTeam();
                const content = render(teamMembers)

                fs.writeFile(outputPath, content, err => {
                if (err) {
                    console.error(err)
                    return
                }
                //file written successfully
                })
            })
    }

}

module.exports = teamMembers

createTeam();

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");