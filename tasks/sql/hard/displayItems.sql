-- Create the Following Tables:

CREATE TABLE SELLER (
    S_id INT PRIMARY KEY,
    Name VARCHAR(255),
    Bank_acc_no VARCHAR(255),
    Email VARCHAR(255),
    Phone VARCHAR(255)
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

-- (a) Display name of the sellers and their bank account number who stocked at least 24 different products with a price higher than 1000 rupees in the last one year
SELECT S.Name, S.Bank_acc_no
FROM SELLER S
WHERE S.S_id IN (
    SELECT ST.S_id
    FROM STOCKS ST
    JOIN PRODUCT P ON ST.Prod_id = P.Prod_id
    WHERE P.Price > 1000
    AND ST.S_Date >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
    GROUP BY ST.S_id
    HAVING COUNT(DISTINCT P.Prod_id) >= 24
);

-- (b) Use a nested query to display the name of the sellers and their email address; who have in stock products with an expiry date past today’s date
SELECT S.Name, S.Email
FROM SELLER S
WHERE S.S_id IN (
    SELECT DISTINCT ST.S_id
    FROM STOCKS ST
    JOIN PRODUCT P ON ST.Prod_id = P.Prod_id
    WHERE P.Expiry_date > CURDATE()
);

-- (c) Display the name of the products that are in stock by at least one seller and also those that are not in stock by any of the sellers
-- Products in stock by at least one seller
SELECT DISTINCT P.Prod_name
FROM PRODUCT P
JOIN STOCKS ST ON P.Prod_id = ST.Prod_id

UNION

-- Products not in stock by any seller
SELECT DISTINCT P.Prod_name
FROM PRODUCT P
WHERE P.Prod_id NOT IN (
    SELECT DISTINCT ST.Prod_id
    FROM STOCKS ST
);

-- (d) Use a join query to display the name of the sellers and the name of the products stocked by them during March 23, 2020, and June 30, 2020
SELECT S.Name, P.Prod_name
FROM SELLER S
JOIN STOCKS ST ON S.S_id = ST.S_id
JOIN PRODUCT P ON ST.Prod_id = P.Prod_id
WHERE ST.S_Date BETWEEN '2020-03-23' AND '2020-06-30';

-- (e) Display the name of sellers who have in stock the maximum number of different products and the minimum number of different products
-- Sellers with the maximum number of different products in stock
SELECT S.Name, COUNT(DISTINCT ST.Prod_id) AS num_products
FROM SELLER S
JOIN STOCKS ST ON S.S_id = ST.S_id
GROUP BY S.Name
HAVING COUNT(DISTINCT ST.Prod_id) = (
    SELECT MAX(num_products)
    FROM (
        SELECT COUNT(DISTINCT ST1.Prod_id) AS num_products
        FROM STOCKS ST1
        GROUP BY ST1.S_id
    ) AS max_products
);

-- Sellers with the minimum number of different products in stock
SELECT S.Name, COUNT(DISTINCT ST.Prod_id) AS num_products
FROM SELLER S
JOIN STOCKS ST ON S.S_id = ST.S_id
GROUP BY S.Name
HAVING COUNT(DISTINCT ST.Prod_id) = (
    SELECT MIN(num_products)
    FROM (
        SELECT COUNT(DISTINCT ST1.Prod_id) AS num_products
        FROM STOCKS ST1
        GROUP BY ST1.S_id
    ) AS min_products
);
