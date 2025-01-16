// RentalPricesController.js
const db = require('../config/dbConfig');

exports.createRentalPrices = (req, res, next) => {
    const { ApartmentID, BasicRentalPrice, RentalPriceRebate, ExogenousCriteriaID, RegardingApartmentCriteriaID, ApartmentItselfCriteriaID } = req.body;
    const query = `INSERT INTO RentalPrices (ApartmentID, BasicRentalPrice, RentalPriceRebate, ExogenousCriteriaID, RegardingApartmentCriteriaID, ApartmentItselfCriteriaID) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(query, [ApartmentID, BasicRentalPrice, RentalPriceRebate, ExogenousCriteriaID, RegardingApartmentCriteriaID, ApartmentItselfCriteriaID], (err, result) => {
        if (err) return next(err); // Pass the error to the middleware
        res.status(201).send({ id: result.insertId }); // Return the inserted record ID
    });
};

exports.getAllRentalPrices = (req, res, next) => {
    const query = 'SELECT * FROM RentalPrices';
    db.query(query, (err, rows) => {
        if (err) return next(err); // Pass the error to the middleware
        if (rows.length === 0) return res.status(404).send('No records found'); // 404 Not Found
        res.status(200).send(rows); // 200 OK
    });
};

exports.updateRentalPrices = (req, res, next) => {
    const { ApartmentID, BasicRentalPrice, RentalPriceRebate, ExogenousCriteriaID, RegardingApartmentCriteriaID, ApartmentItselfCriteriaID } = req.body;
    const { id } = req.params;
    const query = `UPDATE RentalPrices 
                   SET ApartmentID=?, BasicRentalPrice=?, RentalPriceRebate=?, ExogenousCriteriaID=?, RegardingApartmentCriteriaID=?, ApartmentItselfCriteriaID=? 
                   WHERE RentalPriceID=?`;
    db.query(query, [ApartmentID, BasicRentalPrice, RentalPriceRebate, ExogenousCriteriaID, RegardingApartmentCriteriaID, ApartmentItselfCriteriaID, id], (err, result) => {
        if (err) return next(err); // Pass the error to the middleware
        if (result.affectedRows === 0) return res.status(404).send('Record not found'); // 404 Not Found
        res.status(200).send('Record updated'); // 200 OK
    });
};

exports.deleteRentalPrices = (req, res, next) => {
    const { id } = req.params;
    const query = `DELETE FROM RentalPrices WHERE RentalPriceID=?`;
    db.query(query, [id], (err, result) => {
        if (err) return next(err); // Pass the error to the middleware
        if (result.affectedRows === 0) return res.status(404).send('Record not found'); // 404 Not Found
        res.status(204).send(); // 204 No Content
    });
};
