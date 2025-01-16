// BuildingsRoutes.js
const express = require('express');
const buildingsController = require('../controllers/buildingsController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Buildings
 *     description: Buildings management
 */

/**
 * @swagger
 * /api/buildings:
 *   post:
 *     tags: [Buildings]
 *     summary: Create a new building
 *     requestBody:
 *       description: Building details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               BuildingName:
 *                 type: string
 *                 description: Name of the building.
 *               ProjectID:
 *                 type: integer
 *                 description: Associated project ID.
 *     responses:
 *       201:
 *         description: Building created successfully.
 *       500:
 *         description: Server error.
 */
router.post('/', buildingsController.createBuilding);

/**
 * @swagger
 * /api/buildings:
 *   get:
 *     tags: [Buildings]
 *     summary: Retrieve a list of all buildings
 *     responses:
 *       200:
 *         description: List of buildings retrieved successfully.
 *       500:
 *         description: Server error.
 */
router.get('/', buildingsController.getAllBuildings);

/**
 * @swagger
 * /api/buildings/{id}:
 *   put:
 *     tags: [Buildings]
 *     summary: Update a building by ID
 *     parameters:
 *       - name: id
 *         description: Building ID
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Updated building details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               BuildingName:
 *                 type: string
 *                 description: Name of the building.
 *               ProjectID:
 *                 type: integer
 *                 description: Associated project ID.
 *     responses:
 *       200:
 *         description: Building updated successfully.
 *       404:
 *         description: Building not found.
 *       500:
 *         description: Server error.
 */
router.put('/:id', buildingsController.updateBuilding);

/**
 * @swagger
 * /api/buildings/{id}:
 *   delete:
 *     tags: [Buildings]
 *     summary: Delete a building by ID
 *     parameters:
 *       - name: id
 *         description: Building ID
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Building deleted successfully.
 *       404:
 *         description: Building not found.
 *       500:
 *         description: Server error.
 */
router.delete('/:id', buildingsController.deleteBuilding);

module.exports = router;
