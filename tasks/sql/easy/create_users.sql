-- SQL - Easy

CREATE TABLE users (
    -- TODO: Add all the requested fields
    id integer primary key AUTOINCREMENT,
    name text,
    email text
);

INSERT INTO users (name, email) VALUES('John Smith', 'john.smith@gmail.com');
