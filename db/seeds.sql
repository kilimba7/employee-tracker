INSERT INTO department (name)
VALUES
  ('Engineering'),
  ('Finance'),
  ('Legal'),
  ('Sales');

INSERT INTO roles (title, salary, department_id )
VALUES
('Sales Lead', 100000, 4),
('Sales Person', 70000, 4),
('Lead Engineer', 150000, 1),
('Software Engineer', 120000, 1),
('Account Manager', 160000, 2),
('Accountant', 125000, 2 ),
('Manager', 250000, 3),
('Lawyer', 190000, 3);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, NULL),
  ('Virginia', 'Wolf', 2 , 2),
  ('Piers', 'Morgan', 3, 2),
  ('Charles', 'Cheese', 4, 2),
  ('Butcher', 'Benny', 4, 4),
  ('Doe', 'John', 1, 5),
  ('Washington', 'Booker', 2, 6),
  ('Ronaldo', 'Lionel', 3, 7);









