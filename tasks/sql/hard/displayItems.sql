-- SQL - Hard

-- Consider the following relational database schema:

-- SELLER (S_id, Name, Bank_acc_no, Email, Phone)
-- STOCKS (S_id, Prod_id, S_Date)
-- PRODUCT (Prod_id, Prod_name, Description, Price, Expiry_date)

-- Create the Following Tables:

CREATE TABLE SELLER (
    -- TODO: Add all the requested fields (S_id, Name, Bank_acc_no, Email, Phone)
    S_id INT PRIMARY KEY,
    Name VARCHAR(255),
    Bank_acc_no VARCHAR(20),
    Email VARCHAR(255),
    Phone VARCHAR(15)
);

CREATE TABLE STOCKS (
    -- TODO: Add all the requested fields (S_id, Prod_id, S_Date)
     S_id INT,
    Prod_id INT,
    S_Date DATE,
    FOREIGN KEY (S_id) REFERENCES SELLER(S_id),
    FOREIGN KEY (Prod_id) REFERENCES PRODUCT(Prod_id)
);

CREATE TABLE PRODUCT (
    -- TODO: Add all the requested fields (Prod_id, Prod_name, Description, Price, Expiry_date)
    Prod_id INT PRIMARY KEY,
    Prod_name VARCHAR(255),
    Description TEXT,
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
SELECT S.Name, S.Bank_acc_no
FROM SELLER S
JOIN STOCKS STO ON S.S_id = STO.S_id
JOIN PRODUCT P ON STO.Prod_id = P.Prod_id
WHERE P.Price > 1000
  AND STO.S_Date >= DATE(CURRENT_DATE, '-1 year')
GROUP BY S.S_id, S.Name, S.Bank_acc_no
HAVING COUNT(DISTINCT STO.Prod_id) >= 24;

-- (b) Use nested query to display name of the sellers and their email address; who have in stock products with expiry date past today’s date
SELECT S.Name, S.Email
FROM SELLER S
WHERE S.S_id IN (
    SELECT ST.S_id
    FROM STOCKS ST
    JOIN PRODUCT P ON ST.Prod_id = P.Prod_id
    WHERE P.Expiry_date > DATE('now')
);
-- (c) Display the name of the products that are in stock by at least one seller and also those that are not in stock by any of the sellers
SELECT DISTINCT P.Prod_name
FROM PRODUCT P
LEFT JOIN STOCKS ST ON P.Prod_id = ST.Prod_id
WHERE ST.S_id IS NOT NULL;

-- (d) Use join query to display name of the sellers and name of the products stocked by them during March 23, 2020 and June 30, 2020.
SELECT S.Name, P.Prod_name
FROM SELLER S
JOIN STOCKS ST ON S.S_id = ST.S_id
JOIN PRODUCT P ON ST.Prod_id = P.Prod_id
WHERE ST.S_Date BETWEEN '2020-03-23' AND '2020-06-30';

-- (e) Display name of sellers who have in stock maximum number of different products and minimum number of different products
SELECT S.Name, COUNT(DISTINCT ST.Prod_id) AS NumProducts
FROM SELLER S
JOIN STOCKS ST ON S.S_id = ST.S_id
GROUP BY S.S_id
ORDER BY NumProducts DESC
LIMIT 1;  -- Seller with the maximum number of different products

SELECT S.Name, COUNT(DISTINCT ST.Prod_id) AS NumProducts
FROM SELLER S
JOIN STOCKS ST ON S.S_id = ST.S_id
GROUP BY S.S_id
ORDER BY NumProducts ASC
LIMIT 1;  -- Seller with the minimum number of different products