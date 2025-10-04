// Controller for handling logic related to user endpoints (CRUD operations, authentication helpers).

const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
    try {
        // Logic to fetch all users from the database
        const users = await User.find(); // Replace with actual DB call
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const userId = await (req.params.id);
        // Logic to fetch a user by ID from the database
        const user = await User.findById(userId); // Replace with actual DB call
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        } 
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};

exports.getUserbyUsername = async (req, res) => {
    try {
        const username = req.params.username;
        // Logic to fetch a user by username from the database
        const user = await User .findOne({ username }); // Replace with actual DB call
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};

// controllers/usersController.js
exports.addUser = async (req, res) => {
  try {
    const payload = { ...req.body };

    // Ensure date is a Date object (Swagger sends a string)
    if (payload.date_of_registration) {
      payload.date_of_registration = new Date(payload.date_of_registration);
    }

    const savedUser = await User.create(payload);
    return res.status(201).json(savedUser);
  } catch (err) {
    // Duplicate key (unique email/username)
    if (err && err.code === 11000) {
      const field = Object.keys(err.keyPattern || {})[0] || 'field';
      return res.status(409).json({ error: `${field} already exists` });
    }

    // Mongoose validation error
    if (err && err.name === 'ValidationError') {
      const details = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ error: 'Validation failed', details });
    }

    console.error('Add user error:', err); // keep this for debugging
    return res.status(500).json({ error: 'Failed to add user' });
  }
};

exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.userId; 
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true, runValidators: true }); // Replace with actual DB call
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(updatedUser);
    } catch (err) {
        console.error('Update error:', err.message); 
        res.status(400).json({ error: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        // Logic to delete a user by ID from the database
        const deletedUser = await User.findByIdAndDelete(userId); // Replace with actual DB call
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
};

exports.authenticateUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Logic to authenticate user (e.g., check username and password)
        const user = await User.find
            .findOne({ username, password }); // Replace with actual DB call and hashing
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        res.json({ message: 'Authentication successful', user });
    } catch (err) {
        res.status(500).json({ error: 'Failed to authenticate user(Oauth here _____)' });
    }
};

exports.logoutUser = (req, res) => {
    // Logic to handle user logout (e.g., invalidate session or token)
    res.json({ message: 'User logged out successfully (Oauth here _____)' });
};