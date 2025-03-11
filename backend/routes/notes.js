const express = require('express');
const router = express.Router();
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
const Notes = require('../models/Notes');

/**
 * @route GET /api/notes
 * @description Get all notes for a user
 * @access Private
 */
router.get('/', async (req, res) => {
    try {
        const notes = await Notes.find();
        res.json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;