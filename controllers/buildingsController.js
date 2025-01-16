// BuildingsController.js
const db = require('../config/dbConfig');

exports.createBuilding = (req, res, next) => {
    const { BuildingName, ProjectID } = req.body;
    const query = 'INSERT INTO Buildings (BuildingName, ProjectID) VALUES (?, ?)';
    db.query(query, [BuildingName, ProjectID], (err, result) => {
        if (err) return next(err);
        res.status(201).send({ id: result.insertId });
    });
};

exports.getAllBuildings = (req, res, next) => {
    const query = 'SELECT * FROM Buildings';
    db.query(query, (err, rows) => {
        if (err) return next(err);
        if (rows.length === 0) return res.status(404).send('No records found');
        res.status(200).send(rows);
    });
};

exports.updateBuilding = (req, res, next) => {
    const { BuildingName, ProjectID } = req.body;
    const { id } = req.params;
    const query = 'UPDATE Buildings SET BuildingName=?, ProjectID=? WHERE BuildingID=?';
    db.query(query, [BuildingName, ProjectID, id], (err, result) => {
        if (err) return next(err);
        if (result.affectedRows === 0) return res.status(404).send('Record not found');
        res.status(200).send('Record updated');
    });
};

exports.deleteBuilding = (req, res, next) => {
    const { id } = req.params;
    const query = 'DELETE FROM Buildings WHERE BuildingID=?';
    db.query(query, [id], (err, result) => {
        if (err) return next(err);
        if (result.affectedRows === 0) return res.status(404).send('Record not found');
        res.status(204).send();
    });
};
