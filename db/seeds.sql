INSERT INTO role (id, title, salary, department)
    -> VALUES
    -> (1, 'regional manager', 40000, 100),
    -> (2, 'ATTRM', 37500, 400),
    -> (3, 'salesperson', 3500, 400),
    -> (4, 'human resources', 3500, 200),
    -> (5, 'accountant', 37000, 600),
    -> (6, 'customer relations', 3500, 700),
    -> (7, 'warehouse staff', 30000, 800),
    -> (8, 'receptionist', 25000, 500)
    -> (9, 'quality control', 35000, 300);

INSERT INTO epmloyee (id, first_name, last_name, role_id, manager_id)
    -> VALUES
    -> (101, 'Michael', 'Scott', 1, NULL),
    -> (201, 'Dwight', 'Schrute', 2, 101),
    -> (301, 'James', 'Halpert', 3, 101),
    -> (302, 'Stanley', 'Hudson', 3, 101),
    -> (303, 'Phyllis', 'Vance', 3, 101),
    -> (401, 'Toby', 'Flenderson', 4, 101),
    -> (501, 'Angela', 'Martin', 5, 101),
    -> (502, 'Oscar', 'Martinez', 5, 101),
    -> (503, 'Kevin', 'Malone', 5, 101),
    -> (601, 'Kelly', 'Kapoor', 6, 101),
    -> (701, 'Darryl', 'Philbin', 7, 101),
    -> (702, 'Roy', 'Anderson', 7, 701),
    -> (703, 'Val', 'Johnson', 7, 701),
    -> (801, 'Pamela', 'Beasley', 8, 101)
    -> (901, 'Creed', 'Bratton', 9, 101)
    -> (902, 'Meredith', 'Palmer', 9, 101);

INSERT INTO department (id, name)
    -> VALUES
    -> ('management', 100),
    -> ('hr', 200),
    -> ('quality control', 300),
    -> ('sales', 400),
    -> ('reception', 500),
    -> ('accounting', 600),
    -> ('cust relations', 700),
    -> ('warehouse', 800);