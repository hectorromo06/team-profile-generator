const inquirer = require('inquirer');
const {
    writeFile,
    copyFile
} = require('./utils/generate-site');
const generatePage = require('./src/js/generate-html');

const promptManager = () => {
    return inquirer
        .prompt([{
            type: 'input',
            name: 'managerName',
            message: 'Please enter the managers name: (Required)',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log('Please enter the managers name!');
                    return false;
                }
            }
        }, {
            type: 'number',
            name: 'id',
            message: 'Please enter the managers employee ID : (Required)',
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log('Please enter the managers employee ID!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'email',
            message: 'Please enter the managers email: (Required)',
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the managers email!');
                    return false;
                }
            }
        }, {
            type: 'number',
            name: 'officeNum',
            message: 'Please enter the managers office number: (Required)',
            validate: managerOfficeNumInput => {
                if (managerOfficeNumInput) {
                    return true;
                } else {
                    console.log('Please enter the managers office number!');
                    return false;
                }
            }
        }])
};

const promptTeam = teamData => {
    return inquirer
        .prompt([{
            type: 'list',
            name: 'member',
            message: 'Select from the following list:',
            choices: ['Engineer', 'Intern', 'Finish Team']
        }])
        .then(resp => {
            if (resp.member == 'Engineer') {
                return promptEngineer(teamData);
            } else if (resp.member == 'Intern') {
                return promptIntern(teamData);
            } else if (resp.member == 'Finish Team') {
                return teamData;
            }
        });
};

const promptEngineer = teamData => {
    // If no 'engineers' array property, create one
    if (!teamData.engineers) {
        teamData.engineers = [];
    }
    console.log(`
    ===================
    Enter Engineer Info
    ===================
    `);
    return inquirer
        .prompt([{
            type: 'input',
            name: 'engName',
            message: 'Please enter the engineers name: (Required)',
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log('Please enter the engineers name!');
                    return false;
                }
            }
        }, {
            type: 'number',
            name: 'engId',
            message: 'Please enter the engineers employee ID : (Required)',
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log('Please enter the engineers employee ID!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'engEmail',
            message: 'Please enter the engineers email: (Required)',
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the engineers email!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'github',
            message: 'Please enter the engineers GitHub username: (Required)',
            validate: engineerGithubInput => {
                if (engineerGithubInput) {
                    return true;
                } else {
                    console.log('Please enter the engineers GitHub username!');
                    return false;
                }
            }
        }])
        .then(resp => {
            teamData.engineers.push(resp);
            return promptTeam(teamData);
        })
};

const promptIntern = teamData => {
    // If no 'interns' array property, create one
    if (!teamData.interns) {
        teamData.interns = [];
    }
    console.log(`
    ==================
    Enter Interns Info
    ==================
    `);
    return inquirer
        .prompt([{
            type: 'input',
            name: 'internName',
            message: 'Please enter the interns name: (Required)',
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log('Please enter the interns name!');
                    return false;
                }
            }
        }, {
            type: 'number',
            name: 'id',
            message: 'Please enter the interns employee ID : (Required)',
            validate: internIdInput => {
                if (internIdInput) {
                    return true;
                } else {
                    console.log('Please enter the interns employee ID!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'email',
            message: 'Please enter the interns email: (Required)',
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the interns email!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'github',
            message: 'Please enter the interns school name: (Required)',
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log('Please enter the interns school name!');
                    return false;
                }
            }
        }])
        .then(resp => {
            teamData.interns.push(resp);
            return promptTeam(teamData);
        })
};

promptManager()
    .then(promptTeam)
    // .then(resp => {
    //     console.log(resp);
    // })
    .then(teamData => {
        return generatePage(teamData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });