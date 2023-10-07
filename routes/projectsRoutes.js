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
 *     responses:
 *       201:
 *         description: Record inserted successfully.
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
 *         description: List of projects.
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
 *         description: Project ID.
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
router.put('/:id', projectsController.updateProjects); // 200 OK

/**
 * @swagger
 * /api/projects/{id}:
 *   delete:
 *     tags: [Projects]
 *     summary: Delete a project by ID
 *     parameters:
 *       - name: id
 *         description: Project ID.
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
router.delete('/:id', projectsController.deleteProjects);

module.exports = router;
