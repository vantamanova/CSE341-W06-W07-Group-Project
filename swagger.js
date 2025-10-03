const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Video Games API",
      version: "1.0.0",
    },
  },
  apis: ["../routes/*.js"], // You can add JSDoc comments here for endpoints
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
