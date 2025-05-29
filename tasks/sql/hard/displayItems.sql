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

-- (a) Display name of the sellers and their bank account number who stocked at least 24 different products with a price higher than 1000 rupees in the last one year

SELECT s.Name, s.Bank_acc_no
FROM SELLER s
WHERE s.S_id IN (
    SELECT st.S_id
    FROM STOCKS st
    JOIN PRODUCT p ON st.Prod_id = p.Prod_id
    WHERE p.Price > 1000 AND st.S_Date >= DATE('now', '-1 year')
    GROUP BY st.S_id
    HAVING COUNT(DISTINCT st.Prod_id) >= 24
);

-- (b) Use a nested query to display the name of the sellers and their email address; who have in stock products with an expiry date past today’s date

SELECT Name, Email
FROM SELLER
WHERE S_id IN (
    SELECT S_id
    FROM STOCKS
    WHERE Prod_id IN (
        SELECT Prod_id
        FROM PRODUCT
        WHERE Expiry_date > DATE('now')
    )
);

-- (c) Display the name of the products that are in stock by at least one seller and also those that are not in stock by any of the sellers

SELECT Prod_name
FROM PRODUCT
WHERE Prod_id IN (SELECT Prod_id FROM STOCKS)
UNION
SELECT Prod_name
FROM PRODUCT
WHERE Prod_id NOT IN (SELECT Prod_id FROM STOCKS);

-- (d) Use a join query to display the name of the sellers and the name of the products stocked by them during March 23, 2020, and June 30, 2020

SELECT s.Name, p.Prod_name
FROM SELLER s
JOIN STOCKS st ON s.S_id = st.S_id
JOIN PRODUCT p ON st.Prod_id = p.Prod_id
WHERE st.S_Date BETWEEN '2020-03-23' AND '2020-06-30';

-- (e) Display the name of sellers who have in stock the maximum number of different products and the minimum number of different products

WITH ProductCounts AS (
    SELECT S_id, COUNT(DISTINCT Prod_id) AS prod_count
    FROM STOCKS
    GROUP BY S_id
)
SELECT s.Name
FROM SELLER s
JOIN ProductCounts pc ON s.S_id = pc.S_id
WHERE pc.prod_count = (SELECT MAX(prod_count) FROM ProductCounts)
   OR pc.prod_count = (SELECT MIN(prod_count) FROM ProductCounts);
