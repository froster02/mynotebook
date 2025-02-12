const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017';

const connectToMongo = () => {
    console.log("Connecting to MongoDB...");
}

module.exports = connectToMongo;