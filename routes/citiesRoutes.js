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
 *     responses:
 *       201:
 *         description: Record inserted successfully.
 *       500:
 *         description: Server error.
 */
router.post('/', citiesController.createCities);  // 201 Created

/**
 * @swagger
 * /api/cities:
 *   get:
 *     tags: [Cities]
 *     summary: Retrieve a list of all cities
 *     responses:
 *       200:
 *         description: List of cities.
 *       500:
 *         description: Server error.
 */
router.get('/', citiesController.getAllCities);  // 200 OK

/**
 * @swagger
 * /api/cities/{id}:
 *   put:
 *     tags: [Cities]
 *     summary: Update a City by ID
 *     parameters:
 *       - name: id
 *         description: City ID.
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Record updated successfully.
 *       500:
 *         description: Server error.
 */
router.put('/:id', citiesController.updateCities);  // 200 OK

/**
 * @swagger
 * /api/cities/{id}:
 *   delete:
 *     tags: [Cities]
 *     summary: Delete an city by ID
 *     parameters:
 *       - name: id
 *         description: City ID.
 *         in: path
 *         required: true
 *     responses:
 *       204:
 *         description: Record deleted successfully.
 *       500:
 *         description: Server error.
 */
router.delete('/:id', citiesController.deleteCities);  // 204 No Content

module.exports = router;
