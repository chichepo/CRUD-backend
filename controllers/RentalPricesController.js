// RentalPricesController.js
const db = require('../config/dbConfig');

exports.createRentalPrices = (req, res, next) => {
    const {RentalPriceID, ApartmentID, BasicRentalPrice, RentalPriceRebate, CalculatedRentalPrice, ExogenousCriteriaID, RegardingApartmentCriteriaID, ApartmentItselfCriteriaID} = req.body;
    const query = `INSERT INTO RentalPrices (RentalPriceID, ApartmentID, BasicRentalPrice, RentalPriceRebate, CalculatedRentalPrice, ExogenousCriteriaID, RegardingApartmentCriteriaID, ApartmentItselfCriteriaID) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(query, [RentalPriceID, ApartmentID, BasicRentalPrice, RentalPriceRebate, CalculatedRentalPrice, ExogenousCriteriaID, RegardingApartmentCriteriaID, ApartmentItselfCriteriaID], (err, result) => {
        if (err) return next(err);
        res.status(201).send(newRecord);
    });
};

exports.getAllRentalPrices = (req, res, next) => {
    const query = 'SELECT * FROM RentalPrices';
    db.query(query, (err, rows) => {
        if (err) return next(err);
        if (rows.length === 0) return res.status(404).send('No records found');
        res.status(200).send(rows);
    });
};

exports.updateRentalPrices = (req, res, next) => {
    const {RentalPriceID, ApartmentID, BasicRentalPrice, RentalPriceRebate, CalculatedRentalPrice, ExogenousCriteriaID, RegardingApartmentCriteriaID, ApartmentItselfCriteriaID} = req.body;
    const { id } = req.params;
    const query = `UPDATE RentalPrices SET RentalPriceID=?, ApartmentID=?, BasicRentalPrice=?, RentalPriceRebate=?, CalculatedRentalPrice=?, ExogenousCriteriaID=?, RegardingApartmentCriteriaID=?, ApartmentItselfCriteriaID=? WHERE RentalPriceID=?`;
    db.query(query, [RentalPriceID, ApartmentID, BasicRentalPrice, RentalPriceRebate, CalculatedRentalPrice, ExogenousCriteriaID, RegardingApartmentCriteriaID, ApartmentItselfCriteriaID, id], (err, result) => {
        if (err) return next(err);
        if (result.affectedRows === 0) return res.status(404).send('Record not found');
        res.status(200).send('Record updated');
    });
};

exports.deleteRentalPrices = (req, res, next) => {
    const { id } = req.params;
    const query = `DELETE FROM RentalPrices WHERE RentalPriceID=?`;
    db.query(query, [id], (err, result) => {
        if (err) return next(err);
        if (result.affectedRows === 0) return res.status(404).send('Record not found');
        res.status(204).send();
    });
};
