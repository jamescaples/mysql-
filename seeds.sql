INSERT INTO departments (name) VALUES ("Sales");
INSERT INTO departments (name) VALUES ("HR");

INSERT INTO roles (title, salary, department_id)
VALUES ("Acount Executive", 50000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Eddy", "Williams", 3, 1);