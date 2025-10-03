const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  role: { type: String, enum: ['admin', 'user'], required: true },
  username: { type: String, required: true, unique: true, minlength: 3 },
  email: { type: String, required: true, unique: true },
  favorites: { type: [String], default: [] },
  rank: { type: String, enum: ['Beginner', 'Intermediate', 'Pro', 'Expert'], required: true },
  date_of_registration: { type: Date, required: true },
  age: { type: Number, min: 13, required: true },
  membership: { type: String, enum: ['free', 'premium'], required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);