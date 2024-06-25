CREATE TABLE user(
    id INT PRIMARY KEY,
    username varchar(60) UNIQUE,
    email varchar(50) UNIQUE NOT NULL,
    passowrd varchar(50) NOT NULL
);