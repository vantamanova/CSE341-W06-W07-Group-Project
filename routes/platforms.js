const express = require("express");
const router = express.Router();
const platformsController = require("../controllers/platformsController");

/**
 * @swagger
 * tags:
 *   name: Platforms
 *   description: Platform management
 */

/**
 * @swagger
 * /api/platforms:
 *   get:
 *     summary: Get all platforms
 *     tags: [Platforms]
 *     responses:
 *       200:
 *         description: List of platforms
 */
router.get("/", platformsController.getAllPlatforms);

/**
 * @swagger
 * /api/platforms/{id}:
 *   get:
 *     summary: Get platform by ID
 *     tags: [Platforms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Platform ID
 *     responses:
 *       200:
 *         description: Platform data
 *       404:
 *         description: Platform not found
 */
router.get("/:id", platformsController.getPlatformById);

/**
 * @swagger
 * /api/platforms:
 *   post:
 *     summary: Create a new platform
 *     tags: [Platforms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *               manufacturer:
 *                 type: string
 *               releaseYear:
 *                 type: integer
 *               type:
 *                 type: string
 *               logoUrl:
 *                 type: string
 *     responses:
 *       201:
 *         description: Platform created
 *       400:
 *         description: Invalid input
 */
router.post("/", platformsController.createPlatform);

/**
 * @swagger
 * /api/platforms/{id}:
 *   put:
 *     summary: Update a platform
 *     tags: [Platforms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Platform ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               manufacturer:
 *                 type: string
 *               releaseYear:
 *                 type: integer
 *               type:
 *                 type: string
 *               logoUrl:
 *                 type: string
 *     responses:
 *       200:
 *         description: Platform updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Platform not found
 */
router.put("/:id", platformsController.updatePlatform);

/**
 * @swagger
 * /api/platforms/{id}:
 *   delete:
 *     summary: Delete a platform
 *     tags: [Platforms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Platform ID
 *     responses:
 *       200:
 *         description: Platform deleted
 *       404:
 *         description: Platform not found
 */
router.delete("/:id", platformsController.deletePlatform);

/**
 * @swagger
 * /api/platforms/{id}/games:
 *   get:
 *     summary: Get games on a platform
 *     tags: [Platforms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Platform ID
 *     responses:
 *       200:
 *         description: List of games on platform
 *       404:
 *         description: Platform not found
 */
router.get("/:id/games", platformsController.getGamesOnPlatform);

module.exports = router;
