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
 *     responses:
 *       201:
 *         description: Record inserted successfully.
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
 *         description: List of apartment types.
 *       500:
 *         description: Server error.
 */
router.get('/', ApartmentTypesController.getAllApartmentTypes);

/**
 * @swagger
 * /api/apartmentTypes/{id}:
 *   put:
 *     tags: [Apartment-Types]
 *     summary: Update a apartment types by ID
 *     parameters:
 *       - name: id
 *         description: apartment types ID.
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Record updated successfully.
 *       500:
 *         description: Server error.
 */
router.put('/:id', ApartmentTypesController.updateApartmentTypes);

/**
 * @swagger
 * /api/apartmentTypes/{id}:
 *   delete:
 *     tags: [Apartment-Types]
 *     summary: Delete a apartment types by ID
 *     parameters:
 *       - name: id
 *         description: apartment types ID.
 *         in: path
 *         required: true
 *     responses:
 *       204:
 *         description: Record deleted successfully.
 *       500:
 *         description: Server error.
 */
router.delete('/:id', ApartmentTypesController.deleteApartmentTypes);

module.exports = router;
