// app.js
const express = require('express');
const bodyParser = require('body-parser');
const adminPanelRoutes = require('./routes/adminPanel.route');
const errorHandlerMiddleware = require('./middlewares/errorHandler.middlewares');
const cors = require('cors');
const connectDB = require('./utils/db');
const app = express();



const dotenv = require('dotenv');
dotenv.config();

connectDB();


const PORT = 8002;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Middleware for logging (you can customize it as needed)
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});


app.use('/admin', adminPanelRoutes);

// Error handling middleware
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
