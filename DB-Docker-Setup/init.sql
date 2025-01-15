CREATE DATABASE IF NOT EXISTS Megurit;
USE Megurit;

-- Table 1: Cities
CREATE TABLE Cities (
    CityId INT AUTO_INCREMENT PRIMARY KEY,
    CityName VARCHAR(255) NOT NULL
);

-- Table 2: Projects (depends on Cities)
CREATE TABLE Projects (
    ProjectID INT AUTO_INCREMENT PRIMARY KEY,
    ProjectCode VARCHAR(50) NOT NULL,
    CodeName VARCHAR(255),
    CityId INT NOT NULL,
    Address VARCHAR(255),
    GeographicalLocation VARCHAR(255),
    ProjectManagerName VARCHAR(255),
    ProjectStatus VARCHAR(50),
    NumberOfBuildings INT,
    NumberOfApartments INT,
    NumberOfAvailableApartments INT,
    GeneralInformation TEXT,
    CommunityProject BOOLEAN,
    LuxuriousProject BOOLEAN,
    ApartmentRentalUnderSupervision BOOLEAN,
    RandomDrawStatus BOOLEAN,
    PartnershipDetails TEXT,
    FOREIGN KEY (CityId) REFERENCES Cities(CityId)
);

-- Table 3: Buildings (depends on Projects)
CREATE TABLE Buildings (
    BuildingID INT AUTO_INCREMENT PRIMARY KEY,
    BuildingName VARCHAR(255) NOT NULL,
    ProjectID INT NOT NULL,
    FOREIGN KEY (ProjectID) REFERENCES Projects(ProjectID)
);

-- Table 4: ApartmentTypes
CREATE TABLE ApartmentTypes (
    TypeID INT AUTO_INCREMENT PRIMARY KEY,
    TypeName VARCHAR(255) NOT NULL,
    NumberOfRooms INT NOT NULL
);

-- Table 5: RentalPrices
CREATE TABLE RentalPrices (
    RentalPriceID INT AUTO_INCREMENT PRIMARY KEY,
    ApartmentID INT NOT NULL,
    BasicRentalPrice DECIMAL(10, 2),
    RentalPriceRebate DECIMAL(10, 2),
    CalculatedRentalPrice DECIMAL(10, 2),
    ExogenousCriteriaID INT,
    RegardingApartmentCriteriaID INT,
    ApartmentItselfCriteriaID INT
);

-- Table 6: Apartments (depends on Buildings, ApartmentTypes, RentalPrices)
CREATE TABLE Apartments (
    ApartmentID INT AUTO_INCREMENT PRIMARY KEY,
    BuildingID INT NOT NULL,
    ApartmentNumber VARCHAR(50) NOT NULL,
    Floor INT NOT NULL,
    CardinalDirection VARCHAR(50),
    TypeID INT NOT NULL,
    TotalSurfaceM2 DECIMAL(10, 2),
    BalconyOrGardenSurfaceM2 DECIMAL(10, 2),
    UnderSupervision BOOLEAN,
    DrawingPlanLink VARCHAR(255),
    RentalPriceID INT,
    FOREIGN KEY (BuildingID) REFERENCES Buildings(BuildingID),
    FOREIGN KEY (TypeID) REFERENCES ApartmentTypes(TypeID),
    FOREIGN KEY (RentalPriceID) REFERENCES RentalPrices(RentalPriceID)
);

-- Table 7: ExternalParameters
CREATE TABLE ExternalParameters (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Source VARCHAR(255),
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
    Category VARCHAR(255),
    SubCategory VARCHAR(255)
);
