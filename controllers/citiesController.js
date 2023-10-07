// citiesController.js
const db = require('../config/dbConfig');

exports.createCities = (req, res) => {
    const { CityName } = req.body;
    const query = `INSERT INTO Cities (CityName) VALUES (?)`;
    db.query(query, [CityName], (err, result) => {
        if (err) return next(err);  // Pass the error to the error handler
        const newRecord = {
          CityId: result.insertId,  // Get the ID of the last inserted record
          CityName: CityName
        };
        res.status(201).send(newRecord);  // 201 Created, and send the new record
    });
};

exports.getAllCities = (req, res, next) => {
    const query = 'SELECT * FROM Cities';
    db.query(query, (err, rows) => {
        if (err) return next(err); // Pass the error to the error handler
        if (rows.length === 0) return res.status(404).send('No records found'); // 404 Not Found
        res.status(200).send(rows); // 200 OK
    });
};

exports.updateCities = (req, res, next) => {
    const { CityName } = req.body;
    const { id } = req.params;
    const query = `UPDATE Cities SET CityName=? WHERE CityId=?`;
    db.query(query, [CityName, id], (err, result) => {
        if (err) return next(err);  // Pass the error to the error handler
        if (result.affectedRows === 0) return res.status(404).send('Record not found');
        res.status(200).send('Record updated');  // 200 OK
    });
};

exports.deleteCities = (req, res, next) => {
    const { id } = req.params;
    const query = `DELETE FROM Cities WHERE CityId=?`;
    db.query(query, [id], (err, result) => {
        if (err) return next(err);  // Pass the error to the error handler
        if (result.affectedRows === 0) return res.status(404).send('Record not found');
        res.status(204).send();  // 204 No Content
    });
};

