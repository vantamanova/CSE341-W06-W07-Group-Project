// ===============================
// CSE341 Group Project - Server Setup
// ===============================

// Load environment variables
require('dotenv').config();

// Core modules 
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const swaggerUi = require('swagger-ui-express');

// Local modules 
const db = require('./database/connect');
const routes = require('./routes');
require('./config/passport');
const swaggerFile = require('./swagger-output.json');

// Initialize app 
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup 
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Mount routes
app.use('/', routes);

// Serve Jest coverage report at /coverage
app.use('/coverage', express.static('coverage/lcov-report'));

// Initialize database, then start server
db.initDb((err) => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
  } else {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
});

module.exports = app;