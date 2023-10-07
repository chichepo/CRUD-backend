// projectsController.js
const db = require('../config/dbConfig');

exports.createProjects = (req, res) => {
    const { ProjectCode, CodeName, CityId, Address, GeographicalLocation, ProjectManagerName, ProjectStatus, NumberOfBuildings, NumberOfApartments, NumberOfAvailableApartments,
        GeneralInformation, CommunityProject, LuxuriousProject, ApartmentRentalUnderSupervision, RandomDrawStatus, PartnershipDetails } = req.body;

    const query =
        `INSERT INTO Projects (   ProjectCode, CodeName, CityId, Address, GeographicalLocation, ProjectManagerName, ProjectStatus, NumberOfBuildings,
                                  NumberOfApartments, NumberOfAvailableApartments, GeneralInformation, CommunityProject, LuxuriousProject, ApartmentRentalUnderSupervision,
                                  RandomDrawStatus, PartnershipDetails) 
                                  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    db.query(query, [ProjectCode, CodeName, CityId, Address, GeographicalLocation, ProjectManagerName, ProjectStatus, NumberOfBuildings, NumberOfApartments, NumberOfAvailableApartments,
        GeneralInformation, CommunityProject, LuxuriousProject, ApartmentRentalUnderSupervision, RandomDrawStatus, PartnershipDetails], (err, result) => {
            if (err) return next(err);  // Pass the error to the error handler
            res.status(201).send(newRecord);
        });
};

exports.getAllProjects = (req, res) => {
    const query = 'SELECT * FROM Projects';
    db.query(query, (err, rows) => {
        if (err) return next(err);  // Pass the error to the error handler
        if (rows.length === 0) return res.status(404).send('No records found');
        res.status(200).send(rows);
    });
};

exports.updateProjects = (req, res) => {
    const { ProjectCode, CodeName, CityId, Address, GeographicalLocation, ProjectManagerName, ProjectStatus,
        NumberOfBuildings, NumberOfApartments, NumberOfAvailableApartments, GeneralInformation, CommunityProject,
        LuxuriousProject, ApartmentRentalUnderSupervision, RandomDrawStatus, PartnershipDetails } = req.body;
    const { id } = req.params;
    const query =
        `UPDATE Projects SET    ProjectCode=?, CodeName=?, CityId=?, Address=?, GeographicalLocation=?, ProjectManagerName=?, ProjectStatus=?,
                                NumberOfBuildings=?, NumberOfApartments=?, NumberOfAvailableApartments=?, GeneralInformation=?, CommunityProject=?,
                                LuxuriousProject=?, ApartmentRentalUnderSupervision=?, RandomDrawStatus=?, PartnershipDetails=? WHERE ProjectID=?`;
    db.query(query, [ProjectCode, CodeName, CityId, Address, GeographicalLocation, ProjectManagerName, ProjectStatus, NumberOfBuildings,
        NumberOfApartments, NumberOfAvailableApartments, GeneralInformation, CommunityProject, LuxuriousProject, ApartmentRentalUnderSupervision,
        RandomDrawStatus, PartnershipDetails, id], (err, result) => {
            if (err) return next(err);  // Pass the error to the error handler
            if (result.affectedRows === 0) return res.status(404).send('Record not found');
            res.status(200).send('Record updated');
        });
};

exports.deleteProjects = (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM Projects WHERE ProjectID=?`;
    db.query(query, [id], (err, result) => {
        if (err) return next(err);  // Pass the error to the error handler
        if (result.affectedRows === 0) return res.status(404).send('Record not found');
        res.status(204).send();
    });
};
