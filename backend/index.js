const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

// Initialize MongoDB connection
connectToMongo();

const app = express();
const port = process.env.PORT || 5010;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Start server with error handling
const startServer = async () => {
    try {
        await connectToMongo();
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