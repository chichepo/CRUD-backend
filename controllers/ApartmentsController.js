// ApartmentsController.js
const db = require('../config/dbConfig');

exports.createApartments = (req, res, next) => {
    const { BuildingID, ApartmentNumber, Floor, CardinalDirection, TypeID, TotalSurfaceM2, BalconyOrGardenSurfaceM2, UnderSupervision, DrawingPlanLink, RentalPriceID } = req.body;
    const query = `INSERT INTO Apartments (BuildingID, ApartmentNumber, Floor, CardinalDirection, TypeID, TotalSurfaceM2, BalconyOrGardenSurfaceM2, UnderSupervision, DrawingPlanLink, RentalPriceID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(query, [BuildingID, ApartmentNumber, Floor, CardinalDirection, TypeID, TotalSurfaceM2, BalconyOrGardenSurfaceM2, UnderSupervision, DrawingPlanLink, RentalPriceID], (err, result) => {
        if (err) return next(err);
        res.status(201).send({ id: result.insertId });
    });
};

exports.getAllApartments = (req, res, next) => {
    const query = 'SELECT * FROM Apartments';
    db.query(query, (err, rows) => {
        if (err) return next(err);
        if (rows.length === 0) return res.status(404).send('No records found');
        res.status(200).send(rows);
    });
};

exports.updateApartments = (req, res, next) => {
    const { BuildingID, ApartmentNumber, Floor, CardinalDirection, TypeID, TotalSurfaceM2, BalconyOrGardenSurfaceM2, UnderSupervision, DrawingPlanLink, RentalPriceID } = req.body;
    const { id } = req.params;
    const query = `UPDATE Apartments SET BuildingID=?, ApartmentNumber=?, Floor=?, CardinalDirection=?, TypeID=?, TotalSurfaceM2=?, BalconyOrGardenSurfaceM2=?, UnderSupervision=?, DrawingPlanLink=?, RentalPriceID=? WHERE ApartmentID=?`;
    db.query(query, [BuildingID, ApartmentNumber, Floor, CardinalDirection, TypeID, TotalSurfaceM2, BalconyOrGardenSurfaceM2, UnderSupervision, DrawingPlanLink, RentalPriceID, id], (err, result) => {
        if (err) return next(err);
        if (result.affectedRows === 0) return res.status(404).send('Record not found');
        res.status(200).send('Record updated');
    });
};

exports.deleteApartments = (req, res, next) => {
    const { id } = req.params;
    const query = `DELETE FROM Apartments WHERE ApartmentID=?`;
    db.query(query, [id], (err, result) => {
        if (err) return next(err);
        if (result.affectedRows === 0) return res.status(404).send('Record not found');
        res.status(204).send();
    });
};
