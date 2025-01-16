// externalParametersController.js
const db = require('../config/dbConfig');

exports.createExternalParameter = (req, res, next) => {
    const { Source, Name, Description, Category, SubCategory } = req.body;
    const query = `INSERT INTO ExternalParameters (Source, Name, Description, Category, SubCategory) VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [Source, Name, Description, Category, SubCategory], (err, result) => {
        if (err) return next(err); // Pass the error to the error handler
        res.status(201).send({ id: result.insertId }); // 201 Created
    });
};

exports.getAllExternalParameters = (req, res, next) => {
    const query = 'SELECT Id, Source, Name, Description, Category, SubCategory FROM ExternalParameters';
    db.query(query, (err, rows) => {
        if (err) return next(err); // Pass the error to the error handler
        if (rows.length === 0) return res.status(404).send('No records found'); // 404 Not Found
        res.status(200).send(rows); // 200 OK
    });
};

exports.updateExternalParameter = (req, res, next) => {
    const { Source, Name, Description, Category, SubCategory } = req.body;
    const { id } = req.params;
    const query = `UPDATE ExternalParameters SET Source=?, Name=?, Description=?, Category=?, SubCategory=? WHERE Id=?`;
    db.query(query, [Source, Name, Description, Category, SubCategory, id], (err, result) => {
        if (err) return next(err); // Pass the error to the error handler
        if (result.affectedRows === 0) return res.status(404).send('Record not found'); // 404 Not Found
        res.status(200).send('Record updated'); // 200 OK
    });
};

exports.deleteExternalParameter = (req, res, next) => {
    const { id } = req.params;
    const query = `DELETE FROM ExternalParameters WHERE Id=?`;
    db.query(query, [id], (err, result) => {
        if (err) return next(err); // Pass the error to the error handler
        if (result.affectedRows === 0) return res.status(404).send('Record not found'); // 404 Not Found
        res.status(204).send(); // 204 No Content
    });
};
