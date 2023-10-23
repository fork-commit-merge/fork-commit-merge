-- SQL - Easy

CREATE TABLE users (
    -- TODO: Add all the requested fields
    user_id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash CHAR(64) NOT NULL,
    registration_date DATE,
    is_active BOOLEAN DEFAULT true
);

