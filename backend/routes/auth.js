/**
 * Express module
 * @const
 * @module express
 * @description Express.js web application framework for Node.js
 * @requires express
 */
const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../models/User');

// Create a user using: POST "/api/auth/"
router.post('/', [
    check('name', 'Name is required').isLength({ min: 3 }),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password should be at least 5 characters').isLength({ min: 5 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        res.send(req.body);
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
});

module.exports = router;