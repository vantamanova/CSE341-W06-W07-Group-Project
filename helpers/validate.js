// helpers/validate.js
const { validationResult } = require('express-validator');
const Joi = require('joi');

// User schema
const userSchema = Joi.object({
  role: Joi.string().valid('admin', 'user').required(),
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  favorites: Joi.array().items(Joi.string()).default([]),
  rank: Joi.string().valid('Beginner', 'Intermediate', 'Pro', 'Expert').required(),
  date_of_registration: Joi.date().iso().required(),
  age: Joi.number().integer().min(13).required(),
  membership: Joi.string().valid('free', 'premium').required(),
});

// Character schema
// Since roles vary widely (e.g., "Protagonist", "Mentor / Goddess of Magic", "Boss"),
// allow free-form strings with a minimum length instead of restricting to fixed values.
const characterSchema = Joi.object({
  name: Joi.string().min(1).required(),
  associated_games: Joi.array().items(Joi.string()).required(),
  role: Joi.string().min(3).required(),
});

const gameSchema = Joi.object({
  title: Joi.string().min(1).required(),
  genre: Joi.string().min(3).required(),
  release_date: Joi.date().iso().required(),
  developer: Joi.string().min(3).required(),
  platforms: Joi.array().items(Joi.string()).required(),
});

// Express middleware for validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()[0].msg });
  }
  next();

module.exports = {
  userSchema,
  characterSchema,
  gameSchema,
  handleValidationErrors
};
  characterSchema
};
