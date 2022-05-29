const inquirer = require('inquirer');
const {
    writeFile,
    copyFile
} = require('./utils/generate-site');
const generatePage = require('./src/js/generate-html');

const promptUser = () => {
    return inquirer
        .prompt([{
            type: 'input',
            name: 'name',
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
        }]);
};

promptUser()
    .then(promptEngineer)
    .then(promptIntern)
    .then(resp => {
        console.log(resp);
    })
// .then(teamData => {
//     return generatePage(teamData);
// })
// .then(pageHTML => {
//     return writeFile(pageHTML);
// })
// .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
// })
// .then(copyFileResponse => {
//     console.log(copyFileResponse);
// })
// .catch(err => {
//     console.log(err);
// });