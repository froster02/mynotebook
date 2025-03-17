const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');

//Router 1 : Get all the notes using : GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
});

module.exports = router;