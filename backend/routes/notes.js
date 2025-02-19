const express = require('express');
const router = express.Router();
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