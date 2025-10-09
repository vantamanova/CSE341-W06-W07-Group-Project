// Defines routes for platform-related endpoints and maps them to controller functions.
const express = require("express");
const router = express.Router();
const platformsController = require("../controllers/platformsController");
const {IsAuthenticated} = require("../middlewares/auth");

router.get("/", platformsController.getAllPlatforms);

router.get("/:id", platformsController.getPlatformById);

router.post("/", platformsController.createPlatform);

router.put("/:id", platformsController.updatePlatform);

router.delete("/:id", platformsController.deletePlatform);

router.get("/:id/games", platformsController.getGamesOnPlatform);


module.exports = router;


