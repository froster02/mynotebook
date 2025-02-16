/**
 * Express module
 * @const
 * @module express
 * @description Express.js web application framework for Node.js
 * @requires express
 */
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello world from auth.js');
});

module.exports = router;