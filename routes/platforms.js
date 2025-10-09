// Defines routes for platform-related endpoints and maps them to controller functions.
const express = require("express");
const router = express.Router();
const platformsController = require("../controllers/platforms");
const {IsAuthenticated} = require("../middlewares/auth");

router.get("/", platformsController.getAllPlatforms);

router.get("/:id", platformsController.getPlatformById);

router.post("/", IsAuthenticated, platformsController.createPlatform);

router.put("/:id", IsAuthenticated, platformsController.updatePlatform);

router.delete("/:id", IsAuthenticated, platformsController.deletePlatform);

router.get("/:id/games", platformsController.getGamesOnPlatform);


module.exports = router;