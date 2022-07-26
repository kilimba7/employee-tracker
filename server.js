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
        choices: ['View All Employees', 'Add Employee', 'Updated Employee Role', 'View All Roles', 'Add Roles', 'View All Departments', 'Add Department']
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

        case 'Add Roles':
        addRoles();
        break;

        case 'View All Departments':
        viewDepartments();
        break;

        case 'Add Department':
        addDepartment();
        break;

        default:
          userPrompt();
    }
});
};

// View all employees
const viewEmployees = () => {
  db.query(`SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary,
  CONCAT(manager.first_name, ' ', manager.last_name) AS manager
  
  FROM employee manager

    RIGHT JOIN employee
    ON employee.manager_id = manager.id
  
    LEFT JOIN roles
    ON employee.roles_id = roles.id 
  
    LEFT JOIN department
    ON roles.department_id = department.id
  
  ; `, 
  (err, rows) => {
    console.table(rows);
    return userPrompt();
    });
};

// Add Employee
const addEmployee = () => {
  return inquirer
    .prompt([
    {
        type: 'input',
        name: 'first_name',
        message: 'What is your first name?',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is your last name?',
  },
  {
    type: 'input',
    name: 'roles_id',
    message: 'What is your role?',
},
{
  type: 'input',
  name: 'manager_id',
  message: 'Who is your manager? (id)',
},
]).then(val => {
  let params = [
    val.first_name,
    val.last_name,
    val.roles_id,
    val.manager_id]

    let sql = `INSERT INTO employee (first_name, last_name, roles_id, manager_id)
    VALUES (?,?,?,?)`;
    db.query(sql, params, (err, rows) => {
    console.table(rows);
    return userPrompt();

  });
});
};

// Update employee role
const updateRole = () => {
return inquirer
  .prompt([
  {
      type: 'list',
      name: 'roles_employee',
      message: 'Which employees do you want to update?',
      choices: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  {
    type: 'list',
    name: 'roles_type',
    message: 'Which role do you want to assign to them?',
    choices: [1, 2, 3]
},
]).then(val => {
  let params = [
    val.employee_id,
    val.params]

    let sql = `UPDATE roles SET employee_id = ? 
    WHERE id = ?
    `;
    db.query(sql, params, (err, rows) => {
    console.table(rows);
    return userPrompt();

  });
});
};


// View all roles
const viewRoles = () => {
  db.query(`SELECT roles.id, roles.title, department.name AS department, roles.salary
  FROM roles
  LEFT JOIN department ON roles.department_id = department.id; `, 
  (err, rows) => {
    console.table(rows);
    return userPrompt();
    });
};  

// Add roles
const addRoles = () => {
  let departmentChoice = [];
  return inquirer
    .prompt([
    {
        type: 'input',
        name: 'roles_title',
        message: 'What is your title?',
    },
    {
      type: 'input',
      name: 'roles_salary',
      message: 'What is your salary?',
  },
  {
    type: 'list',
    name: 'department_choice',
    message: 'What is your department?',
    choices: departmentChoice
},
  
])
.then(answer => {
  let params = [
    answer.roles_title,
    answer.roles_salary,
    answer.department_choice
  ]

let sql = `INSERT INTO roles (title, salary, department_id)
VALUES (?,?,?)`
;

  db.query(sql, params, (err, rows) => {
    console.table(rows);
    return userPrompt();

  });
});
};

// View all departments
const viewDepartments = () => {
  db.query(`SELECT department.*
  FROM department; `, 
  (err, rows) => {
    console.table(rows);
    return userPrompt();
    });
};

// Add department
const addDepartment = () => {
  return inquirer
    .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your department name?',
    },
]).then(data => {
  let params = [data.name]
  let sql = `INSERT INTO department (name)
  VALUES (?)`;
  db.query(sql, params, (err, rows) => {
    console.table(rows);
    return userPrompt();

  });
});
};


userPrompt();
