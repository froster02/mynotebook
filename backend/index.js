/**
 * Function to establish connection with MongoDB database
 * @function connectToMongo
 * @requires './db'
 * @returns {Promise} A promise that resolves when the connection is established
 * @throws {Error} If connection to MongoDB fails
 */
const connectToMongo = require('./db');
const express = require('express');

// Connect to MongoDB
connectToMongo();

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})