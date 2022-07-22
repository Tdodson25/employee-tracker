function promptUser(){
    inquirer.prompt(
        {
            message: 'What would you like to do?',
            type: 'list',
            name: 'firstQ',
            choices:[
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Department',
                'Quit',
            ],
        }      
    );