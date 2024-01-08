// app.js
const express = require('express');
const bodyParser = require('body-parser');
const adminPanelRoutes = require('./routes/adminPanel.route');
const errorHandlerMiddleware = require('./middlewares/errorHandler.middlewares');

const app = express();
const PORT = 8002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware for logging (you can customize it as needed)
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Use the admin panel routes
app.use('/admin', adminPanelRoutes);

// Error handling middleware
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
