-- Switch to the database
USE Megurit;

-- Disable foreign key checks temporarily
SET FOREIGN_KEY_CHECKS = 0;

-- Drop tables in the correct order
DROP TABLE IF EXISTS RentalPrices;
DROP TABLE IF EXISTS Apartments;
DROP TABLE IF EXISTS Buildings;
DROP TABLE IF EXISTS ApartmentTypes;
DROP TABLE IF EXISTS Projects;
DROP TABLE IF EXISTS Cities;
DROP TABLE IF EXISTS ExternalParameters;

-- Re-enable foreign key checks
SET FOREIGN_KEY_CHECKS = 1;
