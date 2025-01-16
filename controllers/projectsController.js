// projectsController.js
const db = require('../config/dbConfig');

exports.createProjects = (req, res, next) => {
    const {
        ProjectCode, CodeName, CityId, Address, GeographicalLocation, ProjectManagerName, ProjectStatus,
        NumberOfBuildings, NumberOfApartments, NumberOfAvailableApartments, GeneralInformation, CommunityProject,
        LuxuriousProject, ApartmentRentalUnderSupervision, RandomDrawStatus, PartnershipDetails
    } = req.body;

    const query = `
        INSERT INTO Projects (
            ProjectCode, CodeName, CityId, Address, GeographicalLocation, ProjectManagerName, ProjectStatus,
            NumberOfBuildings, NumberOfApartments, NumberOfAvailableApartments, GeneralInformation, CommunityProject,
            LuxuriousProject, ApartmentRentalUnderSupervision, RandomDrawStatus, PartnershipDetails
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(query, [
        ProjectCode, CodeName, CityId, Address, GeographicalLocation, ProjectManagerName, ProjectStatus,
        NumberOfBuildings, NumberOfApartments, NumberOfAvailableApartments, GeneralInformation, CommunityProject,
        LuxuriousProject, ApartmentRentalUnderSupervision, RandomDrawStatus, PartnershipDetails
    ], (err, result) => {
        if (err) return next(err); // Pass the error to the middleware
        res.status(201).send({ id: result.insertId }); // Return the inserted record ID
    });
};

exports.getAllProjects = (req, res, next) => {
    const query = 'SELECT * FROM Projects';
    db.query(query, (err, rows) => {
        if (err) return next(err); // Pass the error to the middleware
        if (rows.length === 0) return res.status(404).send('No records found'); // 404 Not Found
        res.status(200).send(rows); // 200 OK
    });
};

exports.updateProjects = (req, res, next) => {
    const {
        ProjectCode, CodeName, CityId, Address, GeographicalLocation, ProjectManagerName, ProjectStatus,
        NumberOfBuildings, NumberOfApartments, NumberOfAvailableApartments, GeneralInformation, CommunityProject,
        LuxuriousProject, ApartmentRentalUnderSupervision, RandomDrawStatus, PartnershipDetails
    } = req.body;
    const { id } = req.params;

    const query = `
        UPDATE Projects
        SET ProjectCode=?, CodeName=?, CityId=?, Address=?, GeographicalLocation=?, ProjectManagerName=?, ProjectStatus=?,
            NumberOfBuildings=?, NumberOfApartments=?, NumberOfAvailableApartments=?, GeneralInformation=?, CommunityProject=?,
            LuxuriousProject=?, ApartmentRentalUnderSupervision=?, RandomDrawStatus=?, PartnershipDetails=?
        WHERE ProjectID=?`;

    db.query(query, [
        ProjectCode, CodeName, CityId, Address, GeographicalLocation, ProjectManagerName, ProjectStatus,
        NumberOfBuildings, NumberOfApartments, NumberOfAvailableApartments, GeneralInformation, CommunityProject,
        LuxuriousProject, ApartmentRentalUnderSupervision, RandomDrawStatus, PartnershipDetails, id
    ], (err, result) => {
        if (err) return next(err); // Pass the error to the middleware
        if (result.affectedRows === 0) return res.status(404).send('Record not found'); // 404 Not Found
        res.status(200).send('Record updated'); // 200 OK
    });
};

exports.deleteProjects = (req, res, next) => {
    const { id } = req.params;
    const query = 'DELETE FROM Projects WHERE ProjectID=?';

    db.query(query, [id], (err, result) => {
        if (err) return next(err); // Pass the error to the middleware
        if (result.affectedRows === 0) return res.status(404).send('Record not found'); // 404 Not Found
        res.status(204).send(); // 204 No Content
    });
};
