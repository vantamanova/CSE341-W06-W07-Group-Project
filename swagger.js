const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Video Game API',
    description: 'API for managing games, users, characters, and platforms',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
