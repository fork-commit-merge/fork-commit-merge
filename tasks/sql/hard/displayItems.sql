-- SQL - Hard

-- Consider the following relational database schema:

-- SELLER (S_id, Name, Bank_acc_no, Email, Phone)
-- STOCKS (S_id, Prod_id, S_Date)
-- PRODUCT (Prod_id, Prod_name, Description, Price, Expiry_date)

-- Create the Following Tables:

CREATE TABLE SELLER (
    S_id INT PRIMARY KEY,
    Name VARCHAR(255),
    Bank_acc_no VARCHAR(20),
    Email VARCHAR(255),
    Phone VARCHAR(15)
);

CREATE TABLE STOCKS (
    S_id INT,
    Prod_id INT,
    S_Date DATE,
    FOREIGN KEY (S_id) REFERENCES SELLER(S_id),
    FOREIGN KEY (Prod_id) REFERENCES PRODUCT(Prod_id)
);

CREATE TABLE PRODUCT (
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

-- (b) Use nested query to display name of the sellers and their email address; who have in stock products with expiry date past today’s date

-- (c) Display the name of the products that are in stock by at least one seller and also those that are not in stock by any of the sellers

-- (d) Use join query to display name of the sellers and name of the products stocked by them during March 23, 2020 and June 30, 2020.

-- (e) Display name of sellers who have in stock maximum number of different products and minimum number of different products


-- (a) answer
SELECT S.Name, S.Bank_acc_no
FROM SELLER S
WHERE S.S_id IN (
    SELECT S_id
    FROM STOCKS
    WHERE S_Date >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
    GROUP BY S_id
    HAVING COUNT(DISTINCT Prod_id) >= 24
);

--(b) answer
SELECT S.Name, S.Email
FROM SELLER S
WHERE S.S_id IN (
    SELECT DISTINCT ST.S_id
    FROM STOCKS ST
    JOIN PRODUCT P ON ST.Prod_id = P.Prod_id
    WHERE P.Expiry_date > CURDATE()
);


--(c) answer
-- 有库存的产品
SELECT DISTINCT P.Prod_name AS InStockProduct
FROM PRODUCT P
WHERE P.Prod_id IN (SELECT DISTINCT Prod_id FROM STOCKS);

-- 没有库存的产品
SELECT DISTINCT P.Prod_name AS NotInStockProduct
FROM PRODUCT P
WHERE P.Prod_id NOT IN (SELECT DISTINCT Prod_id FROM STOCKS);

--(d) answer
SELECT S.Name AS SellerName, P.Prod_name AS ProductName
FROM SELLER S
JOIN STOCKS ST ON S.S_id = ST.S_id
JOIN PRODUCT P ON ST.Prod_id = P.Prod_id
WHERE ST.S_Date BETWEEN '2020-03-23' AND '2020-06-30';

--(e) answer
-- 卖家库存了最多不同产品
SELECT S.Name AS MaxStockedSeller
FROM SELLER S
JOIN STOCKS ST ON S.S_id = ST.S_id
GROUP BY S.S_id
ORDER BY COUNT(DISTINCT ST.Prod_id) DESC
LIMIT 1;

-- 卖家库存了最少不同产品
SELECT S.Name AS MinStockedSeller
FROM SELLER S
JOIN STOCKS ST ON S.S_id = ST.S_id
GROUP BY S.S_id
ORDER BY COUNT(DISTINCT ST.Prod_id)
LIMIT 1;
