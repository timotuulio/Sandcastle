const express = require('express');
const router = express.Router();

// GET /api/example
router.get('/', (req, res) => {
    res.json([
        { id: 1, name: 'Item X' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item Y' },
    ]);
});

module.exports = router;
