//Connecting to the mysql database and any other required module
const mysql = require('mysql2');
const inquirer = require('inquirer');
// call once somewhere in the beginning of the app
const cTable = require('console.table');

console.log(
  `
  ---------------------------
  Welcome to Employee Manager 
  ---------------------------
`
);

const db = mysql.createConnection(
    {
        host: 'localhost',
        // my sql username
        user: 'root',
        password: '',
        database: 'tracker'
    },
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

        case 'Updated Employee Role':
        updateRole();
        break;

        case 'View All Roles':
        viewRoles();
        break;

        case 'Add Role':
        addRoles();
        break;

        case 'View All Departments':
        viewDepartments();
        break;

        case 'Add Department':
        addDepartment();
        break;

        case 'Update Department':
        updateDepartment();
        break;

        default:
          userPrompt();
    }
});
};

// View all employees
const viewEmployees = () => {
  db.query(`SELECT employee.id, employee.first_name, employee.last_name, employee.roles_id,
  CONCAT(employee.first_name, ' ', employee.last_name) AS manager
  FROM employee manager
  JOIN employee ON employee.manager_id = manager.id; `, 
  (err, rows) => {
    console.table(rows);
    });
};

// Add Employee
const addEmployee = () => {
  db.query(`jj` ,
  (err, rows) => {
    console.table(rows);
    });
};

// Updated employee role
const updateRole = () => {
  db.query(`jj` ,
  (err, rows) => {
    console.table(rows);
    });
};

// View all roles
const viewRoles = () => {
  db.query(`SELECT roles.id, roles.title, department.name AS department, roles.salary
  FROM roles
  LEFT JOIN department ON roles.department_id = department.id; `, 
  (err, rows) => {
    console.table(rows);
    });
};

// Add role
const addRoles = () => {
  db.query(`jj` ,
  (err, rows) => {
    console.table(rows);
    });
};

// View all departments
const viewDepartments = () => {
  db.query(`SELECT department.*
  FROM department; `, 
  (err, rows) => {
    console.table(rows);
    });
};

// Add department
const addDepartment = () => {
  db.query(`jj` ,
  (err, rows) => {
    console.table(rows);
    });
};

// Add department
const updateDepartment = () => {
  db.query(`jj` ,
  (err, rows) => {
    console.table(rows);
    });
};




userPrompt();
