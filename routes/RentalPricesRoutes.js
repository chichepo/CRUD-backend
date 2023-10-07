// RentalPricesRoutes.js
const express = require('express');
const RentalPricesController = require('../controllers/RentalPricesController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Rental-Prices
 *     description: Rental Prices management
 */

/**
 * @swagger
 * /api/rentalPrices:
 *   post:
 *     tags: [Rental-Prices]
 *     summary: Create a new rental price
 *     responses:
 *       201:
 *         description: Record inserted successfully.
 *       500:
 *         description: Server error.
 */
router.post('/', RentalPricesController.createRentalPrices);

/**
 * @swagger
 * /api/rentalPrices:
 *   get:
 *     tags: [Rental-Prices]
 *     summary: Retrieve a list of all rental prices
 *     responses:
 *       200:
 *         description: List of rental prices.
 *       500:
 *         description: Server error.
 */
router.get('/', RentalPricesController.getAllRentalPrices);

/**
 * @swagger
 * /api/rentalPrices/{id}:
 *   put:
 *     tags: [Rental-Prices]
 *     summary: Update a rental prices by ID
 *     parameters:
 *       - name: id
 *         description: rental prices ID.
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Record updated successfully.
 *       500:
 *         description: Server error.
 */
router.put('/:id', RentalPricesController.updateRentalPrices);

/**
 * @swagger
 * /api/rentalPrices/{id}:
 *   delete:
 *     tags: [Rental-Prices]
 *     summary: Delete an rental prices by ID
 *     parameters:
 *       - name: id
 *         description: rental prices ID.
 *         in: path
 *         required: true
 *     responses:
 *       204:
 *         description: Record deleted successfully.
 *       500:
 *         description: Server error.
 */
router.delete('/:id', RentalPricesController.deleteRentalPrices);

module.exports = router;
