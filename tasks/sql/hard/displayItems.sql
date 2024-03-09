
-- Create the Following Tables:

CREATE TABLE SELLER (
    S_id INT PRIMARY KEY,
    Name VARCHAR(50),
    Bank_acc_no INT,
    Email VARCHAR(50),
    Phone VARCHAR(20)
);

CREATE TABLE STOCKS (
    S_id INT,
    Prod_id INT,
    S_Date DATE,
    PRIMARY KEY(S_id, Prod_id),
    FOREIGN KEY (S_id) REFERENCES SELLER(S_id),
    FOREIGN KEY (Prod_id) REFERENCES PRODUCT(Prod_id)
);

CREATE TABLE PRODUCT (
    Prod_id INT PRIMARY KEY,
    Prod_name VARCHAR(50),
    Description VARCHAR(100),
    Price INT,
    Expiry_date DATE
);

-- Insert values into the SELLER table

-- Insert values into the STOCKS table

-- Insert values into the PRODUCT table

-- (a) Display name of the sellers and their bank account number who stocked at least 24 different products with a price higher than 1000 rupees in the last one year
SELECT S.Name, S.Bank_acc_no
FROM SELLER S
INNER JOIN STOCKS S1 ON S.S_id = S1.S_id
INNER JOIN (
    SELECT S_id, COUNT(DISTINCT Prod_id) as Cnt
    FROM STOCKS
    WHERE S_Date BETWEEN DATE_SUB(NOW(), INTERVAL 1 YEAR) AND NOW()
    GROUP BY S_id
    HAVING Cnt >= 24
) T1 ON S.S_id = T1.S_id
INNER JOIN PRODUCT P ON S1.Prod_id = P.Prod_id
WHERE P.Price > 1000;

-- (b) Use a nested query to display the name of the sellers and their email address; who have in stock products with an expiry date past today’s date
SELECT S.Name, S.Email
FROM SELLER S
WHERE EXISTS (
    SELECT *
    FROM STOCKS S1
    INNER JOIN PRODUCT P ON S1.Prod_id = P.Prod_id
    WHERE S.S_id = S1.S_id AND P.Expiry_date < CURDATE()
);

-- (c) Display the name of the products that are in stock by at least one seller and also those that are not in stock by any of the sellers
SELECT P.Prod_name
FROM PRODUCT P
LEFT JOIN STOCKS S ON P.Prod_id = S.Prod_id
GROUP BY P.Prod_name
HAVING COUNT(S.S_id) > 0;

SELECT P.Prod_name
FROM PRODUCT P
LEFT JOIN STOCKS S ON P.Prod_id = S.Prod_id
GROUP BY P.Prod_name
HAVING COUNT(S.S_id) = 0;

-- (d) Use a join query to display the name of the sellers and the name of the products stocked by them during March 23, 2020, and June 30, 2020
SELECT S.Name, P.Prod_name
FROM STOCKS S
INNER JOIN SELLER S1 ON S.S_id = S1.S_id
INNER JOIN PRODUCT P ON S.Prod_id = P.Prod_id
WHERE S_Date BETWEEN '2020-03-23' AND '2020-06-30';

-- (e) Display the name of sellers who have in stock the maximum number of different products and the minimum number of different products
SELECT S.Name
FROM SELLER S
INNER JOIN STOCKS S1 ON S.S_id = S1.S_id
GROUP BY S.Name
HAVING COUNT(DISTINCT S1.Prod_id) = (
    SELECT MAX(Cnt)
    FROM (
        SELECT S_id, COUNT(DISTINCT Prod_id) as Cnt
        FROM STOCKS
        GROUP BY S_
