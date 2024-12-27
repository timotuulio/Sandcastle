const express = require('express');
const router = express.Router();
const exampleRoute = require('./example');

// Example route
router.use('/example', exampleRoute);

module.exports = router;
