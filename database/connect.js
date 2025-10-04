const mongoose = require('mongoose');

const initDb = async (callback) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongoose connected!');
    callback(null);
  } catch (err) {
    console.error('Failed to connect with Mongoose:', err);
    callback(err);
  }
};

const getDatabase = () => mongoose.connection;

module.exports = { initDb, getDatabase };