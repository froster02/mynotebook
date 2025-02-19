const mongoose = require('mongoose');

/**
 * MongoDB connection URL
 * @constant {string}
 */
const mongoURI = "mongodb://localhost:27017/mynotebook";

/**
 * Establishes connection to MongoDB database
 * @async
 * @function connectToMongo
 * @returns {Promise<void>} A promise that resolves when connection is established
 * @throws {Error} If connection fails
 */
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

module.exports = connectToMongo;