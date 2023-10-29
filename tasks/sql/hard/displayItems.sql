-- SQL - Hard

-- Consider the following relational database schema:

-- SELLER (S_id, Name, Bank_acc_no, Email, Phone)
-- STOCKS (S_id, Prod_id, S_Date)
-- PRODUCT (Prod_id, Prod_name, Description, Price, Expiry_date)

-- Create the Following Tables:

CREATE TABLE SELLER (
    -- TODO: Add all the requested fields (S_id, Name, Bank_acc_no, Email, Phone)
    S_id INT,
    Name VARCHAR(255),
    Bank_acc_no VARCHAR(255),
    Email VARCHAR(255),
    Phone VARCHAR(255)
);

CREATE TABLE STOCKS (
    -- TODO: Add all the requested fields (S_id, Prod_id, S_Date)
    S_id INT,
    Prod_id INT,
    S_Date DATE
);

CREATE TABLE PRODUCT (
    -- TODO: Add all the requested fields (Prod_id, Prod_name, Description, Price, Expiry_date)
    Prod_id INT,
    Prod_name VARCHAR(255),
    Description VARCHAR(255),
    Price DECIMAL(10, 2),
    Expiry_date DATE
);


-- Insert values into the SELLER table
INSERT INTO SELLER (S_id, Name, Bank_acc_no, Email, Phone)
VALUES
    (1, 'John Doe', '1234567890', 'johndoe@email.com', '555-123-4567'),
    (2, 'Jane Smith', '9876543210', 'janesmith@email.com', '555-987-6543');

-- Insert values into the STOCKS table
INSERT INTO STOCKS (S_id, Prod_id, S_Date)
VALUES
    (1, 101, '2023-01-15'),
    (1, 102, '2023-02-20'),
    (2, 103, '2023-03-10');


-- Insert values into the PRODUCT table
INSERT INTO PRODUCT (Prod_id, Prod_name, Description, Price, Expiry_date)
VALUES
    (101, 'Product A', 'Description for Product A', 25.99, '2023-12-31'),
    (102, 'Product B', 'Description for Product B', 19.99, '2023-11-30'),
    (103, 'Product C', 'Description for Product C', 39.99, '2023-10-15');


-- Display the following :

-- (a) Display name of the sellers and their bank account number who stocked at least 24 different products with price higher than 1000 rupees in the last one year

SELECT
    S.Name,
    S.Bank_acc_no
FROM
    SELLER S
    INNER JOIN STOCKS ST ON S.S_id = ST.S_id
    INNER JOIN PRODUCT P ON ST.Prod_id = P.Prod_id
WHERE
    P.Price > 1000
    AND ST.S_Date BETWEEN DATE_SUB(NOW(), INTERVAL 1 YEAR) AND NOW();
-- (b) Use nested query to display name of the sellers and their email address; who have in stock products with expiry date past today’s date
select S.Name, S.Email
from SELLER S
where S.S_id in (
    select ST.S_id
    from STOCKS ST
    where ST.Prod_id in (
        select P.Prod_id
        from PRODUCT P
        where P.Expiry_date > NOW()
    )
);

-- (c) Display the name of the products that are in stock by at least one seller and also those that are not in stock by any of the sellers
select P.Prod_name
from PRODUCT P
where P.Prod_id in (
    select ST.Prod_id
    from STOCKS ST
);
-- (d) Use join query to display name of the sellers and name of the products stocked by them during March 23, 2020 and June 30, 2020.
select S.Name, P.Prod_name
from SELLER S
inner join STOCKS ST on S.S_id = ST.S_id
inner join PRODUCT P on ST.Prod_id = P.Prod_id
where ST.S_Date between '2020-03-23' and '2020-06-30';
-- (e) Display name of sellers who have in stock maximum number of different products and minimum number of different products
select S.Name
from SELLER S
where S.S_id in (
    select ST.S_id
    from STOCKS ST
    group by ST.S_id
    having count(ST.Prod_id) = (
        select max(count(ST.Prod_id))
        from STOCKS ST
        group by ST.S_id
    )
);
