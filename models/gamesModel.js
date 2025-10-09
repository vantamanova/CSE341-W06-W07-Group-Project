const Mongoose = require('mongoose');

const gameSchema = new Mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    developer: { type: String, required: true },
    platforms: { type: [String], required: true, validate: {
        validator: (arr) => arr.length > 0,
        message: 'At least one platform is required',
    } },
}, { timestamps: true });

module.exports = Mongoose.model('Game', gameSchema);

