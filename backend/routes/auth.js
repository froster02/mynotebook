/**
 * @module routes/auth
 * @requires express
 * @requires express-validator
 * @requires ../models/User
 */
const express = require('express');
const { body, check, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const JWT_SECRET = 'mynotebook';
var jwt = require('jsonwebtoken');

/**
 * @route POST /api/auth
 * @description Register a new user
 * @access Public
 */

// Route 1: Register a user using : POST /api/auth. No Login page is required.
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

        const data = {
            user: {
                id: user._id
            }
        }
        const jwtData = jwt.sign(data, JWT_SECRET);
        console.log('Token:', jwtData);

        // Send back the generated token instead of user details
        res.status(201).json({
            success: true,
            token: jwtData
        });

        console.log('User created successfully:', {
            id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: jwtData
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

//Route 2: Authenticate a user using : POST /api/auth/login. No Login page is required.
router.post('/createuser', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        // Check if user exists
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Try login using correct credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Try login using correct credentials" });
        }

        const payload = {
            user: {
                id: user.id
            }
        };
        const authtoken = jwt.sign(payload, JWT_SECRET);
        res.json({ authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


// Route 3: Get logged in user details using : POST /api/auth/getuser. Login required.
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {

    try {
        const userId = "todo";
        const user = await User.findById(userId).select("-password");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;