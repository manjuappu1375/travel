const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to MongoDB
connectDB();

// Create server
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
