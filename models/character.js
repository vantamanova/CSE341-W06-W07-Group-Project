const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  associated_games: { type: [String], default: [] },
  role: { type: String, required: true }
},
{
    versionKey: false 
  });
  
module.exports = mongoose.model('Character', characterSchema);