/**
 * @module routes/auth
 * @requires express
 * @requires express-validator
 * @requires ../models/User
 */
const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

/**
 * @route POST /api/auth
 * @description Register a new user
 * @access Public
 */
router.post('/', [
    check('name')
        .trim()
        .isLength({ min: 3 })
        .withMessage('Name must be at least 3 characters long')
        .escape(),
    check('email')
        .trim()
        .isEmail()
        .withMessage('Please enter a valid email address')
        .normalizeEmail(),
    check('password')
        .isLength({ min: 5 })
        .withMessage('Password must be at least 5 characters long')
        .matches(/\d/)
        .withMessage('Password must contain at least one number')
], async (req, res) => {
    try {
        // Detailed validation error checking
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log('Validation Errors:', JSON.stringify(errors.array(), null, 2));
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            console.log('User already exists:', req.body.email);
            return res.status(400).json({
                success: false,
                error: "Email already registered"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });

        console.log('User created successfully:', {
            id: user._id,
            name: user.name,
            email: user.email,
            password: user.password
        });

        res.status(201).json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error('Server Error:', {
            message: error.message,
            stack: error.stack,
            name: error.name
        });

        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                error: error.message
            });
        }

        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            message: error.message
        });
    }
});

module.exports = router;