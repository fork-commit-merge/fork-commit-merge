-- SQL - Hard

-- Consider the following relational database schema:

-- SELLER (S_id, Name, Bank_acc_no, Email, Phone)
-- STOCKS (S_id, Prod_id, S_Date)
-- PRODUCT (Prod_id, Prod_name, Description, Price, Expiry_date)

-- Create the Following Tables:

CREATE TABLE SELLER (
    -- TODO: Add all the requested fields (S_id, Name, Bank_acc_no, Email, Phone)
);

CREATE TABLE STOCKS (
    -- TODO: Add all the requested fields (S_id, Prod_id, S_Date)
);

CREATE TABLE PRODUCT (
    -- TODO: Add all the requested fields (Prod_id, Prod_name, Description, Price, Expiry_date)
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

-- (b) Use nested query to display name of the sellers and their email address; who have in stock products with expiry date past today’s date

-- (c) Display the name of the products that are in stock by at least one seller and also those that are not in stock by any of the sellers

-- (d) Use join query to display name of the sellers and name of the products stocked by them during March 23, 2020 and June 30, 2020.

-- (e) Display name of sellers who have in stock maximum number of different products and minimum number of different products
