//Connecting to the mysql database
const mysql = require('mysql2');

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

//Installing inquirer and the questions 
const inquirer = require('inquirer');

const userPrompt = () => {
    return inquirer
    .prompt([
    {
        type: 'list',
        name: 'title',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee', 'Updated Employee Role', 'View All Roles']
    },
    {
        type: 'input',
        name: 'test',
        message: "just scroll past"
    }
    ]);
};


// call once somewhere in the beginning of the app
const cTable = require('console.table');
console.table([
  {
    name: 'foo',
    age: 10
  }, {
    name: 'bar',
    age: 20
  }
]);

db.query(`SELECT * FROM roles`, (err, rows) => {
    console.log(rows);
  });


userPrompt();