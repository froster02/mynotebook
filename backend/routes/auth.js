/**
 * Express module
 * @const
 * @module express
 * @description Express.js web application framework for Node.js
 * @requires express
 */
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a user using: POST "/api/auth/"
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);  // Changed User() to new User()
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
});

module.exports = router;