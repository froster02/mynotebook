const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'mynotebook';

/**
 * Middleware function to authenticate user using JWT token
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object 
 * @param {Function} next - Express next middleware function
 * @returns {Object} - Returns unauthorized error if token is invalid or missing
 * @throws {Error} - When token verification fails
 * @description Extracts JWT token from request header, verifies it and adds user data to request object
 */
const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({
            success: false,
            error: "Please authenticate using a valid token"
        });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            error: "Invalid token"
        });
    }
};

module.exports = fetchuser;