const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const connectDB =require('./config/db')
const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
connectDB();
// Routes
app.use('/api', routes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
