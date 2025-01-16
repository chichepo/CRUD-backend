// externalParametersRoutes.js
const express = require('express');
const externalParametersController = require('../controllers/externalParametersController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: externalParameters
 *     description: External Parameters management
 */

/**
 * @swagger
 * /api/externalParameters:
 *   post:
 *     tags: [externalParameters]
 *     summary: Create a new external parameter
 *     requestBody:
 *       description: External parameter details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Source:
 *                 type: string
 *                 description: Source of the parameter.
 *               Name:
 *                 type: string
 *                 description: Name of the parameter.
 *               Description:
 *                 type: string
 *                 description: Description of the parameter.
 *               Category:
 *                 type: string
 *                 description: Category of the parameter.
 *               SubCategory:
 *                 type: string
 *                 description: Subcategory of the parameter.
 *     responses:
 *       201:
 *         description: External parameter created successfully.
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
 *         description: List of external parameters retrieved successfully.
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
 *         description: Parameter ID
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Updated external parameter details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Source:
 *                 type: string
 *               Name:
 *                 type: string
 *               Description:
 *                 type: string
 *               Category:
 *                 type: string
 *               SubCategory:
 *                 type: string
 *     responses:
 *       200:
 *         description: External parameter updated successfully.
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
 *         description: Parameter ID
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: External parameter deleted successfully.
 *       404:
 *         description: Record not found.
 *       500:
 *         description: Server error.
 */
router.delete('/:id', externalParametersController.deleteExternalParameter); // 204 No Content

module.exports = router;
