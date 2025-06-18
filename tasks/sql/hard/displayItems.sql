-- Create the Following Tables:

CREATE TABLE SELLER (
    S_id INTEGER PRIMARY KEY,
    Name TEXT,
    Bank_acc_no TEXT,
    Email TEXT,
    Phone TEXT
);

CREATE TABLE STOCKS (
    S_id INTEGER,
    Prod_id INTEGER,
    S_Date DATE
);

CREATE TABLE PRODUCT (
    Prod_id INTEGER PRIMARY KEY,
    Prod_name TEXT,
    Description TEXT,
    Price REAL,
    Expiry_date DATE
);

-- Insert values into the SELLER table
INSERT INTO SELLER (S_id, Name, Bank_acc_no, Email, Phone) VALUES
(1, 'John Doe', '1234567890', 'johndoe@email.com', '555-123-4567'),
(2, 'Jane Smith', '9876543210', 'janesmith@email.com', '555-987-6543');

-- Insert values into the STOCKS table
INSERT INTO STOCKS (S_id, Prod_id, S_Date) VALUES
(1, 101, '2023-01-15'),
(1, 102, '2023-02-20'),
(2, 103, '2023-03-10');

-- Insert values into the PRODUCT table
INSERT INTO PRODUCT (Prod_id, Prod_name, Description, Price, Expiry_date) VALUES
(101, 'Product A', 'Description for Product A', 25.99, '2023-12-31'),
(102, 'Product B', 'Description for Product B', 19.99, '2023-11-30'),
(103, 'Product C', 'Description for Product C', 39.99, '2023-10-31');

-- (a) Sellers and their bank account number who stocked at least 24 different products with price > 1000 in the last year
SELECT s.Name, s.Bank_acc_no
FROM SELLER s
JOIN STOCKS st ON s.S_id = st.S_id
JOIN PRODUCT p ON st.Prod_id = p.Prod_id
WHERE p.Price > 1000
  AND st.S_Date >= date('now', '-1 year')
GROUP BY s.S_id
HAVING COUNT(DISTINCT st.Prod_id) >= 24;

-- (b) Sellers and their email who have in stock products with expiry date past today (nested query)
SELECT Name, Email
FROM SELLER
WHERE S_id IN (
  SELECT st.S_id
  FROM STOCKS st
  JOIN PRODUCT p ON st.Prod_id = p.Prod_id
  WHERE p.Expiry_date > date('now')
);

-- (c) Products that are in stock by at least one seller and those that are not
SELECT Prod_name, 
  CASE 
    WHEN Prod_id IN (SELECT Prod_id FROM STOCKS) THEN 'In Stock'
    ELSE 'Not In Stock'
  END AS Stock_Status
FROM PRODUCT;

-- (d) Sellers and products stocked by them between March 23, 2020 and June 30, 2020
SELECT s.Name AS Seller_Name, p.Prod_name AS Product_Name
FROM SELLER s
JOIN STOCKS st ON s.S_id = st.S_id
JOIN PRODUCT p ON st.Prod_id = p.Prod_id
WHERE st.S_Date BETWEEN '2020-03-23' AND '2020-06-30';

-- (e) Sellers who have in stock the maximum and minimum number of different products
WITH ProductCounts AS (
  SELECT s.S_id, s.Name, COUNT(DISTINCT st.Prod_id) AS prod_count
  FROM SELLER s
  JOIN STOCKS st ON s.S_id = st.S_id
  GROUP BY s.S_id
),
MaxMin AS (
  SELECT MAX(prod_count) AS max_count, MIN(prod_count) AS min_count FROM ProductCounts
)
SELECT pc.Name, pc.prod_count
FROM ProductCounts pc, MaxMin mm
WHERE pc.prod_count = mm.max_count OR pc.prod_count = mm.min_count;
