// Defines routes for platform-related endpoints and maps them to controller functions.
// const {IsAuthenticated} = require("../middlewares/auth");

const express = require('express');
const router = express.Router();
const platformsController = require('../controllers/platforms');
const { validatePlatform } = require('../middlewares/validatePlatform');
const { IsAuthenticated } = require('../middlewares/auth');

router.get('/',
  /* #swagger.tags = ['Platforms'] */
  platformsController.getAllPlatforms
);

router.get('/:id',
  /* #swagger.tags = ['Platforms'] */
  platformsController.getPlatformById
);

router.post('/', IsAuthenticated,
  /*  
    #swagger.tags = ['Platforms']
    #swagger.description = 'Create a new platform'
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Platform information',
      required: true,
      schema: {
        name: 'PlayStation 5',
        manufacturer: 'Sony',
        releaseYear: 2020
      }
    }
  */
  validatePlatform,
  platformsController.createPlatform
);

router.put('/:id', IsAuthenticated,
  /*  
    #swagger.tags = ['Platforms']
    #swagger.description = 'Update an existing platform'
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Updated platform information',
      required: true,
      schema: {
        name: 'PlayStation 5',
        manufacturer: 'Sony Interactive Entertainment',
        releaseYear: 2020
      }
    }
  */
  validatePlatform,
  platformsController.updatePlatform
);

router.delete('/:id', IsAuthenticated,
  /* #swagger.tags = ['Platforms'] */
  platformsController.deletePlatform
);

module.exports = router;
