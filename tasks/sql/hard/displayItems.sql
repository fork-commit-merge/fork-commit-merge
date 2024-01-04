-- Create the Following Tables:

CREATE TABLE IF NOT EXISTS SELLER (
    S_id INT PRIMARY KEY,
    Name VARCHAR(100),
    Bank_acc_no VARCHAR(20),
    Email VARCHAR(100),
    Phone VARCHAR(15)
);

CREATE TABLE IF NOT EXISTS STOCKS (
    S_id INT,
    Prod_id INT,
    S_Date DATE,
    FOREIGN KEY (S_id) REFERENCES SELLER(S_id)
);

CREATE TABLE IF NOT EXISTS PRODUCT (
    Prod_id INT PRIMARY KEY,
    Prod_name VARCHAR(100),
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


-- (a) Display name of the sellers and their bank account number who stocked at least 24 different products with a price higher than 1000 rupees in the last one year
SELECT s.Name, s.Bank_acc_no
FROM SELLER s
JOIN STOCKS st ON s.S_id = st.S_id
JOIN PRODUCT p ON st.Prod_id = p.Prod_id
WHERE p.Price > 1000 AND st.S_Date > DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
GROUP BY s.S_id
HAVING COUNT(DISTINCT p.Prod_id) >= 24;

-- (b) Use a nested query to display the name of the sellers and their email address; who have in stock products with an expiry date past today’s date
SELECT s.Name, s.Email
FROM SELLER s
WHERE EXISTS (
    SELECT 1
    FROM STOCKS st
    JOIN PRODUCT p ON st.Prod_id = p.Prod_id
    WHERE s.S_id = st.S_id AND p.Expiry_date > CURDATE()
);

-- (c) Display the name of the products that are in stock by at least one seller and also those that are not in stock by any of the sellers

SELECT p.Prod_name
FROM PRODUCT p
WHERE EXISTS (
    SELECT 1
    FROM STOCKS st
    WHERE p.Prod_id = st.Prod_id
)
UNION
SELECT p.Prod_name
FROM PRODUCT p
WHERE NOT EXISTS (
    SELECT 1
    FROM STOCKS st
    WHERE p.Prod_id = st.Prod_id
);

-- (d) Use a join query to display the name of the sellers and the name of the products stocked by them during March 23, 2020, and June 30, 2020

SELECT s.Name, p.Prod_name
FROM SELLER s
JOIN STOCKS st ON s.S_id = st.S_id
JOIN PRODUCT p ON st.Prod_id = p.Prod_id
WHERE st.S_Date BETWEEN '2020-03-23' AND '2020-06-30';

-- (e) Display the name of sellers who have in stock the maximum number of different products and the minimum number of different products

SELECT s.Name
FROM SELLER s
JOIN STOCKS st ON s.S_id = st.S_id
GROUP BY s.S_id
HAVING COUNT(DISTINCT st.Prod_id) = (
    SELECT MAX(prod_count)
    FROM (
        SELECT COUNT(DISTINCT Prod_id) as prod_count
        FROM STOCKS
        GROUP BY S_id
    ) as subquery
)
OR COUNT(DISTINCT st.Prod_id) = (
    SELECT MIN(prod_count)
    FROM (
        SELECT COUNT(DISTINCT Prod_id) as prod_count
        FROM STOCKS
        GROUP BY S_id
    ) as subquery
);