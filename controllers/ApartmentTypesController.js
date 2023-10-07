// ApartmentTypesController.js
const db = require('../config/dbConfig');

exports.createApartmentTypes = (req, res, next) => {
    const { TypeID, TypeName, NumberOfRooms } = req.body;
    const query = `INSERT INTO ApartmentTypes (TypeID, TypeName, NumberOfRooms) VALUES (?, ?, ?)`;
    db.query(query, [TypeID, TypeName, NumberOfRooms], (err, result) => {
        if (err) return next(err);
        res.status(201).send(newRecord);
    });
};

exports.getAllApartmentTypes = (req, res, next) => {
    const query = 'SELECT * FROM ApartmentTypes';
    db.query(query, (err, rows) => {
        if (err) return next(err);
        if (rows.length === 0) return res.status(404).send('No records found');
        res.status(200).send(rows);
    });
};

exports.updateApartmentTypes = (req, res, next) => {
    const { TypeID, TypeName, NumberOfRooms } = req.body;
    const { id } = req.params;
    const query = `UPDATE ApartmentTypes SET TypeID=?, TypeName=?, NumberOfRooms=? WHERE TypeID=?`;
    db.query(query, [TypeID, TypeName, NumberOfRooms, id], (err, result) => {
        if (err) return next(err);
        if (result.affectedRows === 0) return res.status(404).send('Record not found');
        res.status(200).send('Record updated');
    });
};

exports.deleteApartmentTypes = (req, res, next) => {
    const { id } = req.params;
    const query = `DELETE FROM ApartmentTypes WHERE TypeID=?`;
    db.query(query, [id], (err, result) => {
        if (err) return next(err);
        if (result.affectedRows === 0) return res.status(404).send('Record not found');
        res.status(204).send();
    });
};
