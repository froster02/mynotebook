const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Schema definition for Notes model
 * @typedef {Object} NotesSchema
 * @property {mongoose.Types.ObjectId} user - Reference to the user who created the note
 * @property {string} title - The title of the note
 * @property {string} description - The content of the note
 * @property {string} tag - Category or tag for the note
 * @property {Date} date - The date when the note was created
 */
const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('notes', NotesSchema);