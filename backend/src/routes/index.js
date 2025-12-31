const express = require('express');
const router = express.Router();
const exampleRoute = require('./example');
const heroRoute = require('./hero');
const gearRoute = require('./gear');

// Example route
router.use('/example', exampleRoute);
router.use('/hero', heroRoute);
router.use('/gear', gearRoute);

module.exports = router;
