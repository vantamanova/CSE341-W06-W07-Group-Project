// Entry point of the application.
// Sets up Express server, middleware, and connects routes.
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const express = require('express');
const app = express();
require('dotenv').config();

const routes = require('./routes');
const db = require('./database/connect');

const port = process.env.PORT || 3000;

// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Mount routes
const usersRoutes = require('./routes/users');
const charactersRoutes = require('./routes/characters');

app.use('/users', usersRoutes);
app.use('/characters', charactersRoutes);

app.use(express.json());
app.use('/', routes);

// Initialize database, then start server
db.initDb((err) => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
  } else {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  }
});