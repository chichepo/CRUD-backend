CREATE DATABASE IF NOT EXISTS Megurit;
USE Megurit;

CREATE TABLE IF NOT EXISTS externalParameters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    value VARCHAR(255) NOT NULL
);
