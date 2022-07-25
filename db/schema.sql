DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS department;


 CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);
 
 CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)
 ON DELETE SET NULL);

  CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL,
    roles_id INT,
    manager_id INT,
    CONSTRAINT fk_roles FOREIGN KEY (roles_id) REFERENCES roles(id)
 ON DELETE SET NULL,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id)
 );
 
-- -- Converts the department id into the department name 
-- SELECT roles.*, department.name AS department_name
-- FROM roles
-- LEFT JOIN department ON roles.department_id = department.id;


-- -- Converts the roles id into the name of the role 
-- SELECT employee.*, roles.title AS company_role
-- FROM employee
-- LEFT JOIN roles ON employee.roles_id = roles.id;


-- -- Converts the manager id into the name of employee who manages them
-- SELECT employee.*, 
-- CONCAT(employee.first_name, ' ', employee.last_name) AS manager_name
-- FROM employee manager
-- JOIN employee ON employee.manager_id = manager.id
-- ORDER BY manager_id; 


