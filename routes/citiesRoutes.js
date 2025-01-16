// citiesRoutes.js
const express = require('express');
const citiesController = require('../controllers/citiesController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Cities
 *     description: Cities management
 */

/**
 * @swagger
 * /api/cities:
 *   post:
 *     tags: [Cities]
 *     summary: Create a new city
 *     requestBody:
 *       description: City details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CityName:
 *                 type: string
 *                 description: Name of the city.
 *     responses:
 *       201:
 *         description: City created successfully.
 *       500:
 *         description: Server error.
 */
router.post('/', citiesController.createCities); // 201 Created

/**
 * @swagger
 * /api/cities:
 *   get:
 *     tags: [Cities]
 *     summary: Retrieve a list of all cities
 *     responses:
 *       200:
 *         description: List of cities retrieved successfully.
 *       500:
 *         description: Server error.
 */
router.get('/', citiesController.getAllCities); // 200 OK

/**
 * @swagger
 * /api/cities/{id}:
 *   put:
 *     tags: [Cities]
 *     summary: Update a city by ID
 *     parameters:
 *       - name: id
 *         description: City ID
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Updated city details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CityName:
 *                 type: string
 *                 description: Name of the city.
 *     responses:
 *       200:
 *         description: City updated successfully.
 *       404:
 *         description: City not found.
 *       500:
 *         description: Server error.
 */
router.put('/:id', citiesController.updateCities); // 200 OK

/**
 * @swagger
 * /api/cities/{id}:
 *   delete:
 *     tags: [Cities]
 *     summary: Delete a city by ID
 *     parameters:
 *       - name: id
 *         description: City ID
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: City deleted successfully.
 *       404:
 *         description: City not found.
 *       500:
 *         description: Server error.
 */
router.delete('/:id', citiesController.deleteCities); // 204 No Content

module.exports = router;
