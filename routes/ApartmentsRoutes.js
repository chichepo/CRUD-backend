// ApartmentsRoutes.js
const express = require('express');
const ApartmentsController = require('../controllers/ApartmentsController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Apartments
 *     description: Apartments management
 */

/**
 * @swagger
 * /api/apartments:
 *   post:
 *     tags: [Apartments]
 *     summary: Create a new Apartment
 *     responses:
 *       201:
 *         description: Record inserted successfully.
 *       500:
 *         description: Server error.
 */
router.post('/', ApartmentsController.createApartments);

/**
 * @swagger
 * /api/apartments:
 *   get:
 *     tags: [Apartments]
 *     summary: Retrieve a list of all apartmnents
 *     responses:
 *       200:
 *         description: List of apartments.
 *       500:
 *         description: Server error.
 */
router.get('/', ApartmentsController.getAllApartments);

/**
 * @swagger
 * /api/apartments/{id}:
 *   put:
 *     tags: [Apartments]
 *     summary: Update an Apartments by ID
 *     parameters:
 *       - name: id
 *         description: Apartments ID.
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Record updated successfully.
 *       500:
 *         description: Server error.
 */
router.put('/:id', ApartmentsController.updateApartments);

/**
 * @swagger
 * /api/apartments/{id}:
 *   delete:
 *     tags: [Apartments]
 *     summary: Delete an Apartments by ID
 *     parameters:
 *       - name: id
 *         description: Apartments ID.
 *         in: path
 *         required: true
 *     responses:
 *       204:
 *         description: Record deleted successfully.
 *       500:
 *         description: Server error.
 */
router.delete('/:id', ApartmentsController.deleteApartments);

module.exports = router;
