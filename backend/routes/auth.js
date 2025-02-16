/**
 * Express module
 * @const
 * @module express
 * @description Express.js web application framework for Node.js
 * @requires express
 */
const express = require('express');
const router = express.Router();

// create a user using: POST "/api/auth/". Doesn't require Auth
router.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello world from auth.js');
});

module.exports = router;