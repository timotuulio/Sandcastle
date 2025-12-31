const express = require('express');
const router = express.Router();
const db = require('../db.js'); // Adjust path if needed

// GET api/hero → fetch all heroes
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM hero');
        res.json(result.rows);
    } catch (err) {
        console.error('Error querying heroes:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

router.post('/', (req, res) => {
    res.send('Create a hero');
});

module.exports = router;
