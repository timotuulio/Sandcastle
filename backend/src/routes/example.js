const express = require('express');
const router = express.Router();

// GET /api/example
router.get('/', (req, res) => {
    res.json([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ]);
});

module.exports = router;
