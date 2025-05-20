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

var cors = require('cors');

const app = express();
const port = process.env.PORT || 5010;

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Start server with error handling
const startServer = async () => {
    try {
        await connectToMongo(); // Ensure MongoDB connection is established
        await app.listen(port);
        console.log(`Server running on port ${port}`);
    } catch (error) {
        if (error.code === 'EADDRINUSE') {
            console.log(`Port ${port} is busy, trying ${port + 1}`);
            await app.listen(port + 1);
            console.log(`Server running on port ${port + 1}`);
        } else {
            console.error('Failed to start server:', error);
            process.exit(1);
        }
    }
};

startServer();