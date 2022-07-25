//Connecting to the mysql database and any other required module
const mysql = require('mysql2');
const inquirer = require('inquirer');
// call once somewhere in the beginning of the app
const cTable = require('console.table');



const db = mysql.createConnection(
    {
        host: 'localhost',
        // my sql username
        user: 'root',
        password: '',
        database: 'tracker'
    },
    console.log('Connected to the employee tracker database')
);

const userPrompt = () => {
    return inquirer
    .prompt([
    {
        type: 'list',
        name: 'select',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee', 'Updated Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Update Department']
    },
    ])
    .then(val => {
      switch (val.select) {
        case 'View All Employees':
        viewEmployees();
        break;

        case 'Add Employee':
        addEmployee();
        break;

        default:
          userPrompt();
    }
});
};

// Get all employees
const viewEmployees = () => {
  db.query(`SELECT employee.*, 
  CONCAT(employee.first_name, ' ', employee.last_name) AS manager_name
  FROM employee manager
  JOIN employee ON employee.manager_id = manager.id; `, 
  (err, rows) => {
    console.table(rows);
    });

};





userPrompt();