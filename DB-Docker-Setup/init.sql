-- Database creation
CREATE DATABASE IF NOT EXISTS Megurit;
USE Megurit;

-- Step 1: Create tables without constraints

-- Table: Cities
CREATE TABLE Cities (
    CityId INT AUTO_INCREMENT PRIMARY KEY,
    CityName VARCHAR(255) NOT NULL
);

-- Table: Projects
CREATE TABLE Projects (
    ProjectID INT AUTO_INCREMENT PRIMARY KEY,
    ProjectCode VARCHAR(50) NOT NULL,
    CodeName VARCHAR(255),
    CityId INT,
    Address VARCHAR(255),
    GeographicalLocation VARCHAR(255),
    ProjectManagerName VARCHAR(255),
    ProjectStatus VARCHAR(50),
    NumberOfBuildings INT,
    NumberOfApartments INT,
    NumberOfAvailableApartments INT,
    GeneralInformation TEXT,
    CommunityProject BOOLEAN DEFAULT FALSE,
    LuxuriousProject BOOLEAN DEFAULT FALSE,
    ApartmentRentalUnderSupervision BOOLEAN DEFAULT FALSE,
    RandomDrawStatus BOOLEAN DEFAULT FALSE,
    PartnershipDetails TEXT
);

-- Table: Buildings
CREATE TABLE Buildings (
    BuildingID INT AUTO_INCREMENT PRIMARY KEY,
    BuildingName VARCHAR(255) NOT NULL,
    ProjectID INT
);

-- Table: ApartmentTypes
CREATE TABLE ApartmentTypes (
    TypeID INT AUTO_INCREMENT PRIMARY KEY,
    TypeName VARCHAR(255) NOT NULL,
    NumberOfRooms INT NOT NULL
);

-- Table: Apartments
CREATE TABLE Apartments (
    ApartmentID INT AUTO_INCREMENT PRIMARY KEY,
    BuildingID INT,
    ApartmentNumber VARCHAR(50) NOT NULL,
    Floor INT NOT NULL,
    CardinalDirection VARCHAR(50),
    TypeID INT,
    TotalSurfaceM2 DECIMAL(10, 2),
    BalconyOrGardenSurfaceM2 DECIMAL(10, 2),
    UnderSupervision BOOLEAN DEFAULT FALSE,
    DrawingPlanLink VARCHAR(255)
);

-- Table: RentalPrices
CREATE TABLE RentalPrices (
    RentalPriceID INT AUTO_INCREMENT PRIMARY KEY,
    ApartmentID INT,
    BasicRentalPrice DECIMAL(10, 2),
    RentalPriceRebate DECIMAL(10, 2),
    CalculatedRentalPrice DECIMAL(10, 2) GENERATED ALWAYS AS (BasicRentalPrice - RentalPriceRebate) STORED,
    ExogenousCriteriaID INT,
    RegardingApartmentCriteriaID INT,
    ApartmentItselfCriteriaID INT
);

-- Table: ExternalParameters
CREATE TABLE ExternalParameters (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Source VARCHAR(255),
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
    Category VARCHAR(255),
    SubCategory VARCHAR(255)
);

-- Step 2: Add constraints in the correct order

-- Add foreign key to Projects
ALTER TABLE Projects
ADD CONSTRAINT FK_Projects_Cities
FOREIGN KEY (CityId) REFERENCES Cities(CityId)
ON DELETE CASCADE ON UPDATE CASCADE;

-- Add foreign key to Buildings
ALTER TABLE Buildings
ADD CONSTRAINT FK_Buildings_Projects
FOREIGN KEY (ProjectID) REFERENCES Projects(ProjectID)
ON DELETE CASCADE ON UPDATE CASCADE;

-- Add foreign key to Apartments
ALTER TABLE Apartments
ADD CONSTRAINT FK_Apartments_Buildings
FOREIGN KEY (BuildingID) REFERENCES Buildings(BuildingID)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE Apartments
ADD CONSTRAINT FK_Apartments_ApartmentTypes
FOREIGN KEY (TypeID) REFERENCES ApartmentTypes(TypeID)
ON DELETE CASCADE ON UPDATE CASCADE;

-- Add foreign key to RentalPrices
ALTER TABLE RentalPrices
ADD CONSTRAINT FK_RentalPrices_Apartments
FOREIGN KEY (ApartmentID) REFERENCES Apartments(ApartmentID)
ON DELETE CASCADE ON UPDATE CASCADE;
