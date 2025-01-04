const express = require('express');
const photoRoutes = require('./routes/photoRoutes');

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', photoRoutes);

module.exports = app;