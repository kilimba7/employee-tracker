INSERT INTO employee (first_name, last_name, department_id, roles_id)
VALUES
  ('Ronald', 'Firbank', 1, 3),
  ('Virginia', 'Wolf', 2 , 5),
  ('Piers', 'Morgan', 3, 6),
  ('Charles', 'Cheese', 4, 7),
  ('Butcher', 'Benny', 4, 2),
  ('Doe', 'John', 1, 1),
  ('Washington', 'Booker', 2, 8),
  ('Ronaldo', 'Lionel', 3, 4);

INSERT INTO role (title, salary, department_id )
VALUES
('Sales Lead', 100000, 4),
('Sales Person', 70000, 4),
('Lead Engineer', 150000, 1),
('Software Engineer', 120000, 1),
('Account Manager', 160000, 2),
('Accountant', 125000, 2 ),
('Legal Team Lead', 250000, 3),
('Lawyer', 190000, 3);

INSERT INTO department (name)
VALUES
  ('Engineering'),
  ('Finance'),
  ('Legal'),
  ('Sales');






