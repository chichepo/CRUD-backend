
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
 *     summary: Create a new Building
 *     responses:
 *       201:
 *         description: Record inserted successfully.
 *       500:
 *         description: Server error.
 */
router.post('/', buildingsController.createBuilding);

/**
 * @swagger
 * /api/buildings:
 *   get:
 *     tags: [Buildings]
 *     summary: Retrieve a list of all Buildings
 *     responses:
 *       200:
 *         description: List of Buildings.
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
 *         description: building ID.
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Record updated successfully.
 *       500:
 *         description: Server error.
 */
router.put('/:id', buildingsController.updateBuilding);

/**
 * @swagger
 * /api/buildings/{id}:
 *   delete:
 *     tags: [Buildings]
 *     summary: Delete an building by ID
 *     parameters:
 *       - name: id
 *         description: building ID.
 *         in: path
 *         required: true
 *     responses:
 *       204:
 *         description: Record deleted successfully.
 *       500:
 *         description: Server error.
 */
router.delete('/:id', buildingsController.deleteBuilding);

module.exports = router;
