// ApartmentTypesRoutes.js
const express = require('express');
const ApartmentTypesController = require('../controllers/ApartmentTypesController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Apartment-Types
 *     description: Apartment Types management
 */

/**
 * @swagger
 * /api/apartmentTypes:
 *   post:
 *     tags: [Apartment-Types]
 *     summary: Create a new apartment type
 *     requestBody:
 *       description: Apartment type details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               TypeName:
 *                 type: string
 *                 description: The name of the apartment type.
 *               NumberOfRooms:
 *                 type: integer
 *                 description: The number of rooms in the apartment type.
 *     responses:
 *       201:
 *         description: Apartment type created successfully.
 *       500:
 *         description: Server error.
 */
router.post('/', ApartmentTypesController.createApartmentTypes);

/**
 * @swagger
 * /api/apartmentTypes:
 *   get:
 *     tags: [Apartment-Types]
 *     summary: Retrieve a list of all apartment types
 *     responses:
 *       200:
 *         description: List of apartment types retrieved successfully.
 *       500:
 *         description: Server error.
 */
router.get('/', ApartmentTypesController.getAllApartmentTypes);

/**
 * @swagger
 * /api/apartmentTypes/{id}:
 *   put:
 *     tags: [Apartment-Types]
 *     summary: Update an apartment type by ID
 *     parameters:
 *       - name: id
 *         description: Apartment type ID
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Updated apartment type details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               TypeName:
 *                 type: string
 *                 description: The name of the apartment type.
 *               NumberOfRooms:
 *                 type: integer
 *                 description: The number of rooms in the apartment type.
 *     responses:
 *       200:
 *         description: Apartment type updated successfully.
 *       404:
 *         description: Apartment type not found.
 *       500:
 *         description: Server error.
 */
router.put('/:id', ApartmentTypesController.updateApartmentTypes);

/**
 * @swagger
 * /api/apartmentTypes/{id}:
 *   delete:
 *     tags: [Apartment-Types]
 *     summary: Delete an apartment type by ID
 *     parameters:
 *       - name: id
 *         description: Apartment type ID
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Apartment type deleted successfully.
 *       404:
 *         description: Apartment type not found.
 *       500:
 *         description: Server error.
 */
router.delete('/:id', ApartmentTypesController.deleteApartmentTypes);

module.exports = router;
