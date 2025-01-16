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
 *     requestBody:
 *       description: Rental price details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ApartmentID:
 *                 type: integer
 *                 description: ID of the associated apartment.
 *               BasicRentalPrice:
 *                 type: number
 *                 format: float
 *                 description: Basic rental price.
 *               RentalPriceRebate:
 *                 type: number
 *                 format: float
 *                 description: Rebate on the rental price.
 *               ExogenousCriteriaID:
 *                 type: integer
 *                 description: ID for exogenous criteria.
 *               RegardingApartmentCriteriaID:
 *                 type: integer
 *                 description: ID for apartment-specific criteria.
 *               ApartmentItselfCriteriaID:
 *                 type: integer
 *                 description: ID for criteria specific to the apartment itself.
 *     responses:
 *       201:
 *         description: Rental price created successfully.
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
 *         description: List of rental prices retrieved successfully.
 *       500:
 *         description: Server error.
 */
router.get('/', RentalPricesController.getAllRentalPrices);

/**
 * @swagger
 * /api/rentalPrices/{id}:
 *   put:
 *     tags: [Rental-Prices]
 *     summary: Update a rental price by ID
 *     parameters:
 *       - name: id
 *         description: Rental price ID
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Updated rental price details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ApartmentID:
 *                 type: integer
 *               BasicRentalPrice:
 *                 type: number
 *                 format: float
 *               RentalPriceRebate:
 *                 type: number
 *                 format: float
 *               ExogenousCriteriaID:
 *                 type: integer
 *               RegardingApartmentCriteriaID:
 *                 type: integer
 *               ApartmentItselfCriteriaID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Rental price updated successfully.
 *       404:
 *         description: Rental price not found.
 *       500:
 *         description: Server error.
 */
router.put('/:id', RentalPricesController.updateRentalPrices);

/**
 * @swagger
 * /api/rentalPrices/{id}:
 *   delete:
 *     tags: [Rental-Prices]
 *     summary: Delete a rental price by ID
 *     parameters:
 *       - name: id
 *         description: Rental price ID
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Rental price deleted successfully.
 *       404:
 *         description: Rental price not found.
 *       500:
 *         description: Server error.
 */
router.delete('/:id', RentalPricesController.deleteRentalPrices);

module.exports = router;
