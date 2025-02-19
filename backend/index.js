/**
 * @file index.js
 * @description Entry point for the MyNotebook application
 * @requires express
 * @requires ./db
 */

/**
 * Function to establish connection with MongoDB database
 * @function connectToMongo
 * @requires './db'
 * @returns {Promise} A promise that resolves when the connection is established
 * @throws {Error} If connection to MongoDB fails
 */
const connectToMongo = require('./db');
const express = require('express');

// Initialize MongoDB connection
connectToMongo();

/**
 * Express application instance
 * @constant {express.Application}
 */
const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});