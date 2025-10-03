// helpers/validate.js
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

module.exports = {
  userSchema,
  characterSchema
};
