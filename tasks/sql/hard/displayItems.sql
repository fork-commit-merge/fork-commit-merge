-- Create SELLER Table
CREATE TABLE SELLER (
    S_id INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Bank_acc_no VARCHAR(50),
    Email VARCHAR(100),
    Phone VARCHAR(20)
);

-- Create PRODUCT Table
CREATE TABLE PRODUCT (
    Prod_id INT PRIMARY KEY,
    Prod_name VARCHAR(100) NOT NULL,
    Description TEXT,
    Price DECIMAL(10, 2) NOT NULL,
    Expiry_date DATE
);

-- Create STOCKS Table (Junction Table between SELLER and PRODUCT)
CREATE TABLE STOCKS (
    S_id INT,
    Prod_id INT,
    S_Date DATE,
    PRIMARY KEY (S_id, Prod_id),
    FOREIGN KEY (S_id) REFERENCES SELLER(S_id),
    FOREIGN KEY (Prod_id) REFERENCES PRODUCT(Prod_id)
);

-- Insert values into the SELLER table
INSERT INTO SELLER (S_id, Name, Bank_acc_no, Email, Phone) VALUES
(1, 'Ali Traders', 'PK12MEZN000111222', 'ali@traders.com', '03001234567'),
(2, 'Khan Suppliers', 'PK12HBL000333444', 'khan@suppliers.com', '03119876543');

-- Insert values into the PRODUCT table
INSERT INTO PRODUCT (Prod_id, Prod_name, Description, Price, Expiry_date) VALUES
(101, 'Cooking Oil 5L', '5 Litre Pack Cooking Oil', 2500.00, '2027-12-31'),
(102, 'Wheat Flour 10kg', 'Whole Wheat Premium Flour', 1200.00, '2026-11-15');

-- Insert values into the STOCKS table
INSERT INTO STOCKS (S_id, Prod_id, S_Date) VALUES
(1, 101, '2026-08-01'),
(2, 102, '2026-08-05');

-- (a) Display name of the sellers and their bank account number who stocked at least 24 different products with a price higher than 1000 rupees in the last one year
SELECT s.Name, s.Bank_acc_no
FROM SELLER s
JOIN STOCKS st ON s.S_id = st.S_id
JOIN PRODUCT p ON st.Prod_id = p.Prod_id
WHERE p.Price > 1000
  AND st.S_Date >= CURRENT_DATE - INTERVAL '1' YEAR
GROUP BY s.S_id, s.Name, s.Bank_acc_no
HAVING COUNT(DISTINCT st.Prod_id) >= 24;

-- (b) Use a nested query to display the name of the sellers and their email address; who have in stock products with an expiry date past today’s date

SELECT Name, Email
FROM SELLER
WHERE S_id IN (
    SELECT S_id
    FROM STOCKS
    WHERE Prod_id IN (
        SELECT Prod_id
        FROM PRODUCT
        WHERE Expiry_date > CURRENT_DATE
    )
);

-- (c) Display the name of the products that are in stock by at least one seller and also those that are not in stock by any of the sellers

SELECT DISTINCT p.Prod_name,
       CASE 
           WHEN st.Prod_id IS NOT NULL THEN 'In Stock'
           ELSE 'Not In Stock'
       END AS Stock_Status
FROM PRODUCT p
LEFT JOIN STOCKS st ON p.Prod_id = st.Prod_id;
-- (d) Use a join query to display the name of the sellers and the name of the products stocked by them during March 23, 2020, and June 30, 2020
SELECT s.Name AS Seller_Name, p.Prod_name AS Product_Name
FROM SELLER s
JOIN STOCKS st ON s.S_id = st.S_id
JOIN PRODUCT p ON st.Prod_id = p.Prod_id
WHERE st.S_Date BETWEEN '2020-03-23' AND '2020-06-30';
-- (e) Display the name of sellers who have in stock the maximum number of different products and the minimum number of different products
WITH SellerStockCount AS (
    SELECT s.Name, COUNT(DISTINCT st.Prod_id) AS Total_Products
    FROM SELLER s
    LEFT JOIN STOCKS st ON s.S_id = st.S_id
    GROUP BY s.S_id, s.Name
)
SELECT Name, Total_Products, 'Maximum' AS Category
FROM SellerStockCount
WHERE Total_Products = (SELECT MAX(Total_Products) FROM SellerStockCount)

UNION ALL

SELECT Name, Total_Products, 'Minimum' AS Category
FROM SellerStockCount
WHERE Total_Products = (SELECT MIN(Total_Products) FROM SellerStockCount);
