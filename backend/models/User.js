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
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: [3, 'Name must be at least 3 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [5, 'Password must be at least 5 characters']
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('user', UserSchema);