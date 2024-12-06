const express = require('express');
const cors = require('cors'); // Import the CORS package
const app = express();
const PORT = process.env.PORT || 5003;
const taskRoutes = require('./routes/taskRoutes');
const bodyParser = require('body-parser');

// Middleware to parse JSON
app.use(bodyParser.json());

// Use CORS middleware to allow requests from any origin
app.use(cors({
    origin: 'http://localhost:3000',  // Replace with your frontend URL if deploying
}));

// Use task routes
app.use('/api', taskRoutes);

// Root route for testing
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
