// Defines routes for user-related endpoints and maps them to controller functions.

const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', (req, res) => {
  res.send('Users route working');
});

/**
 * @swagger
 * /users:
 *   post:
 *     description: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 */
router.post('/', (req, res) => {
  res.send('User created');
});

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     description: Update a user
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
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated
 */
router.put('/:id', (req, res) => {
  res.send(`User ${req.params.id} updated`);
});

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     description: Delete a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted
 */
router.delete('/:id', (req, res) => {
  res.send(`User ${req.params.id} deleted`);
});

module.exports = router;
