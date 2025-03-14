const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');

/**
 * @typedef {import('../models/Notes')} Notes
 * Represents the Notes model for managing note-related operations
 * @module Notes
 */
/**
 * @module Notes
 * @requires models/Notes
 * @description A model representing user notes within the application.
 * This module provides functionality for managing and interacting with note documents in the database.
 */

/**
 * @route GET /api/notes
 * @description Get all notes for a user
 * @access Private
 */

// Route 1 : Get all notes using GET request
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;