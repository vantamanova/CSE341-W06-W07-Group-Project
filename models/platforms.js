const mongoose = require('mongoose');

const platformSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Platform', platformSchema);
