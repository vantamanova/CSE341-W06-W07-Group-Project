// Central router file.
// Combines all route modules (users, games, characters, platforms) and exports them.
const express = require("express");
const router = express.Router();
const db = require("../database/connect");

// Temporary root check
router.get("/", (req, res) => {
  res.send("CSE341 Group Project API is running");
});

// Test route: fetch first 5 users
router.get("/test-db", async (req, res) => {
  try {
    const database = db.getDatabase();
    const users = await database.collection("users").find().limit(5).toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.use("/characters", require("./characters"));

// Will be added later
// router.use('/users', require('./users'));
// Will be added later 
router.use('/users', require('./userRoutes'));
// router.use('/games', require('./games'));
// router.use('/platforms', require('./platforms'));

module.exports = router;
