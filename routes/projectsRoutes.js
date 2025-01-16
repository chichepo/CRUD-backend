// projectsRoutes.js
const express = require('express');
const projectsController = require('../controllers/projectsController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Projects
 *     description: Projects management
 */

/**
 * @swagger
 * /api/projects:
 *   post:
 *     tags: [Projects]
 *     summary: Create a new project
 *     requestBody:
 *       description: Project details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ProjectCode:
 *                 type: string
 *                 description: Code of the project.
 *               CodeName:
 *                 type: string
 *                 description: Name of the project.
 *               CityId:
 *                 type: integer
 *                 description: ID of the associated city.
 *               Address:
 *                 type: string
 *                 description: Address of the project.
 *               GeographicalLocation:
 *                 type: string
 *                 description: Geographical location of the project.
 *               ProjectManagerName:
 *                 type: string
 *                 description: Name of the project manager.
 *               ProjectStatus:
 *                 type: string
 *                 description: Status of the project.
 *               NumberOfBuildings:
 *                 type: integer
 *               NumberOfApartments:
 *                 type: integer
 *               NumberOfAvailableApartments:
 *                 type: integer
 *               GeneralInformation:
 *                 type: string
 *                 description: General information about the project.
 *               CommunityProject:
 *                 type: boolean
 *               LuxuriousProject:
 *                 type: boolean
 *               ApartmentRentalUnderSupervision:
 *                 type: boolean
 *               RandomDrawStatus:
 *                 type: boolean
 *               PartnershipDetails:
 *                 type: string
 *     responses:
 *       201:
 *         description: Project created successfully.
 *       500:
 *         description: Server error.
 */
router.post('/', projectsController.createProjects); // 201 Created

/**
 * @swagger
 * /api/projects:
 *   get:
 *     tags: [Projects]
 *     summary: Retrieve a list of all projects
 *     responses:
 *       200:
 *         description: List of projects retrieved successfully.
 *       404:
 *         description: No records found.
 *       500:
 *         description: Server error.
 */
router.get('/', projectsController.getAllProjects); // 200 OK

/**
 * @swagger
 * /api/projects/{id}:
 *   put:
 *     tags: [Projects]
 *     summary: Update a project by ID
 *     parameters:
 *       - name: id
 *         description: Project ID
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Updated project details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ProjectCode:
 *                 type: string
 *               CodeName:
 *                 type: string
 *               CityId:
 *                 type: integer
 *               Address:
 *                 type: string
 *               GeographicalLocation:
 *                 type: string
 *               ProjectManagerName:
 *                 type: string
 *               ProjectStatus:
 *                 type: string
 *               NumberOfBuildings:
 *                 type: integer
 *               NumberOfApartments:
 *                 type: integer
 *               NumberOfAvailableApartments:
 *                 type: integer
 *               GeneralInformation:
 *                 type: string
 *               CommunityProject:
 *                 type: boolean
 *               LuxuriousProject:
 *                 type: boolean
 *               ApartmentRentalUnderSupervision:
 *                 type: boolean
 *               RandomDrawStatus:
 *                 type: boolean
 *               PartnershipDetails:
 *                 type: string
 *     responses:
 *       200:
 *         description: Project updated successfully.
 *       404:
 *         description: Project not found.
 *       500:
 *         description: Server error.
 */
router.put('/:id', projectsController.updateProjects); // 200 OK

/**
 * @swagger
 * /api/projects/{id}:
 *   delete:
 *     tags: [Projects]
 *     summary: Delete a project by ID
 *     parameters:
 *       - name: id
 *         description: Project ID
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Project deleted successfully.
 *       404:
 *         description: Project not found.
 *       500:
 *         description: Server error.
 */
router.delete('/:id', projectsController.deleteProjects); // 204 No Content

module.exports = router;
