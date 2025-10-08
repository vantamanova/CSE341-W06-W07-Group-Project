// Central router file.
// Combines all route modules (users, games, characters, platforms) and exports them.
const express = require("express");
const router = express.Router();
const db = require("../database/connect");

// Temporary root check
router.get("/", (req, res) => {
  res.send("CSE341 Group Project API is running");
});

// Will be added later
// router.use('/users', require('./users'));
// Will be added later 
router.use('/users', require('./userRoutes'));
router.use("/characters", require("./characters"));
// router.use('/games', require('./games'));
// router.use('/platforms', require('./platforms'));

module.exports = router;
