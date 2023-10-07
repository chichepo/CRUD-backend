// externalParametersRoutes.js
const express = require('express');
const externalParametersController = require('../controllers/externalParametersController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: externalParameters
 *     description: Projects management
 */

/**
 * @swagger
 * /api/externalParameters:
 *   post:
 *     tags: [externalParameters]
 *     summary: Create a new external parameter
 *     responses:
 *       201:
 *         description: Record inserted successfully.
 *       500:
 *         description: Server error.
 */
router.post('/', externalParametersController.createExternalParameter); // 201 Created

/**
 * @swagger
 * /api/externalParameters:
 *   get:
 *     tags: [externalParameters]
 *     summary: Retrieve a list of all external parameters
 *     responses:
 *       200:
 *         description: List of external parameters.
 *       404:
 *         description: No records found.
 *       500:
 *         description: Server error.
 */
router.get('/', externalParametersController.getAllExternalParameters); // 200 OK

/**
 * @swagger
 * /api/externalParameters/{id}:
 *   put:
 *     tags: [externalParameters]
 *     summary: Update an external parameter by ID
 *     parameters:
 *       - name: id
 *         description: Parameter ID.
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Record updated successfully.
 *       404:
 *         description: Record not found.
 *       500:
 *         description: Server error.
 */
router.put('/:id', externalParametersController.updateExternalParameter); // 200 OK

/**
 * @swagger
 * /api/externalParameters/{id}:
 *   delete:
 *     tags: [externalParameters]
 *     summary: Delete an external parameter by ID
 *     parameters:
 *       - name: id
 *         description: Parameter ID.
 *         in: path
 *         required: true
 *     responses:
 *       204:
 *         description: Record deleted successfully.
 *       404:
 *         description: Record not found.
 *       500:
 *         description: Server error.
 */
router.delete('/:id', externalParametersController.deleteExternalParameter); // 204 No Content

module.exports = router;
