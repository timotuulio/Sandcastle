const express = require('express');
const router = express.Router();
const db = require('../db.js');

// GET api/gear → fetch all gear
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM gear');
        res.json(result.rows);
    } catch (err) {
        console.error('Error querying gear:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

router.post('/', (req, res) => {
    res.send('Create a gear');
});

module.exports = router;
