const express = require('express');
const cors = require('cors');
const routes = require('./routes/index'); // Import main routes
const heroRoutes = require('./routes/hero');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses JSON requests

// API Routes
app.use('/api', routes);
app.use('/api/hero', heroRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});