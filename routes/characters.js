// Defines routes for character-related endpoints and maps them to controller functions.

const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /characters:
 *   get:
 *     description: Get all characters
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", (req, res) => {
  res.send("Characters route working");
});

/**
 * @swagger
 * /characters:
 *   post:
 *     description: Create a new character
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               role:
 *                 type: string
 *               game:
 *                 type: string
 *     responses:
 *       201:
 *         description: Character created
 */
router.post("/", (req, res) => {
  res.send("Character created");
});

/**
 * @swagger
 * /characters/{id}:
 *   put:
 *     description: Update a character
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               role:
 *                 type: string
 *               game:
 *                 type: string
 *     responses:
 *       200:
 *         description: Character updated
 */
router.put("/:id", (req, res) => {
  res.send(`Character ${req.params.id} updated`);
});

/**
 * @swagger
 * /characters/{id}:
 *   delete:
 *     description: Delete a character
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Character deleted
 */
router.delete("/:id", (req, res) => {
  res.send(`Character ${req.params.id} deleted`);
});

module.exports = router;
