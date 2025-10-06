// helpers/validate.js
const Joi = require('joi');

/* ---------------------- USERS ---------------------- */
const userSchema = Joi.object({
  role: Joi.string().valid('admin', 'user').required(),
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  favorites: Joi.array().items(Joi.string()).default([]),
  rank: Joi.string().valid('Beginner', 'Intermediate', 'Pro', 'Expert').required(),
  date_of_registration: Joi.date().iso().required(),
  age: Joi.number().integer().min(13).required(),
  membership: Joi.string().valid('free', 'premium').required(),
}).unknown(false);

/* ---------------------- CHARACTERS ---------------------- */
// Role values vary widely across datasets, so keep flexible validation.
const characterSchema = Joi.object({
  name: Joi.string().min(1).required(),
  associated_games: Joi.array().items(Joi.string()).required(),
  role: Joi.string().min(3).required(),
}).unknown(false);

/* ---------------------- GAMES ---------------------- */
const gameSchema = Joi.object({
  title: Joi.string().min(1).required(),
  genre: Joi.string().min(2).required(),
  release_date: Joi.date().iso().required(),
  platform: Joi.array().items(Joi.string()).min(1).required(),
  developer: Joi.string().min(2).required(),
  characters: Joi.array().items(Joi.string()).default([]),
  playtime_hours: Joi.number().integer().min(0).optional(),
}).unknown(false);

/* ---------------------- PLATFORMS ---------------------- */
const platformSchema = Joi.object({
  name: Joi.string().min(1).required(),
  company: Joi.string().min(1).required(),
  release_year: Joi.number().integer().min(1970).max(2100).required(),
}).unknown(false);

module.exports = { userSchema, characterSchema, gameSchema, platformSchema };
