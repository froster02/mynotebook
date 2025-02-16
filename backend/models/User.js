const mongoose = require('mongoose');

/**
 * Schema definition for User model
 * @typedef {Object} UserSchema
 * @property {string} name - The user's full name (required)
 * @property {string} email - The user's email address (required, must be unique)
 * @property {string} password - The user's hashed password (required)
 * @property {Date} date - The date when the user was created (defaults to current timestamp)
 */
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('user', UserSchema);