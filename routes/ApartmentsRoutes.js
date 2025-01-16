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
 *     summary: Create a new apartment
 *     requestBody:
 *       description: Apartment details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               BuildingID:
 *                 type: integer
 *                 description: ID of the associated building.
 *               ApartmentNumber:
 *                 type: string
 *                 description: Apartment number.
 *               Floor:
 *                 type: integer
 *                 description: Floor number of the apartment.
 *               CardinalDirection:
 *                 type: string
 *                 description: Cardinal direction (e.g., North, South).
 *               TypeID:
 *                 type: integer
 *                 description: ID of the apartment type.
 *               TotalSurfaceM2:
 *                 type: number
 *                 format: float
 *                 description: Total surface area in square meters.
 *               BalconyOrGardenSurfaceM2:
 *                 type: number
 *                 format: float
 *                 description: Surface area of the balcony or garden in square meters.
 *               UnderSupervision:
 *                 type: boolean
 *                 description: Whether the apartment is under supervision.
 *               DrawingPlanLink:
 *                 type: string
 *                 description: Link to the drawing plan of the apartment.
 *               RentalPriceID:
 *                 type: integer
 *                 description: ID of the rental price.
 *     responses:
 *       201:
 *         description: Apartment created successfully.
 *       500:
 *         description: Server error.
 */
router.post('/', ApartmentsController.createApartments);

/**
 * @swagger
 * /api/apartments:
 *   get:
 *     tags: [Apartments]
 *     summary: Retrieve a list of all apartments
 *     responses:
 *       200:
 *         description: List of apartments retrieved successfully.
 *       500:
 *         description: Server error.
 */
router.get('/', ApartmentsController.getAllApartments);

/**
 * @swagger
 * /api/apartments/{id}:
 *   put:
 *     tags: [Apartments]
 *     summary: Update an apartment by ID
 *     parameters:
 *       - name: id
 *         description: Apartment ID
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Updated apartment details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               BuildingID:
 *                 type: integer
 *               ApartmentNumber:
 *                 type: string
 *               Floor:
 *                 type: integer
 *               CardinalDirection:
 *                 type: string
 *               TypeID:
 *                 type: integer
 *               TotalSurfaceM2:
 *                 type: number
 *                 format: float
 *               BalconyOrGardenSurfaceM2:
 *                 type: number
 *                 format: float
 *               UnderSupervision:
 *                 type: boolean
 *               DrawingPlanLink:
 *                 type: string
 *               RentalPriceID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Apartment updated successfully.
 *       404:
 *         description: Apartment not found.
 *       500:
 *         description: Server error.
 */
router.put('/:id', ApartmentsController.updateApartments);

/**
 * @swagger
 * /api/apartments/{id}:
 *   delete:
 *     tags: [Apartments]
 *     summary: Delete an apartment by ID
 *     parameters:
 *       - name: id
 *         description: Apartment ID
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Apartment deleted successfully.
 *       404:
 *         description: Apartment not found.
 *       500:
 *         description: Server error.
 */
router.delete('/:id', ApartmentsController.deleteApartments);

module.exports = router;
